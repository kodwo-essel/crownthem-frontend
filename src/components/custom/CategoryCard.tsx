import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  onClick?: (category: Category) => void;
}

export default function CategoryCard({
  category,
  onClick,
}: Readonly<CategoryCardProps>) {
  const { name, nomineeCount = 0 } = category;

  return (
    <div
      onClick={() => onClick?.(category)}
      className="max-h-40 bg-white border border-gray-200 rounded-sm py-4 px-6 hover:shadow-lg hover:border-accent transition-all duration-300 cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
          {name}
        </h3>
        <i className="ri-arrow-right-line text-gray-400 group-hover:text-accent transition-colors"></i>
      </div>

      {/* Nominee count */}
      <div className="flex items-center gap-2 text-gray-600">
        <i className="ri-user-line"></i>
        <span>
          {nomineeCount} nominee{nomineeCount !== 1 && "s"}
        </span>
      </div>

      {/* Footer */}
      <div className="mt-2 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-accent font-medium">
          <span>View nominees</span>
          <i className="ri-arrow-right-line"></i>
        </div>
      </div>
    </div>
  );
}
