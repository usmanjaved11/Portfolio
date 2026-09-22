import { ContactForm } from "./ContactForm";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s Get in Touch
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Have a question, feedback, or interested in collaborating? I&apos;d love to hear from
            you!
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
