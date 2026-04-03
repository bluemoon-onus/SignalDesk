# SignalDesk — 프로젝트 요약

## 프로젝트 개요 및 의의

SignalDesk는 엔터프라이즈 AI 영업을 위한 **전략적 딜 인텔리전스 도구**다. 특정 고객사를 입력하면 AI가 영업 전략 전체(왜 지금 이 고객인가, 주요 AI 도입 기회, 이해관계자 맵, 반론 대응, 파일럿 플랜, ROI 모델, 임원 요약)를 생성해준다.

**대상 사용자**: AI·로보틱스·반도체 기업의 채용 담당자 및 영업 리더.
**목적**: 단순 앱 데모가 아닌, "전략적 AI 비즈니스 리더"로서의 역량을 보여주는 포트폴리오 결과물.
**기준**: 모든 카피는 VP급 시니어 AE가 직접 쓴 것처럼 읽혀야 하며, 숫자는 한국 엔터프라이즈 딜 기준($500K–$5M)으로 현실적이어야 한다.

---

## 기술 스택

| 레이어 | 기술 |
|---|---|
| 프레임워크 | Next.js 14 (App Router) |
| 언어 | TypeScript 5 |
| 스타일링 | Tailwind CSS 3 + shadcn/ui |
| UI 컴포넌트 | Radix UI, Lucide React |
| 폰트 | Manrope (UI), IBM Plex Mono (코드/수치) |
| AI SDK | `@anthropic-ai/sdk` (Claude), `openai` (GPT-4o 선택적) |
| 상태 저장 | Upstash Redis (KV — 생성된 어카운트 영구 저장) |
| Rate Limiting | Upstash Redis (IP별 일일 할당량) |
| 배포 | Vercel (Analytics 포함) |
| 테마 | `next-themes` (다크모드 지원) |

---

## 사용된 AI 기능 및 컨셉

### 핵심 AI 기능

**1. 어카운트 브리프 생성 (`/api/generate`)**
Claude Sonnet 4.6를 호출해 회사명·산업·상황만 입력하면 완전한 `AccountBrief` JSON을 생성한다. 생성 결과는 Upstash Redis에 저장되어 재방문 시 재생성 없이 불러올 수 있다.

**2. 세 가지 영업 프레임워크 동시 적용**
시스템 프롬프트에 다음 세 프레임워크를 동시에 강제한다:
- **MEDDPICC** — Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion, Competition
- **Value Selling** — 페인 포인트 수치화, KPI 기반 ROI 앵커링, 빠른 측정값 생성을 위한 파일럿 설계
- **Challenger Sale** — 인사이트 제공(Teach), 경제적 구매자 맞춤(Tailor), 구체적 넥스트 스텝 제안(Take Control)

**3. 다국어 생성 (i18n)**
`lang` 파라미터로 영어·한국어·일본어·중국어 등 9개 언어 출력 지원. 회사명·기술 약어는 원문 유지, 나머지 전체를 지정 언어로 생성.

**4. 회사 유효성 검증 (`/api/validate-company`)**
입력한 회사명이 실존 기업인지 사전 검증.

**5. 실시간 진행 단계 표시**
생성 중 단계별 체크리스트 UI(80% → 90% → 99%)로 사용자에게 진행 상황을 시각적으로 피드백.

### AI 설계 컨셉

- **구조화 출력 강제**: 시스템 프롬프트로 TypeScript 인터페이스와 동일한 JSON 스키마를 직접 명시. 마크다운·설명 없이 raw JSON만 반환.
- **카피 품질 기준 내재화**: "VP가 CEO에게 그대로 포워딩할 수 있는 수준" 기준을 프롬프트에 직접 명시.
- **Rate Limiting**: IP별 일일 할당량을 Redis로 관리, 생성 성공 시에만 차감.
- **Graceful Fallback**: Redis 미설정 시 빈 배열 반환, 로컬 개발 환경 그대로 동작.

---

## 하이레벨 디렉토리 구조

