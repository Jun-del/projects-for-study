"use client";

import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStoreModal } from "@/hooks/useStoreModal";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import Modal from "@/components/modal";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1),
});

const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const response = await axios.post("/api/stores", values);

      // TODO: use either one
      // router.push(`/${response.data.id}`);

      window.location.assign(`/${response.data.id}`);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }

    // TODO: Create store
    console.log(values);
  };

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories."
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* wrapper */}
      <div>
        <div className="space-y-4 py-2 pb-4"></div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name (Required)</FormLabel>
                  <FormControl>
                    <Input
                      // TODO: no placeholder
                      // placeholder="JohnDoe"
                      {...field}
                      disabled={loading}
                      autoComplete="name"
                      required
                    />
                  </FormControl>
                  {/* <FormDescription>This is your store name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-6 space-x-2 flex justify-end items-center w-full">
              <Button
                type="button"
                disabled={loading}
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
        {/* TODO: button here */}
      </div>
    </Modal>
  );
};

export default StoreModal;
