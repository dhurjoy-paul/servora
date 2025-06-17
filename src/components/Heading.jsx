const Heading = () => {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <img className="w-7" src="favicon.jpg" alt={`Servora (Image not found)`} />
      <p className="font-hanuman font-semibold text-2xl text-text ml-1 mt-2">Servora</p> {/* Removed place-items-end */}
    </div>
  );
};

export default Heading;