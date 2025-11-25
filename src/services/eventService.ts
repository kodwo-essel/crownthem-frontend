import type { EventItem } from "@/types";
import type { ApiResponse, Page } from "@/types/api";
import { ENDPOINTS } from "@/constants";
import eventsData from "@/data/events.json";

export async function fetchEvents(page = 0, size = 10): Promise<Page<EventItem>> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const allEvents = eventsData.data.content;
  const start = page * size;
  const end = start + size;
  const paginatedEvents = allEvents.slice(start, end);
  
  return {
    content: paginatedEvents,
    totalElements: allEvents.length,
    totalPages: Math.ceil(allEvents.length / size),
    numberOfElements: paginatedEvents.length,
    size,
    number: page,
    first: page === 0,
    last: end >= allEvents.length,
    empty: paginatedEvents.length === 0
  };
}

export async function fetchEventById(id: number): Promise<EventItem> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const event = eventsData.data.content.find(e => e.id === id);
  if (!event) {
    throw new Error("Failed to fetch event");
  }
  return event;
}

export async function searchEvents(
  name: string,
  status: string | undefined,
  page: number,
  size: number
) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let filteredEvents = eventsData.data.content;
  
  if (name) {
    filteredEvents = filteredEvents.filter(event => 
      event.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  
  if (status) {
    filteredEvents = filteredEvents.filter(event => event.status === status);
  }
  
  const start = page * size;
  const end = start + size;
  const paginatedEvents = filteredEvents.slice(start, end);
  
  return {
    content: paginatedEvents,
    totalElements: filteredEvents.length,
    totalPages: Math.ceil(filteredEvents.length / size),
    numberOfElements: paginatedEvents.length,
    size,
    number: page,
    first: page === 0,
    last: end >= filteredEvents.length,
    empty: paginatedEvents.length === 0
  } as Page<EventItem>;
}