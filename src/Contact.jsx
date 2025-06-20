import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sasheie", "template_h8u5eye", form.current, {
        publicKey: "w1opD99tB2iNjhwiP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* Contact Section */}
      <div className="w-full py-12 bg-black text-white  px-4" id="Contact">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="flex flex-col gap-4 w-full lg:w-[600px]  border p-14 rounded-xl border-gray-500">
              <h2 className="text-3xl font-bold text-gray-500 mb-2">
                Get in Touch
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
              />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                className="w-full bg-gray-800 text-white px-4 py-2 h-40 rounded border border-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
              />
              <button
                onClick={Contact}
                className="w-full mt-2 bg-gray-600 px-6 py-2 rounded shadow-[0_0_10px_#999999] hover:bg-black hover:border hover:border-gray-500 hover:text-gray-500 hover:shadow-[0_0_20px_#999999]"
              >
                Send
              </button>
            </div>
          </form>

          {/* Profile Links */}
          <div className="linkMbile">
            <div className="w-full text-center md:text-right">
              <h2 className="text-2xl font-semibold mb-4 text-gray-500">
                My Profiles
              </h2>
              <ul className="flex justify-center md:justify-end gap-6 text-xl">
                <li>
                  <a
                    href="https://github.com/na3em17"
                    className="hover:text-gray-500 hover:underline underline-offset-4 transition-all duration-200"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/naeem-alhindi-720b29310/"
                    className="hover:text-gray-500 hover:underline underline-offset-4 transition-all duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/neemo_bh/"
                    className="hover:text-gray-500 hover:underline underline-offset-4 transition-all duration-200"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Contact;
