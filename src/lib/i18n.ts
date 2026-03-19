export type Lang = "en" | "ko";

type Dict = Record<string, { en: string; ko: string }>;

// ─── All UI strings ───────────────────────────────────────────────────────────
export const dict: Dict = {
  // ── Language toggle ──────────────────────────────────────────────────────
  "lang.en": { en: "English", ko: "English" },
  "lang.ko": { en: "한국어", ko: "한국어" },

  // ── Brand / AppShell ─────────────────────────────────────────────────────
  "brand.tagline": {
    en: "From first signal to signed pilot — built for enterprise AI sales.",
    ko: "첫 신호부터 계약까지 — 엔터프라이즈 AI 세일즈를 위해 만들어졌습니다.",
  },
  "shell.active_account": { en: "Active account", ko: "현재 계정" },
  "shell.accounts_count": { en: "12 accounts", ko: "12개 계정" },
  "shell.footer_note": {
    en: "Pre-call to post-pilot. Every section answers a question the customer is already asking.",
    ko: "프리콜부터 파일럿 완료까지. 모든 섹션은 고객이 이미 던진 질문에 답합니다.",
  },
  "shell.account_focus": { en: "Account focus", ko: "현재 계정" },
  "shell.year1_value": { en: "year-1 value", ko: "1년 차 가치" },
  "shell.generate": { en: "Generate new account", ko: "새 계정 브리프 생성" },

  // ── Nav ──────────────────────────────────────────────────────────────────
  "nav.snapshot": { en: "Snapshot", ko: "스냅샷" },
  "nav.snapshot.desc": { en: "Why this account, why now", ko: "이 계정, 지금인 이유" },
  "nav.opportunities": { en: "Opportunities", ko: "기회 분석" },
  "nav.opportunities.desc": { en: "Where to open the conversation", ko: "어디서 대화를 열 것인가" },
  "nav.strategy": { en: "Strategy", ko: "전략 브리프" },
  "nav.strategy.desc": { en: "Stakeholders, objections, talk track", ko: "이해관계자·반론·대화 흐름" },
  "nav.pilot": { en: "Pilot & ROI", ko: "파일럿 & ROI" },
  "nav.pilot.desc": { en: "Scope, ROI, and the follow-up email", ko: "범위·ROI·후속 이메일" },

  // ── Snapshot ─────────────────────────────────────────────────────────────
  "snapshot.label": { en: "Account Snapshot", ko: "계정 스냅샷" },
  "snapshot.commercial_urgency": { en: "Commercial urgency", ko: "상업적 긴박성" },
  "snapshot.commercial_urgency.body": {
    en: "The window is open because of operational pressures the account is already feeling — not because of a future transformation mandate.",
    ko: "기회의 창이 열린 것은 고객이 이미 느끼고 있는 운영 압박 때문입니다 — 미래의 혁신 과제 때문이 아닙니다.",
  },
  "snapshot.pilot_window": { en: "Pilot window", ko: "파일럿 기회" },
  "snapshot.pilot_window.body": {
    en: "{{weeks}}-week pilot designed to prove value fast enough for the current operating review — not a future transformation budget cycle.",
    ko: "{{weeks}}주 파일럿은 다음 예산 사이클이 아닌 현재 운영 검토에서 가치를 증명하도록 설계되었습니다.",
  },
  "snapshot.financial_upside": { en: "Financial upside", ko: "재무적 기대 효과" },
  "snapshot.financial_upside.body": {
    en: "{{value}} anchored to measurable operational improvements — not a generic AI transformation story.",
    ko: "{{value}} — 일반적인 AI 혁신 스토리가 아닌 측정 가능한 운영 개선에 근거한 수치입니다.",
  },
  "snapshot.triggers.label": { en: "Recent trigger events", ko: "최근 트리거 이벤트" },
  "snapshot.triggers.title": { en: "Why the window is open right now", ko: "지금 기회의 창이 열린 이유" },
  "snapshot.triggers.desc": {
    en: "Recent events that create commercial urgency — each one increases appetite for a pilot that shows operational value without waiting for a broader program.",
    ko: "상업적 긴박성을 만드는 최근 이벤트들 — 각각은 더 큰 프로그램을 기다리지 않고 운영 가치를 보여주는 파일럿에 대한 수용도를 높입니다.",
  },
  "snapshot.triggers.implication": { en: "Commercial implication", ko: "영업적 시사점" },
  "snapshot.pain.label": { en: "Pain points", ko: "페인 포인트" },
  "snapshot.pain.title": {
    en: "What they are actually losing sleep over right now",
    ko: "지금 이 고객이 진짜 잠 못 이루는 이유",
  },
  "snapshot.pain.desc": {
    en: "These are not generic modernization issues. These are live operational pressures — tied to costs, timelines, and risks the account is already managing.",
    ko: "일반적인 현대화 과제가 아닙니다. 고객이 이미 관리하고 있는 비용·일정·리스크와 직결된 실제 운영 압박입니다.",
  },
  "snapshot.objectives.label": { en: "Business objectives", ko: "비즈니스 목표" },
  "snapshot.objectives.title": { en: "What leadership will actually fund", ko: "경영진이 실제로 예산을 승인할 목표" },
  "snapshot.objectives.desc": {
    en: "Tie every AI conversation directly to the KPIs this account will defend in operating reviews — not to AI capability in the abstract.",
    ko: "모든 AI 대화를 운영 검토에서 고객이 방어해야 할 KPI에 직접 연결하세요 — 추상적인 AI 역량이 아닌.",
  },
  "severity.high": { en: "High", ko: "높음" },
  "severity.med": { en: "Med", ko: "보통" },
  "severity.low": { en: "Low", ko: "낮음" },

  // ── Opportunities ────────────────────────────────────────────────────────
  "opp.board.label": { en: "Opportunity Board", ko: "기회 보드" },
  "opp.board.title": {
    en: "Prioritize where AI can open the {{company}} conversation now",
    ko: "AI로 {{company}}와의 대화를 지금 시작할 우선순위",
  },
  "opp.board.desc": {
    en: "Sequence the commercial motion. Start with opportunities that can show measurable value during the pilot, then expand toward deeper plays once the first win creates executive confidence.",
    ko: "상업적 모션을 순서화하세요. 파일럿에서 측정 가능한 가치를 보여줄 수 있는 기회부터 시작하고, 첫 번째 성공이 경영진의 신뢰를 만들면 더 깊은 플레이로 확장하세요.",
  },
  "opp.board.btn": { en: "Board", ko: "보드" },
  "opp.board.matrix_btn": { en: "2×2 Matrix", ko: "2×2 매트릭스" },
  "opp.p1.label": { en: "Do First", ko: "최우선 실행" },
  "opp.p1.col_desc": { en: "Best entry point for the commercial conversation right now.", ko: "지금 당장 상업적 대화를 시작하기에 가장 좋은 진입점." },
  "opp.p2.label": { en: "Strong Bet", ko: "유력 후보" },
  "opp.p2.col_desc": { en: "High-value motion worth backing once sponsorship is aligned.", ko: "스폰서십이 확보되면 지원할 가치가 높은 전략." },
  "opp.p3.label": { en: "Sequence Next", ko: "다음 단계" },
  "opp.p3.col_desc": { en: "Strategically important — build toward this once early wins land.", ko: "전략적으로 중요 — 초기 성과가 나면 이 방향으로 확장." },
  "opp.no_cases": { en: "No use cases assigned to this stage.", ko: "이 단계에 배정된 유즈케이스가 없습니다." },
  "opp.impact": { en: "Impact", ko: "임팩트" },
  "opp.difficulty": { en: "Difficulty", ko: "난이도" },
  "opp.time_to_value": { en: "Time to Value", ko: "가치 실현 기간" },
  "opp.matrix.label": { en: "Matrix View", ko: "매트릭스 뷰" },
  "opp.matrix.title": { en: "Impact vs. difficulty", ko: "임팩트 vs. 난이도" },
  "opp.matrix.desc": {
    en: "Use the matrix to decide where the commercial conversation should start now, where sponsorship is required, and which motions deserve to wait until early wins are banked.",
    ko: "매트릭스를 활용해 지금 상업적 대화를 어디서 시작할지, 어디에 스폰서십이 필요한지, 초기 성과가 쌓일 때까지 기다릴 플레이는 무엇인지 결정하세요.",
  },
  "opp.matrix.quick_wins": { en: "Quick wins", ko: "즉시 효과" },
  "opp.matrix.strategic_bets": { en: "Strategic bets", ko: "전략적 베팅" },
  "opp.matrix.incremental": { en: "Incremental plays", ko: "단계적 확장" },
  "opp.matrix.defer": { en: "Defer for later", ko: "이후로 미루기" },

  // ── Strategy ─────────────────────────────────────────────────────────────
  "strategy.map.label": { en: "Deal strategy", ko: "딜 전략" },
  "strategy.map.title": {
    en: "Who moves the deal, who validates it, and who can stall it",
    ko: "딜을 이끄는 사람, 검증하는 사람, 막는 사람",
  },
  "strategy.map.desc": {
    en: "Know who can sign it, who can kill it, and who needs a different message before you walk in the room. This map covers the roles that determine whether the deal closes or stalls.",
    ko: "방에 들어가기 전에 누가 서명할 수 있고, 누가 죽일 수 있으며, 누가 다른 메시지가 필요한지 파악하세요. 이 맵은 딜이 클로즈될지 막힐지를 결정하는 역할을 다룹니다.",
  },
  "strategy.deal_motion.label": { en: "Deal motion", ko: "딜 모션" },
  "strategy.deal_motion.heading": {
    en: "Anchor on fast operational value, not AI ambition.",
    ko: "AI 야망이 아닌 빠른 운영 가치에 집중하라.",
  },
  "strategy.deal_motion.body": {
    en: "Win the economic buyer with a measurable outcome tied to the KPI they already own. Win the champion with signal quality and workflow fit that makes their job easier. Keep the technical evaluator from defining the entire conversation around integration risk.",
    ko: "경제적 구매자는 그들이 이미 보유한 KPI와 연결된 측정 가능한 결과로 설득하세요. 챔피언은 신호 품질과 업무를 쉽게 만드는 워크플로우로 확보하세요. 기술 평가자가 대화 전체를 통합 리스크로 끌고 가지 않도록 선제적으로 관리하세요.",
  },
  "strategy.key_concern": { en: "Key concern", ko: "핵심 우려사항" },
  "strategy.recommended": { en: "Recommended approach", ko: "권장 접근 방식" },
  "strategy.objections.label": { en: "Likely objections", ko: "예상 반론" },
  "strategy.objections.title": {
    en: "What they will push on and how to answer",
    ko: "고객이 물고 늘어질 것들과 그 대응법",
  },
  "strategy.objections.desc": {
    en: "The goal is not to debate AI in the abstract. It is to show why this specific pilot is commercially safe, operationally credible, and worth executive time right now.",
    ko: "목표는 AI를 추상적으로 논쟁하는 것이 아닙니다. 이 구체적인 파일럿이 상업적으로 안전하고, 운영적으로 신뢰할 수 있으며, 지금 당장 경영진의 시간을 투자할 가치가 있다는 것을 보여주는 것입니다.",
  },
  "strategy.objection": { en: "Objection", ko: "반론" },
  "strategy.response": { en: "Suggested response", ko: "제안 답변" },
  "strategy.agenda.label": { en: "First meeting agenda", ko: "첫 미팅 어젠다" },
  "strategy.agenda.title": { en: "45-minute path to a real next step", ko: "45분 안에 실질적인 다음 단계로" },
  "strategy.agenda.desc": {
    en: "Built to leave the room with a confirmed scope, named owners, and a calendar path to pilot kickoff — not just a warm handshake and a follow-up.",
    ko: "확정된 범위, 명명된 담당자, 파일럿 킥오프까지의 일정을 확보한 채 자리를 뜨도록 설계되었습니다 — 단순한 악수와 후속 일정이 아닌.",
  },
  "strategy.positioning.label": { en: "Message positioning", ko: "메시지 포지셔닝" },
  "strategy.positioning.title": { en: "The narrative that should carry this deal", ko: "이 딜을 이끌어갈 핵심 내러티브" },
  "strategy.positioning.desc": {
    en: "These three sentences are the core talk track for executive, technical, and commercial conversations.",
    ko: "이 세 문장은 경영진·기술·상업 대화를 위한 핵심 대화 스크립트입니다.",
  },
  "strategy.talk_track": { en: "Talk track", ko: "대화 스크립트" },
  "strategy.influence": { en: "Influence:", ko: "영향력:" },

  // ── Pilot ────────────────────────────────────────────────────────────────
  "pilot.label": { en: "Pilot and ROI brief", ko: "파일럿 & ROI 브리프" },
  "pilot.title": {
    en: "A {{weeks}}-week path to prove value and earn expansion",
    ko: "{{weeks}}주 안에 가치를 증명하고 확장을 이끌어내는 경로",
  },
  "pilot.desc": {
    en: "Designed to give an executive sponsor and delivery team the same answer: what the pilot does, what success looks like, and why the economics justify moving now rather than next quarter.",
    ko: "경영진 스폰서와 실행 팀 모두에게 동일한 답을 주도록 설계되었습니다: 파일럿이 무엇을 하고, 성공이 어떤 모습이며, 다음 분기가 아닌 지금 진행해야 하는 경제적 근거는 무엇인가.",
  },
  "pilot.download": { en: "Download PDF", ko: "PDF 다운로드" },
  "pilot.exec_summary.label": { en: "Executive summary", ko: "경영진 요약" },
  "pilot.exec_summary.title": {
    en: "Three sentences a C-level sponsor can repeat internally",
    ko: "C레벨 스폰서가 내부에서 반복할 수 있는 세 문장",
  },
  "pilot.key_message": { en: "Key message", ko: "핵심 메시지" },
  "pilot.scope.label": { en: "Pilot scope", ko: "파일럿 범위" },
  "pilot.scope.title": { en: "What is in and what is deliberately out", ko: "포함 사항과 의도적으로 제외한 것" },
  "pilot.scope.desc": {
    en: "A focused scope protects the pilot from scope creep and gives the economic buyer a clear line between the pilot commitment and a full-scale expansion decision.",
    ko: "집중된 범위는 파일럿을 범위 확장으로부터 보호하고, 경제적 구매자에게 파일럿 약정과 전면 확장 결정 사이의 명확한 경계를 제공합니다.",
  },
  "pilot.timeline.label": { en: "{{weeks}}-week pilot timeline", ko: "{{weeks}}주 파일럿 타임라인" },
  "pilot.timeline.title": { en: "From kickoff to scale decision", ko: "킥오프부터 확장 결정까지" },
  "pilot.timeline.desc": {
    en: "Every phase has a defined objective and named deliverables — tight enough to fit inside the current {{company}} engagement, clear enough to hold up in an executive operating review.",
    ko: "모든 단계에는 정의된 목표와 명명된 산출물이 있습니다 — {{company}} 현재 영업 일정에 맞을 만큼 촘촘하고, 경영진 운영 검토에서 버틸 만큼 명확합니다.",
  },
  "pilot.deliverables": { en: "Deliverables", ko: "산출물" },
  "pilot.week": { en: "Week", ko: "주차" },
  "pilot.roi.label": { en: "ROI model", ko: "ROI 모델" },
  "pilot.roi.title": { en: "Economic case for moving forward", ko: "지금 진행해야 하는 경제적 근거" },
  "pilot.roi.desc": {
    en: "Conservative estimates based on publicly available benchmark data for comparable enterprise deployments in this sector.",
    ko: "해당 섹터의 유사한 엔터프라이즈 배포에 대한 공개 벤치마크 데이터를 기반으로 한 보수적 추정치입니다.",
  },
  "pilot.roi.investment": { en: "Investment", ko: "투자 비용" },
  "pilot.roi.savings": { en: "Projected savings", ko: "예상 절감액" },
  "pilot.roi.payback": { en: "Payback period", ko: "투자 회수 기간" },
  "pilot.roi.3yr": { en: "3-year value", ko: "3년 가치" },
  "pilot.roi.year1": { en: "Projected first-year return", ko: "1년 차 예상 수익" },
  "pilot.email.label": { en: "Follow-up email draft", ko: "후속 이메일 초안" },
  "pilot.email.title": { en: "Ready-to-send note after the first meeting", ko: "첫 미팅 후 즉시 발송 가능한 이메일" },
  "pilot.email.desc": {
    en: "Reinforces the commercial logic, names the next step, and keeps the momentum from the room alive before the next calendar opens.",
    ko: "상업적 논리를 재확인하고, 다음 단계를 명시하며, 다음 일정이 열리기 전에 미팅의 모멘텀을 이어갑니다.",
  },
  "pilot.email.subject": { en: "Subject", ko: "제목" },
  "pilot.email.body": { en: "Body", ko: "본문" },

  // ── Generate modal ───────────────────────────────────────────────────────
  "gen.label": { en: "AI Generation", ko: "AI 생성" },
  "gen.title": { en: "Generate a new account brief", ko: "새 계정 브리프 생성" },
  "gen.title.result": {
    en: "{{company}} — Generated brief",
    ko: "{{company}} — 생성된 브리프",
  },
  "gen.another": { en: "Generate another", ko: "다시 생성" },
  "gen.form.title": { en: "Account details", ko: "계정 정보" },
  "gen.form.desc": {
    en: "Provide context and the model will generate a full MEDDPICC-structured account brief — pain points, stakeholders, objections, pilot plan, and ROI in one pass.",
    ko: "컨텍스트를 입력하면 모델이 완전한 MEDDPICC 구조의 계정 브리프를 생성합니다 — 페인 포인트·이해관계자·반론·파일럿 플랜·ROI를 한 번에.",
  },
  "gen.company": { en: "Company name", ko: "회사명" },
  "gen.company.placeholder": { en: "e.g. Kakao Corporation", ko: "예: 카카오" },
  "gen.industry": { en: "Industry", ko: "산업" },
  "gen.situation": { en: "Situation context", ko: "상황 컨텍스트" },
  "gen.situation.opt": {
    en: "(optional — the model generates if left blank)",
    ko: "(선택 — 비워두면 모델이 자동 생성)",
  },
  "gen.situation.placeholder": {
    en: "Describe the account situation, key initiatives, challenges, or anything you know about this prospect. The more context you provide, the more specific and accurate the brief will be.",
    ko: "고객 상황, 주요 이니셔티브, 과제 등 알고 있는 내용을 입력하세요. 컨텍스트가 많을수록 더 구체적이고 정확한 브리프가 생성됩니다.",
  },
  "gen.model": { en: "Model", ko: "모델" },
  "gen.apikey": { en: "API key", ko: "API 키" },
  "gen.apikey.stored": { en: "— saved to localStorage", ko: "— localStorage에 저장됨" },
  "gen.loading": {
    en: "Generating brief — this takes 20–40 seconds…",
    ko: "브리프 생성 중 — 20~40초 정도 소요됩니다…",
  },
  "gen.submit": { en: "Generate account brief", ko: "계정 브리프 생성" },
  "gen.privacy": {
    en: "Your API key is sent only to {{provider}} via your own server. It is never stored externally.",
    ko: "API 키는 귀하의 서버를 통해 {{provider}}에만 전송됩니다. 외부에 저장되지 않습니다.",
  },
};

// ─── Translate helper ─────────────────────────────────────────────────────────
export function translate(
  lang: Lang,
  key: string,
  vars?: Record<string, string>
): string {
  let str = dict[key]?.[lang] ?? dict[key]?.en ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replaceAll(`{{${k}}}`, v);
    }
  }
  return str;
}
