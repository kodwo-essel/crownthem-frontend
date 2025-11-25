import { ENDPOINTS } from "@/constants";
import type { Category, CategoryWithNominees } from "@/types";
import type { ApiResponse } from "@/types/api";
import categoriesData from "@/data/categories.json";
import categoryDetailsData from "@/data/categoryDetails.json";

export async function fetchCategoriesByEvent(eventId: number | string): Promise<Category[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const data = categoriesData[eventId as keyof typeof categoriesData];
  if (!data) {
    throw new Error("Failed to fetch categories");
  }
  return data.data;
}

export async function fetchCategoryById(categoryId: number): Promise<CategoryWithNominees> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const data = categoryDetailsData[categoryId as keyof typeof categoryDetailsData];
  if (!data) {
    throw new Error("Failed to fetch category");
  }
  return data.data;
}