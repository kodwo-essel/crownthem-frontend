export const ENDPOINTS = {
  EVENTS: {
    LIST: 'events.list',
    BY_ID: 'events.byId',
    SEARCH: 'events.search',
  },
  CATEGORIES: {
    BY_EVENT: 'categories.byEvent',
    BY_ID: 'categories.byId',
  },
  VOTE: {
    SUBMIT: 'vote.submit',
  },
} as const;

export type EndpointName = typeof ENDPOINTS[keyof typeof ENDPOINTS][keyof typeof ENDPOINTS[keyof typeof ENDPOINTS]];