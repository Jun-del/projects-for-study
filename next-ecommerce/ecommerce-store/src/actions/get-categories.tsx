import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[] | undefined> => {
  try {
    const res = await fetch(URL);
    const categories: Category[] = await res.json();

    return categories;
  } catch (error) {
    console.error(error);
  }
};

export default getCategories;
