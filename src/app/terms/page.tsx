import LegalLayout from "@/components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">1. Use of Website</h2>
        <p>
          By accessing the FIJI website, you agree to use our inquiry system for
          legitimate registration purposes only.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          2. Intellectual Property
        </h2>
        <p>
          All content, including the FIJI logo and martial arts descriptions,
          are the property of FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia).
        </p>
      </section>
    </LegalLayout>
  );
}
