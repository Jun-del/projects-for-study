import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useLoginMutation } from "@/slices/usersApiSlice";
import { setCredentials } from "@/slices/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import FormContainer from "@/components/FormContainer.tsx";
import { Button } from "@/components/ui/button";
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
import Loader from "@/components/Loader";

const formSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8, {
			message: "Password must be at least 8 characters long",
		})
		.max(16, {
			message: "Password must be at most 16 characters long",
		}),
});

const LoginScreen = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [login, { isLoading }] = useLoginMutation();

	// const { userInfo } = useSelector(
	// 	(state: {
	// 		auth: {
	// 			userInfo: {
	// 				email: string;
	// 				password: string;
	// 			};
	// 		};
	// 	}) => state.auth
	// );

	const { userInfo } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			navigate("/");
		}
	}, [navigate, userInfo]);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const validatedForm = formSchema.parse(values);
		const { email, password } = validatedForm;

		try {
			// unwrap() is a utility function that returns the payload of a successful response
			const res = await login({ email, password }).unwrap();

			dispatch(setCredentials({ ...res }));
			navigate("/");
			console.log("fulfilled", res);
		} catch (err) {
			console.log(typeof err);
			console.log("rejected", err);
			toast.error(
				(err as { data: { message: string } }).data.message ||
					(err as { error: string })?.error
			);
		}
	};

	return (
		<FormContainer>
			<h1 className="font-semibold mb-6 text-2xl">Sign in</h1>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="johndoe@email.com" {...field} />
								</FormControl>
								<FormDescription>
									Please enter your email address.
								</FormDescription>
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
									<Input placeholder="Enter a password" {...field} />
								</FormControl>
								<FormDescription>Please enter your password.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{isLoading && <Loader />}

					<div className="flex justify-end">
						<Button type="submit">Sign in</Button>
					</div>
				</form>
			</Form>

			<div className="mt-1">
				<span className="text-sm text-gray-600">Don't have an account?</span>
				<Link
					to="/register"
					className="ml-1 text-sm text-blue-600 underline hover:text-blue-500"
				>
					Register
				</Link>
			</div>
		</FormContainer>
	);
};

export default LoginScreen;
