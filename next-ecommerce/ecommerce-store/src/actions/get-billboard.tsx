import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | undefined> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    const billboard: Billboard = await res.json();

    return billboard;
  } catch (error) {
    console.error(error);
  }
};

export default getBillboard;
