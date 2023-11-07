import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[] | undefined> => {
  try {
    const res = await fetch(URL);
    const sizes: Size[] = await res.json();

    return sizes;
  } catch (error) {
    console.error(error);
  }
};

export default getSizes;
