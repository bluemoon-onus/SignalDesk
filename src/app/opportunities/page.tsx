import { OpportunityBoard } from "@/components/opportunity-board";
import { aiDealArchitectMockData } from "@/data";

export default function OpportunitiesPage() {
  return <OpportunityBoard brief={aiDealArchitectMockData} />;
}
