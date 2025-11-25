import type { VoteRequest, VoteResponse } from "@/types";

export async function submitVote(_vote: VoteRequest): Promise<VoteResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate unique reference
  const reference = `VT-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
  
  return {
    success: true,
    reference,
    paymentUrl: `https://payment.crownthem.com/pay/${reference}`,
    message: "Your vote has been recorded. Please complete payment to finalize."
  };
}