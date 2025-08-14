import partner1 from "@/assets/partners/PUC-Logo.png";
import partner2 from "@/assets/partners/atu.png";
import partner3 from "@/assets/partners/central.png";
import partner4 from "@/assets/partners/ghana-telecom.png";
import partner5 from "@/assets/partners/stu-logo.png";
import partner6 from "@/assets/partners/uew.png";
import partner7 from "@/assets/partners/umat.png";
import partner8 from "@/assets/partners/unimac.png";

export default function Partners() {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-primary mb-6">Trusted Partners</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We collaborate with industry leaders to bring you the best event experiences
          </p>
        </div>

        {/* marquee wrapper */}
        <div className="overflow-hidden relative w-full">
          <div className="flex gap-12 animate-marquee w-max">
            {partners.concat(partners).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-24 w-24 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
