import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { LogIn, UserPlus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const Hero = () => {
	return (
		<div className="py-5">
			<div className="flex justify-center">
				<Card className="p-5 flex flex-col items-center bg-slate-200">
					<CardHeader>
						<CardTitle>MERN Authentication</CardTitle>
					</CardHeader>

					<CardContent>
						<CardDescription>
							This is a boilerplate project for MERN stack authentication that
							stores a JWT in an HTTP-only cookie. It also uses Redux Toolkit
							and the React shadecn/ui library
						</CardDescription>
					</CardContent>

					<CardFooter>
						<div className="flex space-x-4">
							<a
								className={buttonVariants({ variant: "default" })}
								href="/login"
							>
								<UserPlus className="mr-2 h-4 w-4" /> Sign In
							</a>

							<a
								className={buttonVariants({ variant: "secondary" })}
								href="/register"
							>
								<LogIn className="mr-2 h-4 w-4" /> Sign Up
							</a>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default Hero;
