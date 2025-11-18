import SectionTitle from "../Common/SectionTitle";

const cultureData = [
  {
    id: 1,
    title: "R&D at Our Core",
    description:
      "We invest heavily in R&D to stay at the forefront of AI. This empowers your business with cutting-edge tools to outperform competitors.",
  },
  {
    id: 2,
    title: "Expert Team, Reliable Results",
    description:
      "We hire only A-players with an extraordinary drive to excel. By focusing on quality, every client gets meaningful success.",
  },
  {
    id: 3,
    title: "Long-Term Impact",
    description:
      "We don't just implement AI—we future-proof your operations. Our solutions grow with your business, automating workflows and refining decisions.",
  },
];

const Culture = () => {
  return (
    <section id="culture" className="bg-gray-light py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
            Culture
          </h2>
          <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white sm:text-3xl">
            Innovative by Culture,<br />
            Not by Chance
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {cultureData.map((item) => (
            <div
              key={item.id}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-3 text-xl font-semibold text-black transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-body-color text-base leading-relaxed dark:text-body-color-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;

