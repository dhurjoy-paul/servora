import FilledBtn from "./FilledBtn";
import fallbackImage from '/NO_IMAGE.png';

const PopularCard = ({ service }) => {
  const { _id, image, name, description, price, providerName, providerImage } = service;

  const shortDescription = description
    ? description.split(" ").slice(0, 100).join(" ") +
    (description.split(" ").length > 100 ? "..." : "")
    : "No description available.";

  return (
    <div className="bg-transparent rounded-xl overflow-hidden transition-all duration-300 flex flex-col">

      <div className="w-full h-48 bg-gray-100 overflow-hidden rounded-xl">
        <img
          src={image || fallbackImage}
          alt={name}
          className="w-full h-full object-cover text-text bg-menu rounded"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
      </div>

      <div className="py-4 px-1 flex flex-col flex-grow">

        <h3
          className="font-medium text-text text-lg leading-snug line-clamp-2"
          title={name}
        >
          {name}
        </h3>

        <div className="mt-2 mb-4 flex-grow">
          <p className="text-text/95 dark:text-text-muted text-base line-clamp-2 min-h-[3.2rem]">
            {shortDescription}
          </p>
        </div>

        <FilledBtn to={`/services/${_id}`} label={'See Details'} />

      </div>
    </div>
  );
};

export default PopularCard;
