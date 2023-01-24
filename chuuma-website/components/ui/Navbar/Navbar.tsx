import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logos from "../../../public/logos.jpg";
import close from "../../../public/close.svg";
import menu2 from "../../../public/menu2.svg";
import { navLinks } from "../../../constants";

type Props = {};

const Navbar = (props: Props) => {
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<Image
				src={logos}
				alt="logo"
				className="w-[80px] h-[52px] hidden md:flex"
			/>
			{/* <div className="flex flex-row justify-between items-center w-full"> */}
			<h1 className="flex-1 font-poppins font-bold ss:text-[50px] text-[30px] sm:text-[40px] ss:leading-[100.8px] leading-[50px]">
				<span className="text-gradient">Chuuma Fabricators Mityana</span>{" "}
			</h1>
			{/* </div> */}
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-semibold cursor-pointer text-[18px] ${
							active === nav.title ? "text-red-500" : "text-dimWhite"
						} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
						onClick={() => setActive(nav.title)}
					>
						<Link href={`${nav.id}`}>{nav.title}</Link>
					</li>
				))}
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<Image
					src={!toggle ? menu2 : close}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex justify-end items-start flex-1 flex-col">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-medium cursor-pointer text-[30px] ${
									active === nav.title ? "text-gray-900" : "text-dimWhite"
								} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
								onClick={() => setActive(nav.title)}
							>
								<Link href={`#${nav.id}`}>{nav.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
