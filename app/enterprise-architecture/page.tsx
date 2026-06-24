import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";

import { CapabilityMap } from "../../components/architecture/capability-map";
import { BusinessArchitecture } from "../../components/architecture/business-architecture";
import { ApplicationArchitecture } from "../../components/architecture/application-architecture";
import { DataArchitecture } from "../../components/architecture/data-architecture";
import { TechnologyArchitecture } from "../../components/architecture/technology-architecture";
import { TransformationRoadmap } from "../../components/architecture/transformation-roadmap";

import { CapabilityBasedPlanning } from "../../components/architecture/capability-based-planning";
import { ArchitecturePrinciples } from "../../components/architecture/architecture-principles";
import { StakeholderMap } from "../../components/architecture/stakeholder-map";
import { ValueStreamMap } from "../../components/architecture/value-stream-map";
import { TargetArchitecture } from "../../components/architecture/target-architecture";
import { ArchitectureGovernance } from "../../components/architecture/architecture-governance";

import { AsIsArchitecture } from "../../components/architecture/as-is-architecture";
import { ToBeArchitecture } from "../../components/architecture/to-be-architecture";
import { GapAnalysis } from "../../components/architecture/gap-analysis";
import { TransitionArchitecture } from "../../components/architecture/transition-architecture";
import { ImplementationRoadmap } from "../../components/architecture/implementation-roadmap";
import { ArchitectureWorkPackages } from "../../components/architecture/architecture-work-packages";

export default function EnterpriseArchitecturePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Enterprise Architecture"
        subtitle="TOGAF ADM, Enterprise Architecture Repository, Capability-Based Planning, dan Digital Transformation Blueprint."
      />

      <section className="grid gap-6">
        <CapabilityMap />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <BusinessArchitecture />
        <ApplicationArchitecture />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <DataArchitecture />
        <TechnologyArchitecture />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <CapabilityBasedPlanning />
        <ArchitecturePrinciples />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <StakeholderMap />
        <ValueStreamMap />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <AsIsArchitecture />
        <ToBeArchitecture />
      </section>

      <section className="mt-8">
        <GapAnalysis />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <TargetArchitecture />
        <ArchitectureGovernance />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <TransitionArchitecture />
        <ImplementationRoadmap />
      </section>

      <section className="mt-8">
        <ArchitectureWorkPackages />
      </section>

      <section className="mt-8">
        <TransformationRoadmap />
      </section>
    </DashboardLayout>
  );
}