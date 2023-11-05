import { Category } from "@/types";
import { toast } from "sonner";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[] | undefined> => {
  try {
    const res = await fetch(URL);
    const categories: Category[] = await res.json();

    return categories;
  } catch (error) {
    toast.error("Something unexpected occurs.");
    console.error(error);
  }
};

export default getCategories;
