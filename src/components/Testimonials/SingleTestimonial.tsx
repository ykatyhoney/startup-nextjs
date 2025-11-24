import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation, company } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="group rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 duration-300">
        <div className="mb-6 flex gap-1">
          {ratingIcons}
        </div>
        <p className="border-body-color/10 text-body-color mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/10 dark:text-body-color-dark">
          "{content}"
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full ring-2 ring-gray-200 dark:ring-gray-700">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="w-full">
            <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white">
              {name}
            </h3>
            <p className="text-body-color text-sm dark:text-body-color-dark">
              {designation}
              {company && ` at ${company}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
