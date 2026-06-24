import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";

import { TransformationVision } from "../../components/transformation/transformation-vision";
import { TargetOperatingModel } from "../../components/transformation/target-operating-model";
import { BenefitsRealization } from "../../components/transformation/benefits-realization";
import { TransformationProgram } from "../../components/transformation/transformation-program";
import { CapabilityMaturity } from "../../components/transformation/capability-maturity";
import { TransformationOffice } from "../../components/transformation/transformation-office";

export default function DigitalTransformationPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Digital Transformation Blueprint"
        subtitle="Transformation Vision, Operating Model, Benefits Realization, Capability Maturity, dan Transformation Office."
      />

      <section className="grid gap-6">
        <TransformationVision />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <TargetOperatingModel />
        <BenefitsRealization />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <TransformationProgram />
        <CapabilityMaturity />
      </section>

      <section className="mt-8">
        <TransformationOffice />
      </section>
    </DashboardLayout>
  );
}