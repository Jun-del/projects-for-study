import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | undefined> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    const product: Product = await res.json();

    return product;
  } catch (error) {
    console.error(error);
  }
};

export default getProduct;
