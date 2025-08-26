// services/categoryService.ts
import { API_ENDPOINTS } from "@/constants";
import type { Category, CategoryWithNominees } from "@/types";
import type {ApiResponse} from "@/types/api"

export async function fetchCategoriesByEvent(eventId: number | string): Promise<Category[]> {
  const res = await fetch(API_ENDPOINTS.CATEGORIES.BY_EVENT(eventId));
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const json: ApiResponse<Category[]> = await res.json();
  return json.data;
}


export async function fetchCategoryById(categoryId: number): Promise<CategoryWithNominees> {
  const res = await fetch(`${API_ENDPOINTS.CATEGORIES.BASE}/${categoryId}`);
  if (!res.ok) throw new Error("Failed to fetch category");
  const json: ApiResponse<CategoryWithNominees> = await res.json();
  return json.data;
}