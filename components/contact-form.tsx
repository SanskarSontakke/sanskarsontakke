"use client"

import { SectionTitle } from "./section-title"

export function ContactForm() {
  return (
    <section id="contact" className="pb-24 pt-16 md:pt-24">
      <SectionTitle id="contact-title">Get In Touch</SectionTitle>

      <form className="mx-auto mt-10 max-w-3xl space-y-6 px-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" type="text" className="input-dark" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" className="input-dark" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Subject
          </label>
          <input id="subject" name="subject" type="text" className="input-dark" placeholder="How can I help?" />
        </div>
        <div className="pt-2">
          <button type="submit" className="btn-neon rounded-full px-6 py-3 font-semibold">
            Send Message
          </button>
        </div>
      </form>
    </section>
  )
}
