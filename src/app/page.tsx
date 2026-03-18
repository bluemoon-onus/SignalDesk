import { redirect } from "next/navigation";

import { DEFAULT_ACCOUNT_ID } from "@/data";

export default function HomePage() {
  redirect(`/${DEFAULT_ACCOUNT_ID}/snapshot`);
}
