import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";
import Snowfall from "react-snowfall";
import ScrollToTopButton from "./ScrollToTopButton";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { user, signOutUser } = useContext(AuthContext);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const generateNavItems = () => {
		const items = [
			{ to: "/", label: "Home" },
			{ to: "about-us-section", label: "About Us", isScrollLink: true },
			{ to: "contact-us", label: "Contact", isScrollLink: true },
			{ to: "faq-section", label: "FAQ", isScrollLink: true },
			{ to: "/reviews", label: "All Reviews" },
		];

		if (user) {
			items.push({
				label: "My Account",
				isMegaMenu: true,
				subItems: [
					{ to: "/add-review", label: "Add Review" },
					{ to: "/my-reviews", label: "My Reviews" },
					{ to: "/myWatchlist", label: "Game WatchList" },
				],
			});
		}

		return items.map((item) => (
			<li
				key={item.to || item.label}
				className="py-3 xl:py-6 text-base font-medium text-primaryButton relative"
			>
				{item.isScrollLink ? (
					<Link
						to={item.to}
						smooth={true}
						duration={500}
						className="cursor-pointer"
					>
						{item.label}
					</Link>
				) : item.isMegaMenu ? (
					<div className="group ">
						<span className="cursor-pointer">{item.label}</span>
						<ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-max p-3">
							{item.subItems.map((subItem) => (
								<li key={subItem.to} className="py-1">
									<NavLink
										to={subItem.to}
										className={({ isActive }) =>
											isActive ? "underline" : undefined
										}
									>
										{subItem.label}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				) : (
					<NavLink
						to={item.to}
						onClick={item.onClick}
						className={({ isActive }) =>
							isActive ? "underline" : undefined
						}
					>
						{item.label}
					</NavLink>
				)}
			</li>
		));
	};

	return (
		<>
			<Snowfall snowflakeCount={100} radius={[0.5, 0.7]} />
			<div
				className={`navbar sticky top-0 transition-all duration-300 z-50 ${
					isScrolled
						? "bg-secondaryAccent backdrop-blur-md bg-opacity-80"
						: "bg-transparent"
				}`}
			>
				<div className="navbar max-w-[1440px] mx-auto px-2">
					<div className="navbar-start">
						<NavLink className="text-xl py-2 pl-0" to="/">
							<span className="text-xl font-bold text-primaryText">
								Chill Gamer
							</span>
						</NavLink>
					</div>
					<div className="navbar-center hidden xl:flex">
						<ul className="menu-horizontal gap-8">
							{generateNavItems()}
						</ul>
					</div>
					<div className="navbar-end">
						{user ? (
							<>
								<div className="relative group">
									<img
										src={user.photoURL}
										alt={user.displayName}
										className="h-8 w-8 rounded-full mr-2"
									/>
									<div className="absolute right-0 mt-6 hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
										{user.displayName}
									</div>
								</div>
								<button
									className="hidden xl:block btn rounded-none bg-primaryButton text-white border-none"
									onClick={signOutUser}
								>
									Log Out
								</button>
							</>
						) : (
							<div className="hidden xl:flex space-x-4">
								<NavLink
									className="btn rounded-none bg-secondaryButton text-white border-none"
									to="/login"
								>
									Login
								</NavLink>
								<NavLink
									className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none"
									to="/register"
								>
									Register
								</NavLink>
							</div>
						)}
						<button
							className="xl:hidden text-2xl px-1 py-1 ml-2 rounded-md transition-all"
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
						>
							{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
						</button>
					</div>
				</div>
				{isMobileMenuOpen && (
					<div className="absolute top-20 right-4 w-3/4 bg-white shadow-lg transform transition-transform duration-300 xl:hidden flex flex-col items-center z-50 px-4 py-4 rounded-md">
						<ul className="flex flex-col items-center">
							{generateNavItems()}
							{user ? (
								<>
									<p className="mr-4">{user.displayName}</p>
									<img
										src={user.photoURL}
										alt={user.displayName}
										className="h-8 w-8 rounded-full mr-2"
									/>
									<p className="">{user?.email}</p>
									<button
										className="btn rounded-none bg-primaryButton text-white border-none xl:hidden"
										onClick={signOutUser}
									>
										Log Out
									</button>
								</>
							) : (
								<div className="flex flex-col space-y-4">
									<NavLink
										className="btn rounded-none text-black border-none"
										style={{ backgroundColor: "#778DA9" }}
										to="/login"
									>
										Login
									</NavLink>
									<NavLink
										className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none"
										to="/register"
									>
										Register
									</NavLink>
								</div>
							)}
						</ul>
					</div>
				)}
			</div>
			<ScrollToTopButton />
		</>
	);
};

export default Navbar;
