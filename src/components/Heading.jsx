import { Link } from "react-router";

const Heading = () => {
  return (
    <Link to={`/`} className="flex shrink-0 items-center gap-1">
      <img className="w-6 sm:w-7 lg:w-8 xl:w-9" src="/favicon.jpg" alt={`Servora (Image not found)`} />
      <p className="font-hanuman font-semibold text-2xl sm:text-[26px] md:text-[28px] nav:text-3xl text-text ml-1 leading-0 mt-[0.4rem]">Servora</p>
    </Link>
  );
};

export default Heading;