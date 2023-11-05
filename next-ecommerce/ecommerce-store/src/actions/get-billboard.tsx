import { Billboard } from "@/types";
import { toast } from "sonner";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | undefined> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    const billboard: Billboard = await res.json();

    return billboard;
  } catch (error) {
    toast.error("Something unexpected occurs.");
    console.error(error);
  }
};

export default getBillboard;
