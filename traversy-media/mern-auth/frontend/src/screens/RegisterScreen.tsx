import { Link } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormContainer from "@/components/FormContainer.tsx";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
	.object({
		name: z
			.string()
			.min(3, {
				message: "Name must be at least 3 characters long",
			})
			.max(16, {
				message: "Name must be at most 16 characters long",
			}),
		email: z.string().email(),
		password: z
			.string()
			.min(8, {
				message: "Password must be at least 8 characters long",
			})
			.max(16, {
				message: "Password must be at most 16 characters long",
			}),
		confirmPassword: z
			.string()
			.min(8, {
				message: "Confirm password must be at least 8 characters long",
			})
			.max(16, {
				message: "Confirm password must be at most 16 characters long",
			}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

const RegisterScreen = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// TODO: Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<FormContainer>
			<h1 className="font-semibold mb-4 text-2xl">Sign Up</h1>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="JohnDoe" {...field} />
								</FormControl>
								{/* <FormDescription>Please enter your name.</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="johndoe@email.com" {...field} />
								</FormControl>
								{/* <FormDescription>
									Please enter your email address.
								</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder="Enter your new password" {...field} />
								</FormControl>
								{/* <FormDescription>Please enter your password.</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<Input placeholder="Confirm password" {...field} />
								</FormControl>
								{/* <FormDescription>Please enter your password.</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-end">
						<Button type="submit">Sign Up</Button>
					</div>
				</form>
			</Form>

			<div className="mt-4">
				<span className="text-sm text-gray-600">Already have an account?</span>
				<Link
					to="/login"
					className="ml-1 text-sm text-blue-600 underline hover:text-blue-500"
				>
					Login
				</Link>
			</div>
		</FormContainer>
	);
};

export default RegisterScreen;
