import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[] | undefined> => {
  try {
    const res = await fetch(URL);
    const colors: Color[] = await res.json();

    return colors;
  } catch (error) {
    console.error(error);
  }
};

export default getColors;
