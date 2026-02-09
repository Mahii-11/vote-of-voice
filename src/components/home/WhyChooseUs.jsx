import {FaCheckCircle,} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
        <section className="bg-green-50 mt-14 py-10">
        <h3 className="text-center font-semibold mb-6">
          • Why Choose Us •
        </h3>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Anonymous Voting",
            "Real-Time Results",
            "No Political Bias",
            "Mobile Friendly",
          ].map((t, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <FaCheckCircle className="mx-auto text-green-600 text-2xl mb-2" />
              <p className="text-sm">{t}</p>
            </div>
          ))}
        </div>
      </section>
  )
}
