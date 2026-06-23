import { RiskRegister } from "./risk-register";
import { IssueLog } from "./issue-log";
import { ActionTracker } from "./action-tracker";
import { DecisionLog } from "./decision-log";

export function GovernanceDashboard() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <RiskRegister />
      <IssueLog />
      <ActionTracker />
      <DecisionLog />
    </section>
  );
}