import {
  Mail,
  User,
  MessageSquare,
  Send,
  MapPin,
  Phone,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Form submission would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <>
      <main id="content">
        <div className="w-full vwt7a mx-auto be37 fglch xf1r4 ids43">
          <div className="m1axg uo8pm">
            <h2 className="n8xpr sikx1 c9jt8 dark:text-neutral-200 mb-2">
              Say Hi 👋
            </h2>
             <p
  className="ja90s xs2f2 jy5gh dark:text-neutral-500"
  style={{ marginBottom: "15px" }}
>
  Backend not found (404) 😅 — please email me at{" "}
  <a
    href="mailto:ayushniraula18@gmail.com"
    className="text-blue-600 underline hover:text-blue-800"
  >
    ayushniraula18@gmail.com
  </a>
  .
</p>

            <form>
              <div className="rmzo7 flex flex-col sm:flex-row items-center o4ndh rsdjd lnk45 mb-2 pb094 dark:border-neutral-700">
                <div className="relative w-full">
                  <label htmlFor="hero-input" className="et50x">
                    Subscribe
                  </label>
                  <div className="absolute rm8lf gihcw flex items-center gxxgf gbcuh yuavq">
                    <svg
                      className="e731n b9gop rr36x dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="od5va yzhap xp93d s9dcx block w-full azddh pb094 glhrq k16qo vv6e0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="rmzo7 flex flex-col sm:flex-row items-center o4ndh rsdjd lnk45 pb094 dark:border-neutral-700">
                <div className="relative w-full">
                  <label htmlFor="hero-input" className="et50x">
                    Subscribe
                  </label>
                  <div className="absolute rm8lf gihcw flex items-center gxxgf gbcuh yuavq">
                    <svg
                      className="e731n b9gop rr36x dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="od5va yzhap xp93d s9dcx block w-full azddh pb094 glhrq k16qo vv6e0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500"
                    placeholder="Enter your message"
                  />
                </div>
                <a
                  className="w-full sm:w-auto s1lil s53ws sfv8v inline-flex jkwm1 items-center n9hej w4xo0 cnneu m74u5 rsdjd azddh y73k3 kew0r xengx focus:outline-hidden f9dn7 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
                  href="#"
                >
                  Send
                  <svg
                    className="e731n h6zia"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
              <p className="ja90s xs2f2 jy5gh dark:text-neutral-500">
                Have a project in mind or just want to chat? I'd love to hear
                from you. Send me a message and I'll get back to you as soon as
                possible.
              </p>
            </form>

            <div className=" gap-12">
              {/* Contact Info & Social Links */}
              <div className="space-y-8">
                <div>
                  <p className="w4xo0 fd43e dark:text-neutral-400 mb-6"></p>
                </div>

                <div className="dbe5 yfv61 lnk45 dark:border-neutral-700"></div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h2 className="n8xpr sikx1 c9jt8 dark:text-neutral-200 mb-8">
                    Connect with me 😁
                  </h2>

                  <ul className="grid grid-cols-1 gap-4">
                    {/* LinkedIn */}
                    <li className="flex items-center uq0ux group hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-lg transition-all duration-300 hover:scale-105">
                      <Linkedin className="e731n h6zia c9jt8 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                      <a
                        className="z4zqw jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                        href="https://www.linkedin.com/in/ayush-niraula-18-link/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/ayush-niraula-18-link
                      </a>
                    </li>

                    {/* GitHub */}
                    <li className="flex items-center uq0ux group hover:bg-gray-50 dark:hover:bg-gray-900/10 rounded-lg transition-all duration-300 hover:scale-105">
                      <Github className="e731n h6zia c9jt8 dark:text-neutral-200 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300" />
                      <a
                        className="z4zqw jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300"
                        href="https://github.com/ayushniraula18"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/ayushniraula18
                      </a>
                    </li>

                    {/* Instagram */}
                    <li className="flex items-center uq0ux group hover:bg-pink-50 dark:hover:bg-pink-900/10 rounded-lg transition-all duration-300 hover:scale-105">
                      <Instagram className="e731n h6zia c9jt8 dark:text-neutral-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300" />
                      <a
                        className="z4zqw jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300"
                        href="https://instagram.com/the.ayush.niraula"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @the.ayush.niraula
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg border border-gray-200 dark:border-neutral-700">
                  <p className="text-sm text-gray-600 dark:text-neutral-400 mb-2">
                    <span className="font-semibold">Response Time:</span>{" "}
                    Usually within 24 hours
                  </p>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    <span className="font-semibold">Availability:</span> Open
                    for freelance projects and collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
