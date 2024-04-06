// import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toast } from "react-toastify";
import FormContainer from "@/components/FormContainer.tsx";
import { Button } from "@/components/ui/button";
import { setCredentials } from "@/slices/authSlice";
import { useUpdateUserMutation } from "@/slices/usersApiSlice";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loader from "@/components/Loader";

const formSchema = z
	.object({
		name: z
			.string()
			.min(3, {
				message: "Name must be at least 3 characters long",
			})
			.max(16, {
				message: "Name must be at most 16 characters long",
			})
			.optional(),
		email: z.string().email().optional(),
		password: z.preprocess(
			(password) => {
				if (password === "" || !password || typeof password !== "string")
					return undefined;
				return password === "" ? undefined : password;
			},
			z
				.string()
				.min(8, {
					message: "Password must be at least 8 characters long",
				})
				.max(16, {
					message: "Password must be at most 16 characters long",
				})
				.optional()
		),
		confirmPassword: z.preprocess(
			(confirmPassword) => {
				if (
					confirmPassword === "" ||
					!confirmPassword ||
					typeof confirmPassword !== "string"
				)
					return undefined;
				return confirmPassword === "" ? undefined : confirmPassword;
			},
			z
				.string()
				.min(8, {
					message: "Password must be at least 8 characters long",
				})
				.max(16, {
					message: "Password must be at most 16 characters long",
				})
				.optional()
		),
	})
	.refine((data) => !data.password || data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

type Schema = z.infer<typeof formSchema>;

const ProfileScreen = () => {
	const form = useForm<Schema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: `${useAppSelector((state) => state.auth.userInfo?.name)}` || "",
			email: `${useAppSelector((state) => state.auth.userInfo?.email)}` || "",
			password: "",
			confirmPassword: "",
		},
	});

	const dispatch = useAppDispatch();
	// const navigate = useNavigate();

	const { userInfo } = useAppSelector((state) => state.auth);

	const [updateProfile, { isLoading }] = useUpdateUserMutation();

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const validatedForm = formSchema.parse(values);
		const { name, email, password, confirmPassword } = validatedForm;

		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
		} else {
			try {
				const res = await updateProfile({
					_id: userInfo?._id,
					name: name || "",
					email: email || "",
					password: password || "",
				}).unwrap();

				dispatch(setCredentials({ ...res }));
				toast.success("Profile updated");
			} catch (err) {
				toast.error(
					(err as { data: { message: string } }).data.message ||
						(err as { error: string })?.error
				);
			}
		}
	};

	return (
		<FormContainer>
			<h1 className="font-semibold mb-4 text-2xl">Update Profile</h1>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder={userInfo?.name} {...field} />
								</FormControl>
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
									<Input placeholder={userInfo?.email} {...field} />
								</FormControl>
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
									<Input
										type="password"
										placeholder="Enter your new password"
										{...field}
									/>
								</FormControl>
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
									<Input
										type="password"
										placeholder="Confirm password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{isLoading && <Loader />}

					<div className="flex justify-end">
						<Button type="submit">Update</Button>
					</div>
				</form>
			</Form>
		</FormContainer>
	);
};

export default ProfileScreen;
