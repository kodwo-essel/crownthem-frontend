import partner1 from "@/assets/partners/PUC-Logo.png";
import partner2 from "@/assets/partners/atu.png";
import partner3 from "@/assets/partners/central.png";
import partner4 from "@/assets/partners/ghana-telecom.png";
import partner5 from "@/assets/partners/stu-logo.png";
import partner6 from "@/assets/partners/uew.png";
import partner7 from "@/assets/partners/umat.png";
import partner8 from "@/assets/partners/unimac.png";

export default function Partners() {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8]; // add as many as needed

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-primary mb-6">Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to bring you the best event experiences
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-12 animate-marquee"
            style={{
              animationDirection: "reverse", // moves to the right
            }}
          >
            {partners.concat(partners).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-24 w-24 object-cover rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
