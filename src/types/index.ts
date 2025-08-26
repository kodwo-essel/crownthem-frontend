export interface Nominee {
  id: number;
  name: string;
  code: string;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  eventId: number;
  eventName: string;
  totalVotes: number;
}


export interface Category {
  id: number;
  name: string;
  eventId: number;
  eventName: string;
  nomineeCount?: number;
}

export interface CategoryWithNominees {
  id: number;
  name: string;
  eventId: number;
  eventName: string;
  nominees: Nominee[];
}



export interface Organizer {
  id: number;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
}

export interface EventItem {
  id: number;
  name: string;
  description: string;
  status: string;
  imageUrl: string;
  nominationStart: string;
  nominationEnd: string;
  votingStart: string;
  votingEnd: string;
  archived: boolean;
  voteCost: number;
  organizers: Organizer[];
  categories: Category[];
}

