import { ENDPOINTS } from '@/constants/endpoints';
import type { EndpointName } from '@/constants/endpoints';

// Data service for managing dummy data access
export class DataService {
  private static instance: DataService;
  
  static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }
    return DataService.instance;
  }

  async get(endpoint: EndpointName, params?: Record<string, any>): Promise<any> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    switch (endpoint) {
      case ENDPOINTS.EVENTS.LIST:
        return this.getEvents(params);
      case ENDPOINTS.EVENTS.BY_ID:
        return this.getEventById(params?.id);
      case ENDPOINTS.EVENTS.SEARCH:
        return this.searchEvents(params);
      case ENDPOINTS.CATEGORIES.BY_EVENT:
        return this.getCategoriesByEvent(params?.eventId);
      case ENDPOINTS.CATEGORIES.BY_ID:
        return this.getCategoryById(params?.id);
      case ENDPOINTS.VOTE.SUBMIT:
        return this.submitVote(params);
      default:
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
  }

  private async getEvents(params?: any) {
    const { default: data } = await import('@/data/events.json');
    return data;
  }

  private async getEventById(id: number) {
    const { default: data } = await import('@/data/events.json');
    const event = data.data.content.find((e: any) => e.id === id);
    return event ? { ...data, data: event } : null;
  }

  private async searchEvents(params: any) {
    const { default: data } = await import('@/data/events.json');
    return data; // Simplified for now
  }

  private async getCategoriesByEvent(eventId: number | string) {
    const { default: data } = await import('@/data/categories.json');
    return data[eventId as keyof typeof data] || null;
  }

  private async getCategoryById(id: number) {
    const { default: data } = await import('@/data/categoryDetails.json');
    return data[id as keyof typeof data] || null;
  }

  private async submitVote(voteData: any) {
    const { default: data } = await import('@/data/voteResponse.json');
    return data;
  }
}

export const dataService = DataService.getInstance();