import { useState } from "react";

export default function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="text-lg font-semibold text-primary">
          How secure is the voting system?
        </span>
        <i
          className={`${
            isOpen ? "ri-subtract-line" : "ri-add-line"
          } text-xl text-accent w-5 h-5 flex items-center justify-center`}
        ></i>
      </button>

      {/* Content section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-gray-600 leading-relaxed">
            Our voting system uses enterprise-grade encryption, blockchain
            verification, and multi-layer security protocols to ensure complete
            transparency and prevent fraud. Each vote is cryptographically
            secured and auditable.
          </p>
        </div>
      </div>
    </div>
  );
}
