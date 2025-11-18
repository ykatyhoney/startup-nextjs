import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-light overflow-hidden py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                Your Next Chapter<br />
                Starts with a Call
              </h2>
              <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
              <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span>Newark, DE</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span>Mar del Plata, Argentina</span>
                </div>
              </div>
              <Link
                href="#contact"
                className="inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 duration-300 ease-in-out hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
              >
                Book Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
