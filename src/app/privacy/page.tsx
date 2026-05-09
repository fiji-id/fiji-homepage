import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          1. Information We Collect
        </h2>
        <p>
          When you use our registration form, we collect your name, phone
          number, and program interest. This data is used solely to facilitate
          your inquiry via WhatsApp.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. Data Usage</h2>
        <p>
          We do not store your personal data on our servers. The information is
          processed locally to generate a WhatsApp message for your convenience.
        </p>
      </section>
    </LegalLayout>
  );
}
