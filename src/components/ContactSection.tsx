"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { MotionSection } from "@/components/MotionSection";

const initial: ContactState = { ok: false, message: "" };

export function ContactSection() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initial,
  );

  return (
    <MotionSection
      id="contact"
      className="border-t border-white/10 bg-navy-900 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tell us what you&apos;re rebuilding
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            Share machine models, quantities, and timeline—we&apos;ll route your
            inquiry to a parts specialist.
          </p>
          <div className="mt-10 h-px max-w-md bg-gradient-to-r from-brand to-transparent" />
          <p className="mt-8 text-sm text-white/55">
            Prefer voice?{" "}
            <a
              href="tel:+917710787777"
              className="font-semibold text-white hover:text-brand"
            >
              +91.7710787777
            </a>
          </p>
        </div>

        <motion.form
          action={formAction}
          className="grid gap-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Name"
              className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-brand/40 focus:ring-2"
              autoComplete="name"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-brand/40 focus:ring-2"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone (optional)"
                className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-brand/40 focus:ring-2"
                autoComplete="tel"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Equipment models, part numbers, or questions"
              className="w-full resize-y rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-brand/40 focus:ring-2"
            />
          </div>
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send message"}
          </button>
          {state.message ? (
            <p
              className={`text-sm ${
                state.ok ? "text-emerald-400" : "text-amber-200"
              }`}
              role="status"
            >
              {state.message}
            </p>
          ) : null}
        </motion.form>
      </div>
    </MotionSection>
  );
}
