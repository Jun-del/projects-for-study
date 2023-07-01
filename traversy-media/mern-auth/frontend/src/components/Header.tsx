import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-primary text-white">
			<nav className="flex h-16 items-center space-x-4 lg:space-x-6 px-4 border-b justify-between">
				<Link
					to="/"
					className="text-sm font-medium transition-colors hover:text-secondary"
				>
					MERN Auth
				</Link>
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
			</nav>
		</header>
	);
};

export default Header;
