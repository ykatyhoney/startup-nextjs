import SectionTitle from "../Common/SectionTitle";

const leadershipData = [
  {
    id: 1,
    name: "Rodrigo Gatica",
    role: "Co-Founder & Chief Executive Officer",
    description: [
      "Leading projects since 2016, recruiting tech talent since 2018.",
      "Co-founded startups in Fintech and Communications.",
      "Ran operations at companies in hypergrowth mode.",
    ],
    linkedin: "#",
  },
  {
    id: 2,
    name: "Matias Gea",
    role: "Co-Founder & Chief Technology Officer",
    description: [
      "15 years in the tech industry with hands-on experience as Tech Lead and Architect.",
      "R&D focused, with proven track record building successful AI products.",
      "Expertise in cloud, data, and AI technologies.",
    ],
    linkedin: "#",
  },
  {
    id: 3,
    name: "Boris Hrnčić",
    role: "Co-Founder & Chief Design Officer",
    description: [
      "Designing user-centric digital products since 2010.",
      "Vetted in the top 3% of designers worldwide by Toptal in 2017.",
      "Led high-performance teams in startups and well-established multinationals.",
    ],
    linkedin: "#",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="bg-white py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Leadership"
          subtitle="Guiding Your AI Journey"
          paragraph=""
          center
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {leadershipData.map((leader) => (
            <div
              key={leader.id}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-1 text-xl font-semibold text-black transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                {leader.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-primary">
                {leader.role}
              </p>
              <ul className="space-y-2">
                {leader.description.map((item, index) => (
                  <li
                    key={index}
                    className="text-body-color flex items-start gap-2 text-sm leading-relaxed dark:text-body-color-dark"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={leader.linkedin}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                LinkedIn
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

