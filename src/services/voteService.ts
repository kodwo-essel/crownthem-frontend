import type { ApiResponse } from "@/types/api";
import { API_ENDPOINTS } from "@/constants";
import type { VoteRequest, VoteResponse } from "@/types";


export async function submitVote(vote: VoteRequest): Promise<VoteResponse> {
  const res = await fetch(API_ENDPOINTS.VOTE.BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vote),
  });

  if (!res.ok) {
    throw new Error("Failed to submit vote");
  }

  const json: ApiResponse<VoteResponse> = await res.json();

  if (!json.success) {
    throw new Error(json.error || "Vote failed");
  }

  return json.data;
}