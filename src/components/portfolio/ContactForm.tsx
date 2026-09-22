import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";

import { sendContactMessage } from "@/lib/contact.functions";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emptyForm: Fields = { name: "", email: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Name is required.";
  else if (name.length < 2) errors.name = "Please enter at least 2 characters.";

  if (!email) errors.email = "Email is required.";
  else if (!emailPattern.test(email)) errors.email = "Please enter a valid email address.";

  if (!message) errors.message = "Message is required.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";

  return errors;
}

export function ContactForm() {
  const submit = useServerFn(sendContactMessage);
  const [values, setValues] = useState<Fields>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const update = (field: keyof Fields) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      setStatusMessage("");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const result = await submit({
        data: {
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        },
      });

      if (result.success) {
        setStatus("success");
        setStatusMessage("Message sent successfully!");
        setValues(emptyForm);
      } else {
        setStatus("error");
        setStatusMessage(result.message);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Unable to send your message right now. Please try again later.");
    }
  }

  const fieldClass =
    "w-full border-0 border-b border-border bg-transparent pb-3 pt-1 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10"
    >
      <div className="space-y-8">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm text-muted-foreground">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name")(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-2 text-sm text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm text-muted-foreground">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email")(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClass}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-2 text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm text-muted-foreground">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            value={values.message}
            onChange={(e) => update("message")(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`${fieldClass} resize-none`}
          />
          {errors.message ? (
            <p id="contact-message-error" className="mt-2 text-sm text-destructive">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="pill-button px-8 py-3.5 text-sm hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {statusMessage ? (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${status === "success" ? "text-foreground" : "text-destructive"}`}
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
