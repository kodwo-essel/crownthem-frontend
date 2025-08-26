import type { EventItem } from "@/types";
import type { ApiResponse, Page } from "@/types/api";
import { API_ENDPOINTS } from "@/constants";


export async function fetchEvents(page = 0, size = 10): Promise<Page<EventItem>> {
  const res = await fetch(`${API_ENDPOINTS.EVENTS.BASE}?page=${page}&size=${size}`);
  if (!res.ok) throw new Error("Failed to fetch events");

  const json: ApiResponse<Page<EventItem>> = await res.json();
  return json.data;
}

export async function fetchEventById(id: number): Promise<EventItem> {
  const res = await fetch(`${API_ENDPOINTS.EVENTS.BASE}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch event");

  const json: ApiResponse<EventItem> = await res.json();
  return json.data;
}


export async function searchEvents(
  name: string,
  status: string | undefined,
  page: number,
  size: number
) {
  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (status) params.append("status", status);
  params.append("page", String(page));
  params.append("size", String(size));

  const res = await fetch(`${API_ENDPOINTS.EVENTS.SEARCH}?${params}`);
  if (!res.ok) throw new Error("Failed to search events");
  const json = await res.json();
  return json.data as Page<EventItem>;
}