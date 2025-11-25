import type { EventItem } from "@/types";
import type { Page } from "@/types/api";


const mockEvents = [
  {
    id: 1,
    name: "Ghana Music Awards 2024",
    description: "Annual celebration of Ghana's finest musical talents",
    status: "ACTIVE",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    nominationStart: "2024-01-01T00:00:00Z",
    nominationEnd: "2024-02-28T23:59:59Z",
    votingStart: "2024-03-01T00:00:00Z",
    votingEnd: "2024-04-30T23:59:59Z",
    archived: false,
    voteCost: 1.0,
    organizers: [],
    categories: [
      {
        id: 1,
        name: "Best Male Vocalist",
        eventId: 1,
        eventName: "Ghana Music Awards 2024",
        nomineeCount: 3,
        voteCost: 1.0
      },
      {
        id: 2,
        name: "Best Female Vocalist",
        eventId: 1,
        eventName: "Ghana Music Awards 2024",
        nomineeCount: 2,
        voteCost: 1.0
      }
    ]
  },
  {
    id: 2,
    name: "University Excellence Awards",
    description: "Recognizing outstanding academic achievements",
    status: "UPCOMING",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    nominationStart: "2024-05-01T00:00:00Z",
    nominationEnd: "2024-06-30T23:59:59Z",
    votingStart: "2024-07-01T00:00:00Z",
    votingEnd: "2024-08-31T23:59:59Z",
    archived: false,
    voteCost: 0.5,
    organizers: [],
    categories: [
      {
        id: 3,
        name: "Best Student Leader",
        eventId: 2,
        eventName: "University Excellence Awards",
        nomineeCount: 3,
        voteCost: 0.5
      }
    ]
  },
  {
    id: 3,
    name: "Tech Innovation Summit 2024",
    description: "Celebrating breakthrough technologies and innovations",
    status: "ACTIVE",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    nominationStart: "2024-02-01T00:00:00Z",
    nominationEnd: "2024-03-15T23:59:59Z",
    votingStart: "2024-03-16T00:00:00Z",
    votingEnd: "2024-05-15T23:59:59Z",
    archived: false,
    voteCost: 2.0,
    organizers: [],
    categories: [
      {
        id: 4,
        name: "Best Startup",
        eventId: 3,
        eventName: "Tech Innovation Summit 2024",
        nomineeCount: 4,
        voteCost: 2.0
      }
    ]
  },
  {
    id: 4,
    name: "Sports Excellence Awards",
    description: "Honoring outstanding athletic achievements",
    status: "UPCOMING",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
    nominationStart: "2024-06-01T00:00:00Z",
    nominationEnd: "2024-07-31T23:59:59Z",
    votingStart: "2024-08-01T00:00:00Z",
    votingEnd: "2024-09-30T23:59:59Z",
    archived: false,
    voteCost: 1.5,
    organizers: [],
    categories: [
      {
        id: 5,
        name: "Best Athlete",
        eventId: 4,
        eventName: "Sports Excellence Awards",
        nomineeCount: 5,
        voteCost: 1.5
      }
    ]
  },
  {
    id: 5,
    name: "Film & Media Awards 2024",
    description: "Celebrating excellence in film and media production",
    status: "ACTIVE",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800",
    nominationStart: "2024-01-15T00:00:00Z",
    nominationEnd: "2024-03-31T23:59:59Z",
    votingStart: "2024-04-01T00:00:00Z",
    votingEnd: "2024-06-15T23:59:59Z",
    archived: false,
    voteCost: 1.2,
    organizers: [],
    categories: [
      {
        id: 6,
        name: "Best Director",
        eventId: 5,
        eventName: "Film & Media Awards 2024",
        nomineeCount: 4,
        voteCost: 1.2
      }
    ]
  },
  {
    id: 6,
    name: "Business Leadership Awards",
    description: "Recognizing outstanding business leadership",
    status: "UPCOMING",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    nominationStart: "2024-07-01T00:00:00Z",
    nominationEnd: "2024-08-31T23:59:59Z",
    votingStart: "2024-09-01T00:00:00Z",
    votingEnd: "2024-10-31T23:59:59Z",
    archived: false,
    voteCost: 3.0,
    organizers: [],
    categories: [
      {
        id: 7,
        name: "CEO of the Year",
        eventId: 6,
        eventName: "Business Leadership Awards",
        nomineeCount: 3,
        voteCost: 3.0
      }
    ]
  },
  {
    id: 7,
    name: "Fashion & Style Awards",
    description: "Celebrating creativity in fashion and design",
    status: "ACTIVE",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
    nominationStart: "2024-02-15T00:00:00Z",
    nominationEnd: "2024-04-15T23:59:59Z",
    votingStart: "2024-04-16T00:00:00Z",
    votingEnd: "2024-06-30T23:59:59Z",
    archived: false,
    voteCost: 0.8,
    organizers: [],
    categories: [
      {
        id: 8,
        name: "Best Designer",
        eventId: 7,
        eventName: "Fashion & Style Awards",
        nomineeCount: 6,
        voteCost: 0.8
      }
    ]
  },
  {
    id: 8,
    name: "Community Service Awards",
    description: "Honoring dedication to community development",
    status: "UPCOMING",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
    nominationStart: "2024-08-01T00:00:00Z",
    nominationEnd: "2024-09-30T23:59:59Z",
    votingStart: "2024-10-01T00:00:00Z",
    votingEnd: "2024-11-30T23:59:59Z",
    archived: false,
    voteCost: 0.5,
    organizers: [],
    categories: [
      {
        id: 9,
        name: "Community Hero",
        eventId: 8,
        eventName: "Community Service Awards",
        nomineeCount: 4,
        voteCost: 0.5
      }
    ]
  },
  {
    id: 9,
    name: "Youth Excellence Awards",
    description: "Celebrating young achievers and their contributions",
    status: "ACTIVE",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
    nominationStart: "2024-03-01T00:00:00Z",
    nominationEnd: "2024-05-31T23:59:59Z",
    votingStart: "2024-06-01T00:00:00Z",
    votingEnd: "2024-07-31T23:59:59Z",
    archived: false,
    voteCost: 1.0,
    organizers: [],
    categories: [
      {
        id: 10,
        name: "Young Achiever",
        eventId: 9,
        eventName: "Youth Excellence Awards",
        nomineeCount: 5,
        voteCost: 1.0
      }
    ]
  },
  {
    id: 10,
    name: "Environmental Impact Awards",
    description: "Recognizing efforts in environmental conservation",
    status: "UPCOMING",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    nominationStart: "2024-09-01T00:00:00Z",
    nominationEnd: "2024-10-31T23:59:59Z",
    votingStart: "2024-11-01T00:00:00Z",
    votingEnd: "2024-12-31T23:59:59Z",
    archived: false,
    voteCost: 1.5,
    organizers: [],
    categories: [
      {
        id: 11,
        name: "Eco Champion",
        eventId: 10,
        eventName: "Environmental Impact Awards",
        nomineeCount: 3,
        voteCost: 1.5
      }
    ]
  }
];

export async function fetchEvents(page = 0, size = 10): Promise<Page<EventItem>> {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const start = page * size;
  const end = start + size;
  const paginatedEvents = mockEvents.slice(start, end);
  
  return {
    content: paginatedEvents,
    totalElements: mockEvents.length,
    totalPages: Math.ceil(mockEvents.length / size),
    numberOfElements: paginatedEvents.length,
    size,
    number: page,
    first: page === 0,
    last: end >= mockEvents.length,
    empty: paginatedEvents.length === 0
  };
}

export async function fetchEventById(id: number): Promise<EventItem> {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const event = mockEvents.find((e: EventItem) => e.id === id);
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
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let filteredEvents = mockEvents;
  
  if (name) {
    filteredEvents = filteredEvents.filter((event: EventItem) => 
      event.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  
  if (status) {
    filteredEvents = filteredEvents.filter((event: EventItem) => event.status === status);
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