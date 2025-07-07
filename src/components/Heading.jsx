import { Link } from "react-router";

const Heading = () => {
  return (
    <Link to={`/`} className="flex shrink-0 items-center gap-1">
      <img className="w-7" src="/favicon.jpg" alt={`Servora (Image not found)`} />
      <p className="font-hanuman font-semibold text-2xl text-text ml-1 mt-2">Servora</p> {/* Removed place-items-end */}
    </Link>
  );
};

export default Heading;