import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
							<Link to="/login">
								<Button>
									<UserPlus className="mr-2 h-4 w-4" /> Sign In
								</Button>
							</Link>

							<Link to="/register">
								<Button variant="secondary">
									<LogIn className="mr-2 h-4 w-4" /> Sign Up
								</Button>
							</Link>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default Hero;
