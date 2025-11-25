import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NomineeCard from "@/components/custom/NomineeCard";
import CategorySkeleton from "@/components/skeleton/CategorySkeleton"; // optional skeleton component
import { fetchCategoryById } from "@/services/categoryService";
import type { CategoryWithNominees, Nominee } from "@/types";

export default function Category() {
  const { categoryId, eventId } = useParams<{ categoryId: string; eventId: string }>();
  const numericCategoryId = categoryId ? Number(categoryId) : null;

  const [category, setCategory] = useState<CategoryWithNominees | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!numericCategoryId) return;

      setLoading(true);
      try {
        const data = await fetchCategoryById(numericCategoryId);
        setCategory(data);
      } catch (err) {
        console.error("Error loading category:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [numericCategoryId]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 pb-16">
            <CategorySkeleton />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="max-w-6xl mx-auto p-6 pb-16">
        <div className="text-center py-16">
          <div className="mb-6">
            <i className="ri-folder-open-line text-6xl text-gray-300"></i>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Category Not Found</h2>
          <p className="text-gray-500 mb-6">The category you're looking for doesn't exist.</p>
          <a href="/voting-events" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Events
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 pb-16">
      {/* Breadcrumb */}
      <div className="flex flex-wrap overflow-x-auto items-center gap-2 text-sm text-gray-600 mb-8">
        <a className="hover:text-accent transition-colors" href="/voting-events">
          Voting
        </a>
        <i className="ri-arrow-right-s-line"></i>
        <a
          className="hover:text-accent transition-colors"
          href={`/voting-events/${eventId}`}
        >
          {category.eventName}
        </a>
        <i className="ri-arrow-right-s-line"></i>
        <span className="text-primary font-medium">{category.name}</span>
      </div>

      {/* Header */}
      <div className="mb-8 text-left">
        <h1 className="text-4xl font-bold text-primary mb-4">{category.name}</h1>
        <p className="text-lg text-gray-600">
          Vote for your favorite nominee in this category
        </p>
      </div>

      {/* Nominees */}
      {category.nominees && category.nominees.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.nominees.map((nominee: Nominee) => (
            <a
              key={nominee.id}
              href={`/voting-events/${eventId}/${category.id}/${nominee.id}`}
            >
              <NomineeCard nominee={nominee} />
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="mb-6">
            <i className="ri-user-search-line text-6xl text-gray-300"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Nominees Available</h3>
          <p className="text-gray-500 mb-6">Nominees for this category haven't been added yet. Check back later!</p>
          <a href={`/voting-events/${eventId}`} className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Event
          </a>
        </div>
      )}
    </div>
  );
}
