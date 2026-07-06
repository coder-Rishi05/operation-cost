import TreatmentCard from "../pages/TreatmentCard";
import treatments from "../data/treatments";

const TreatmentsSection = () => {
  console.log("renders");
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Orthopedic Treatments</h2>

          <p className="text-gray-600 mt-4">
            Advanced orthopedic treatments with expert care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((item) => (
            <TreatmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
