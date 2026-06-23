import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";

import { CapabilityMap } from "../../components/architecture/capability-map";
import { BusinessArchitecture } from "../../components/architecture/business-architecture";
import { ApplicationArchitecture } from "../../components/architecture/application-architecture";
import { DataArchitecture } from "../../components/architecture/data-architecture";
import { TechnologyArchitecture } from "../../components/architecture/technology-architecture";
import { TransformationRoadmap } from "../../components/architecture/transformation-roadmap";

export default function EnterpriseArchitecturePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Enterprise Architecture"
        subtitle="Business, Application, Data, Technology Architecture, Capability Map, dan Transformation Roadmap."
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

      <section className="mt-8">
        <TransformationRoadmap />
      </section>
    </DashboardLayout>
  );
}