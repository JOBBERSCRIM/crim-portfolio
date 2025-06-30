import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nm93yqr", 
        "template_2w711up",
        form.current,
        "9gCUmzeTpbNqzk55L"
      )
      .then(
        () => alert("✅ Message sent successfully!"),
        (error) => alert("❌ Failed to send: " + error.text)
      );
  };

  return (
    <section id="contact" className="py-20 px-4 text-center scroll-mt-24 bg-gray-100 dark:bg-gray-800 dark:text-white transition-colors">

      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-xl mx-auto text-left">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Enter a valid email address"
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          minLength={10}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded transition"
        >
          Send
        </button>
      </form>
      <p className="mt-6 text-sm">
        Or email me directly at{" "}
        <a
          href="mailto:crimjobbers@gmail.com"
          className="text-green-500 hover:text-green-600 hover:underline"
        >
          crimjobbers@gmail.com
        </a>
      </p>
    </section>
  );
}

export default Contact;
