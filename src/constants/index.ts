import { API_URL } from "@/config";

export const API_ENDPOINTS = {
  EVENTS: {
    BASE: `${API_URL}/api/events`,
    LIST: `${API_URL}/api/events`,
    SEARCH: `${API_URL}/api/events/search`,
    BY_ID: (id: number | string) => `${API_URL}/api/events/${id}`,
    CREATE: `${API_URL}/api/events`,
    UPDATE: (id: number | string) => `${API_URL}/api/events/${id}`,
    DELETE: (id: number | string) => `${API_URL}/api/events/${id}`,
  },

  CATEGORIES: {
    BASE: `${API_URL}/api/categories`,
    BY_EVENT: (eventId: number | string) => `${API_URL}/api/categories/by-event/${eventId}`,
    BY_ID: (id: number | string) => `${API_URL}/api/categories/${id}`,
  },

  USERS: {
    BASE: `${API_URL}/api/users`,
    LIST: `${API_URL}/api/users`,
    BY_ID: (id: number | string) => `${API_URL}/api/users/${id}`,
  },

  AUTH: {
    LOGIN: `${API_URL}/api/auth/login`,
    REGISTER: `${API_URL}/api/auth/register`,
    LOGOUT: `${API_URL}/api/auth/logout`,
  },
};
