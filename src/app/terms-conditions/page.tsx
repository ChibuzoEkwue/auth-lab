import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

const TermsPage = () => {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground mt-2">
            Last updated: June 24, 2026
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be
            bound by these Terms & Conditions. If you do not agree with any part
            of these terms, you must discontinue use of the website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Eligibility</h2>
          <p>
            You must be at least 18 years old or have the consent of a parent or
            legal guardian to use our services. By using the website, you
            represent that you meet these requirements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>
          <p>
            You agree to provide accurate and up-to-date information when
            creating an account and to promptly update any changes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            4. Acceptable Use of the Service
          </h2>
          <p>You agree not to:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Use the service for unlawful purposes.</li>
            <li>Attempt to gain unauthorized access to our systems.</li>
            <li>Upload malicious software, viruses, or harmful code.</li>
            <li>Harass, abuse, or harm other users.</li>
            <li>Scrape, copy, or redistribute content without permission.</li>
            <li>Interfere with the operation or security of the platform.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, designs, software, and materials on
            this website are owned by or licensed to us and are protected by
            applicable intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative
            works from our content without prior written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. User Content</h2>
          <p>
            If you submit content to the platform, you retain ownership of your
            content but grant us a worldwide, non-exclusive, royalty-free
            license to use, display, reproduce, and distribute it as necessary
            to provide our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services.
            We are not responsible for the content, policies, or practices of
            any third-party services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            8. Disclaimer of Warranties
          </h2>
          <p>
            The service is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis. We make no warranties regarding the
            reliability, availability, or accuracy of the service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising from your use of the website or services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the
            service at any time, with or without notice, for conduct that we
            believe violates these Terms & Conditions or is otherwise harmful to
            our users or business.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Changes to These Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Changes
            become effective when posted on this page. Continued use of the
            service after updates constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">12. Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed and interpreted in
            accordance with the laws applicable in your jurisdiction, without
            regard to conflict of law principles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">13. Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us at:
          </p>

          <div className="rounded-lg border p-4">
            <p>Email: legal@example.com</p>
            <p>Website: https://example.com</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
