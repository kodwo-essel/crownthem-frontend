import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VotingForm from "@/components/custom/VotingForm";
import { fetchCategoryById } from "@/services/categoryService";
import type { CategoryWithNominees, Nominee } from "@/types";
import NomineeVotingSkeleton from "@/components/skeleton/NomineeVotingSkeleton";

export default function NomineeVoting() {
  const { categoryId, eventId, nomineeId } = useParams<{
    categoryId: string;
    eventId: string;
    nomineeId: string;
  }>();

  const numericCategoryId = categoryId ? Number(categoryId) : null;
  const numericNomineeId = nomineeId ? Number(nomineeId) : null;

  const [nominee, setNominee] = useState<Nominee | null>(null);
  const [category, setCategory] = useState<CategoryWithNominees | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!numericCategoryId || !numericNomineeId) return;
      setLoading(true);

      try {
        const catData = await fetchCategoryById(numericCategoryId);
        setCategory(catData);

        const selected = catData.nominees.find(n => n.id === numericNomineeId) ?? null;
        setNominee(selected);
      } catch (err) {
        console.error("Error loading nominee:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [numericCategoryId, numericNomineeId]);

  if (loading) return <NomineeVotingSkeleton/>;
  if (!category || !nominee) return <p className="text-center py-8">Nominee not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 pb-16">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 overflow-x-auto mb-6">
        <a className="hover:text-accent transition-colors whitespace-nowrap" href="/voting-events">
          Voting
        </a>
        <i className="ri-arrow-right-s-line"></i>
        <a
          className="hover:text-accent transition-colors whitespace-nowrap"
          href={`/voting-events/${eventId}`}
        >
          {category.eventName}
        </a>
        <i className="ri-arrow-right-s-line"></i>
        <a
          className="hover:text-accent transition-colors whitespace-nowrap"
          href={`/voting-events/${eventId}/${category.id}`}
        >
          {category.name}
        </a>
        <i className="ri-arrow-right-s-line"></i>
        <span className="text-primary font-medium whitespace-nowrap">{nominee.name}</span>
      </div>

      <VotingForm nominee={nominee} voteCost={category.voteCost} />
    </div>
  );
}
