import { create } from "zustand";

// First store means shop
type useStoreModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useStoreModal;
