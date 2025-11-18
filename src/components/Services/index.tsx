import SectionTitle from "../Common/SectionTitle";

const servicesData = [
  {
    id: 1,
    title: "AI Strategy & Planning",
    description: "We identify where AI can help your business and create a step-by-step plan to put it to work.",
  },
  {
    id: 2,
    title: "AI-Powered Automation",
    description: "We leverage AI to get rid of repetitive work and make teams more efficient.",
  },
  {
    id: 3,
    title: "Own Your Data",
    description: "Run the latest AI models in your infrastructure and maintain data compliance (ISO, HIPPA, SOC2, GDPR).",
  },
  {
    id: 4,
    title: "Enhanced Decision-Making",
    description: "Automate and simplify decisions, escalations, and directives to focus on what's important.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-light py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Services"
          subtitle="Your AI-Driven Advantage"
          paragraph=""
          center
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                {service.id === 1 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                    <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="currentColor"/>
                  </svg>
                )}
                {service.id === 2 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 3L4 14H12V21L21 10H13V3Z" fill="currentColor"/>
                  </svg>
                )}
                {service.id === 3 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.8 21.74 12 23C17.2 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10V11H16V17H8V11H9.2V10C9.2 8.6 10.6 7 12 7ZM12 8.2C11.2 8.2 10.6 8.7 10.6 10V11H13.4V10C13.4 8.7 12.8 8.2 12 8.2Z" fill="currentColor"/>
                  </svg>
                )}
                {service.id === 4 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H7V9C7 7.9 7.9 7 9 7H11V9H9V11ZM13 11H11V9H13V7H15C16.1 7 17 7.9 17 9V11H15V13H17V15C17 16.1 16.1 17 15 17H13V15H15V13H13V11ZM9 13H11V15H9V13ZM3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3ZM3 5V19H21V5H3Z" fill="currentColor"/>
                  </svg>
                )}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-body-color text-base leading-relaxed dark:text-body-color-dark">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

