const Testimonial = () => {
  return (
    <>
      <div className="ah7xl ls1ky">
        <h2 className="n8xpr sikx1 c9jt8 dark:text-neutral-200">
          Testimonials
        </h2>

        <div className="ylm8n hjdn7 fafsg vyfcq h5xf1 lnk45 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          {/* Testimonial 1 - Razat Shrestha */}
          <div className="hfus2 db8e5 or0yw">
            <blockquote>
              <span className="w4xo0 c9jt8 dark:text-neutral-200">
                I had the pleasure of mentoring Ayush and His strong command
                over the MERN stack, ability to design scalable solutions, and
                eagerness to learn set him apart. Ayush not only delivers
                quality code but also contributes ideas that improve the overall
                product. With his dedication and problem-solving mindset, I see
                him growing into a key software leader in the future.
              </span>

              <footer className="wc6fu">
                <div className="flex items-center n9hej">
                  <a
                    href="https://www.linkedin.com/in/razat-shrestha-74359a37b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="e731n yhc35 kghwt"
                      style={{ height: "40px", width: "40px" }}
                      src="/razat.png"
                      alt="Razat"
                    />
                  </a>

                  <div className="hlt95">
                    <div className="xs2f2 jy5gh dark:text-neutral-500">
                      Razat Shrestha <br />
                      <span className="text-sm text-gray-400">
                        Tech Lead @{" "}
                        <a
                          href="https://thebigsolutions.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          The Big Solutions
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Testimonial 2 - Mantosh Sah */}
          <div className="db8e5 or0yw">
            <blockquote>
              <span className="w4xo0 c9jt8 dark:text-neutral-200">
                Ayush is one of the most reliable and detail-oriented developers
                I’ve worked with. His expertise in React and frontend
                development has been a huge asset to the projects we
                collaborated on. He approaches challenges with creativity ensuring high-quality results every time. I truly
                value his professionalism and problem-solving abilities.
              </span>

              <footer className="wc6fu">
                <div className="flex items-center n9hej">
                  <a
                    href="https://mantoshsah.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="e731n yhc35 kghwt"
                      style={{ height: "40px", width: "40px" }}
                      src="/mantosh.png"
                      alt="Mantosh Sah"
                    />
                  </a>

                  <div className="hlt95">
                    <div className="xs2f2 jy5gh dark:text-neutral-500">
                      Mantosh Sah <br />
                      <span className="text-sm text-gray-400">
                        Sr. Frontend Engineer @{" "}
                        <a
                          href="https://mypay.com.np/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          MyPay
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
