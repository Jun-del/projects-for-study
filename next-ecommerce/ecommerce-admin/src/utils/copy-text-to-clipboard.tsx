import { toast } from "sonner";

export const copyTextToClipboard = async (
  text: string,
  toastMessage?: string
): Promise<void> => {
  if (!navigator?.clipboard?.writeText) {
    toast.error(`Failed to copy: Clipboard not supported.`);
    return;
  }

  try {
    await navigator.clipboard.writeText(text);

    if (toastMessage) {
      toast.success(toastMessage);
    }
  } catch (error) {
    toast.error(`Failed to copy text "${text}": ${error}.`);
  }
};
