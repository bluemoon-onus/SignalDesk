import type { AccountBrief, AccountMeta } from "@/types";

import { skHynix } from "./sk-hynix";
import { samsungElectronics } from "./samsung-electronics";
import { hyundaiMotor } from "./hyundai-motor";
import { lgElectronics } from "./lg-electronics";
import { skTelecom } from "./sk-telecom";
import { doosanEnerbility } from "./doosan-enerbility";
import { kepco } from "./kepco";
import { cjLogistics } from "./cj-logistics";
import { ncsoft } from "./ncsoft";
import { kbKookminBank } from "./kb-kookmin-bank";
import { miraeAsset } from "./mirae-asset";
import { rainbowRobotics } from "./rainbow-robotics";

// ─── Account registry ─────────────────────────────────────────────────────────
export const accountRegistry: Record<string, AccountBrief> = {
  "sk-hynix": skHynix,
  "samsung-electronics": samsungElectronics,
  "hyundai-motor": hyundaiMotor,
  "lg-electronics": lgElectronics,
  "sk-telecom": skTelecom,
  "doosan-enerbility": doosanEnerbility,
  kepco: kepco,
  "cj-logistics": cjLogistics,
  ncsoft: ncsoft,
  "kb-kookmin-bank": kbKookminBank,
  "mirae-asset": miraeAsset,
  "rainbow-robotics": rainbowRobotics
};

// ─── Ordered list for sidebar nav ────────────────────────────────────────────
export const accountList: AccountMeta[] = [
  { id: "sk-hynix", company: "SK Hynix", industry: "Semiconductor" },
  { id: "samsung-electronics", company: "Samsung Electronics", industry: "Consumer Electronics" },
  { id: "hyundai-motor", company: "Hyundai Motor", industry: "Automotive" },
  { id: "lg-electronics", company: "LG Electronics", industry: "Home Appliance & HVAC" },
  { id: "sk-telecom", company: "SK Telecom", industry: "Telecom" },
  { id: "doosan-enerbility", company: "Doosan Enerbility", industry: "Energy & Power Equipment" },
  { id: "kepco", company: "KEPCO", industry: "Power Utility" },
  { id: "cj-logistics", company: "CJ Logistics", industry: "Logistics & Fulfillment" },
  { id: "ncsoft", company: "NCSoft", industry: "Gaming" },
  { id: "kb-kookmin-bank", company: "KB Kookmin Bank", industry: "Banking" },
  { id: "mirae-asset", company: "Mirae Asset Securities", industry: "Securities" },
  { id: "rainbow-robotics", company: "Rainbow Robotics", industry: "Robotics" }
];

export const DEFAULT_ACCOUNT_ID = "sk-hynix";

export function getAccount(id: string): AccountBrief | null {
  return accountRegistry[id] ?? null;
}
