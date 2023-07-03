// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { useLogoutMutation } from "@/slices/usersApiSlice";
import { logout } from "@/slices/authSlice";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
	const { userInfo } = useAppSelector((state) => state.auth);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		// TODO: Empty brackets?
		try {
			await logoutApiCall({}).unwrap();
			dispatch(logout({}));
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	// const [open, setOpen] = useState(false);

	return (
		<header className="bg-primary text-white">
			<nav className="flex h-16 items-center space-x-4 lg:space-x-6 px-4 border-b justify-between">
				<Link
					to="/"
					className="text-sm font-medium transition-colors hover:text-secondary"
				>
					MERN Auth
				</Link>
				{userInfo ? (
					<>
						<DropdownMenu>
							<DropdownMenuTrigger>{userInfo.name}</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem onClick={() => navigate("/profile")}>
									Profile
								</DropdownMenuItem>
								<DropdownMenuItem onClick={logoutHandler}>
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</>
				) : (
					<>
						<ul className="flex space-x-4 lg:space-x-6 px-4">
							<Link
								to="/login"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
							>
								Sign In
							</Link>

							<Link
								to="/register"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
							>
								Sign Up
							</Link>
						</ul>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
