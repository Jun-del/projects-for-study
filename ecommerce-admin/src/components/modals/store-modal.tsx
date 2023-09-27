"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useForm } from "react-hook-form";

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // TODO: Create store
    console.log(values);
  };

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
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
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </Form>
        {/* TODO: button here */}
      </div>
    </Modal>
  );
};

export default StoreModal;
