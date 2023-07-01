const Header = () => {
	return (
		<header className="bg-primary text-white">
			<nav className="flex h-16 items-center space-x-4 lg:space-x-6 px-4 border-b justify-between">
				<a
					href="/"
					className="text-sm font-medium transition-colors hover:text-secondary"
				>
					MERN Auth
				</a>
				<ul className="flex space-x-4 lg:space-x-6 px-4">
					<li>
						<a
							href="/login"
							className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
						>
							Sign In
						</a>
					</li>

					<li>
						<a
							href="/register"
							className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
						>
							Sign Up
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
