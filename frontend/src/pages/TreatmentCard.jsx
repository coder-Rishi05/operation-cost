import { useState } from "react";
import { Link } from "react-router-dom";

const TreatmentCard = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/treatment/${item.id}`}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
    >
      <div className="relative h-56 w-full">
        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-blue-600 mt-3 font-semibold">Learn More →</p>
      </div>
    </Link>
  );
};

export default TreatmentCard;
