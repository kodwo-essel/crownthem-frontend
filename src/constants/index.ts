export { ENDPOINTS } from './endpoints';

// Legacy API endpoints (kept for reference but not used)
export const API_ENDPOINTS = {
  EVENTS: {
    BASE: '/api/events',
    LIST: '/api/events',
    SEARCH: '/api/events/search',
    BY_ID: (id: number | string) => `/api/events/${id}`,
  },
  CATEGORIES: {
    BASE: '/api/categories',
    BY_EVENT: (eventId: number | string) => `/api/categories/by-event/${eventId}`,
    BY_ID: (id: number | string) => `/api/categories/${id}`,
  },
  VOTE: {
    BASE: '/api/votes'
  },
};
