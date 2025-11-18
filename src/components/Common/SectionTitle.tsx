const SectionTitle = ({
  title,
  subtitle,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  subtitle?: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        {subtitle && (
          <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white sm:text-3xl">
            {subtitle}
          </h3>
        )}
        {paragraph && (
          <p className="text-base leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
