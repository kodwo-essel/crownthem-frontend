import EventBanner from "@/components/custom/EventBanner";
import CategoryCard from "@/components/custom/CategoryCard";

export default function Event() {
  const eventId = "123"; // example event id
  const categories = [
    { id: "1", name: "Best Innovation" },
    { id: "2", name: "Sustainability Leader" },
    { id: "3", name: "Global Impact" },
    { id: "4", name: "Community Hero" },
    { id: "5", name: "Outstanding Research" },
  ];

  return (
    <div>
      <div>
        <EventBanner />

        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a className="hover:text-accent transition-colors" href="/">Voting</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-primary font-medium">Global Sustainability Summit</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="mb-8 text-left">
            <h2 className="text-3xl font-bold text-primary mb-4">Vote by Category</h2>
            <p className="text-gray-600 text-lg">Select a category to view nominees and cast your vote</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <a
                className="group"
                key={category.id}
                href={`/voting-events/${eventId}/${category.id}`} // use eventId and categoryId in the URL
              >
                <CategoryCard />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
