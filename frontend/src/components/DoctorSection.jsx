import { Link } from "react-router-dom";
import { Star, GraduationCap, CalendarCheck } from "lucide-react";
import { usePopup } from "../context/PopupContext";
import { doctors } from "../data/doctors";

const DoctorSection = () => {
  const { openPopup } = usePopup();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
            OUR SPECIALISTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Meet Our Specialists
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base max-w-lg mx-auto">
            Experienced, board-certified doctors committed to your recovery and
            long-term mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  className="w-full cursor-pointer  h-56 sm:h-72 md:h-80  object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />

                {/* Availability badge */}
                <span
                  className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
                    doctor.available
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      doctor.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                  {doctor.available ? "Available Today" : "Fully Booked"}
                </span>

                {/* Rating badge */}
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 text-gray-800 shadow-sm">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  {doctor.rating}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 mt-1.5 text-sm sm:text-base font-medium">
                  {doctor.speciality}
                </p>

                <div className="flex items-start gap-1.5 mt-2 text-gray-500 text-xs sm:text-sm">
                  <GraduationCap size={15} className="mt-0.5 shrink-0" />
                  <span>{doctor.qualification}</span>
                </div>

                <div className="flex items-center justify-between mt-2 text-gray-500 text-xs sm:text-sm">
                  <span>{doctor.experience}</span>
                  <span className="text-gray-400">
                    {doctor.reviews} reviews
                  </span>
                </div>

                <div className="flex gap-2 mt-5 sm:mt-6">
                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="flex-1 text-center border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => openPopup()}
                    className="flex-1 cursor-pointer  bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors flex items-center justify-center gap-1.5"
                  >
                    <CalendarCheck size={16} />
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/doctors"
            className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors"
          >
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