```
signaldesk/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # → 기본 어카운트로 리다이렉트
│   │   ├── layout.tsx                  # 루트 레이아웃 (테마, Analytics)
│   │   ├── [accountId]/
│   │   │   ├── layout.tsx              # 어카운트별 AppShell 래퍼
│   │   │   ├── snapshot/page.tsx       # 어카운트 현황 (상황·페인포인트·트리거)
│   │   │   ├── opportunities/page.tsx  # AI 기회 보드 (P1/P2/P3 우선순위)
│   │   │   ├── strategy/page.tsx       # 딜 전략 (반론·포지셔닝·이해관계자)
│   │   │   └── pilot/page.tsx          # 파일럿 플랜 (단계·ROI·임원 요약)
│   │   └── api/
│   │       ├── generate/route.ts       # Claude AI 생성 엔드포인트
│   │       ├── validate-company/route.ts
│   │       ├── accounts/route.ts       # KV 저장 어카운트 CRUD
│   │       └── quota/route.ts          # 남은 할당량 조회
│   ├── components/
│   │   ├── app-shell.tsx               # 네비게이션 + 언어 토글
│   │   ├── generate-modal.tsx          # AI 생성 입력 폼 + 진행 UI
│   │   ├── opportunity-board.tsx       # 기회 카드 그리드
│   │   ├── strategy-brief.tsx          # 딜 전략 + 이해관계자 카드
│   │   └── pilot-brief.tsx             # 파일럿 타임라인 + ROI 모델
│   ├── data/
│   │   └── accounts/                   # 12개 한국 기업 목(mock) 데이터
│   │       ├── samsung-electronics.ts
│   │       ├── sk-hynix.ts
│   │       ├── hyundai-motor.ts
│   │       └── ...                     # (총 12개)
│   ├── types/
│   │   ├── account-brief.ts            # AccountBrief 전체 타입 정의
│   │   └── ai-deal-architect.ts
│   ├── lib/
│   │   ├── kv.ts                       # Upstash Redis CRUD 래퍼
│   │   ├── rate-limit.ts               # IP별 할당량 관리
│   │   ├── brief-store.ts              # 브라우저 세션 캐시
│   │   └── i18n.ts                     # 언어 유틸리티
│   └── contexts/
│       └── language-context.tsx        # EN/KO 전환 Context
├── docs/
│   └── summary.md                      # 이 파일
├── AGENTS.md                           # AI 에이전트 작업 규칙
├── CLAUDE.md                           # Claude Code 프로젝트 지침
└── next.config.mjs
```

---

## 주요 변경 이력

| 커밋 | 내용 |
|---|---|
| `cf3b6b1` | Initial commit — 프로젝트 초기 구조 |
| `408680f` | AI Deal Architect 타입 및 목 데이터 추가 |
| `0a27023` | Snapshot·Opportunity 뷰 구현 |
| `b5928a8` | Deal Strategy·Pilot Brief 페이지 구현 |
| `fd1b378` | 데이터 레이어 리팩터 + 8개 어카운트 확장 |
| `2f5879c` | 산업별 색상 코딩 포함 어카운트 스위처 UI |
| `d3fb970` | **AI 생성 모드** — Claude + GPT-4o 어카운트 브리프 생성기 |
| `dca9997` | EN/KO i18n 토글, 생성 모달 중앙 정렬 |
| `cb6756b` | 서버사이드 API 키, Rate Limiting, Gemini 지원, 회사 유효성 검증, 관리 패널 |
| `f113d8f` | 12개 전체 어카운트 완전 한국어 번역 (이해관계자·ROI·전략) |
| `833d7ea` | **Upstash Redis KV** — 생성된 어카운트 영구 저장 |
| `4804be0` | Rate Limiting을 인메모리에서 Redis로 마이그레이션 |
| `25179d6` | Follow-up email·agenda 제거로 토큰 절감, CTA 헤더 이동 |
| `bd88618` | 헤더 CTA 리디자인 — 중앙 정렬, breathing 버튼 애니메이션 |
| `5816502` | 출력 토큰 ~40% 절감, CTA 카피 업데이트 |
| `410d349` | 원형 Progress Ring + % 카운터 |
| `c747420` | 원형 Progress → 단계별 체크리스트로 교체, 무한루프 수정 |
| `27fc8ea` | 최종 단계 3단계 분할 (80/90/99%), 99% 대기 힌트 추가 |
| `c1de758` | **Vercel Analytics** 활성화 |
