import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "../../../styles/styles";
import robot from "../../../public/robot.jpg";
import windows from "../../../public/windows.jpeg";
import hero2 from "../../../public/hero2.jpeg";
import bg1 from "../../../public/bg1.jpg";
import SocialContacts from "../SocialContacts/SocialContacts";

interface HeroProps {}

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: windows, alt: 'Image 1', width: 800, height: 600 },
        { src: hero2, alt: 'Image 2', width: 800, height: 600 },
        { src: bg1, alt: 'Image 3', width: 800, height: 600 },
        { src: robot, alt: 'Image 4', width: 800, height: 600 },
        { src: windows, alt: 'Image 5', width: 800, height: 600 }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);
	return (
		<>

<div className="relative bg-gray-200 p-4">
            <div className="absolute top-0 left-0 right-0">
                <p className="text-center text-white bg-black p-2">This is the component sitting on top of the Carousel</p>
            </div>
            <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={images[currentIndex].width}
                height={images[currentIndex].height}
                className="mx-auto"
            />
        </div>

			{/* <div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
			>
				<div className="flex flex-row justify-between w-full">
					<h1 className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] ss:leading-[100.8px] leading-[20px]">
						<span className="text-gradient"> Wabigalo Mityana</span>{" "}
					</h1>
				</div>
				<div
					className=""
					style={{
						backgroundImage: `url(${windows.src})`,
						width: "100%",
						height: "100%",
					}}
				>
					<p className={` ${styles.paragraph} max-w-[100%] mt-5`}>
						We make Aluminum doors and windows ,steal doors and windows, roller
						shutters,balconies, beds, school desks etc.
					</p>
					<h1 className="text-[18px] pt-4 pb-3">
						Contact us on 0705621018 / 0781602071
					</h1>
				</div>
			</div> */}

			<section
				id="home"
				className={`block  ${styles.paddingY}`}
				style={{
					backgroundImage: `url(${bg1.src})`,
					width: "100%",
					height: "100%",
					borderRadius:"20px",
					backgroundRepeat: "repeat-x"
				}}
			>
				<div
					className={`hidden sm:flex ${styles.flexStart} flex-col bg-cyan-800 rounded-2xl m-auto text-center py-5 px-6 xl:px-0 sm:px-16 sm:py-16 sm:w-[600px] sm:h-[500px]`}
				>
					<div className="flex flex-row justify-between items-center w-full">
						<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[27px] ss:leading-[100.8px] leading-[10px]">
							<span className="text-gradient sm:hidden">
								Chuuma Fabricators
							</span>{" "}
						</h1>
					</div>
					<div>
						<h1 className=" md:hidden font-poppins font-semibold ss:text-[68px] text-[30px] ss:leading-[100.8px] leading-[30px] w-full">
							Wabigalo Mityana
						</h1>
						<p
							className={`${styles.paragraph} max-w-[470px] mt-1 text-red-500 text-[30px]`}
						>
							We make;
						</p>
						<p
							className={`${styles.paragraph} mt-1 text-gray-900 font-semibold text-[20px] text-start ml-5`}
						>
							Aluminum doors and windows{" "}
						</p>
						<p
							className={`${styles.paragraph} mt-1 text-gray-900 text-[20px] font-semibold text-start ml-5`}
						>
							Steal doors and windows
						</p>
						<p
							className={`${styles.paragraph} mt-1 text-gray-900 text-[20px] font-semibold text-start ml-5`}
						>
							Roller Shutters
						</p>
						<p
							className={`${styles.paragraph} mt-1 text-gray-900  text-[20px] font-semibold text-start ml-5`}
						>
							Balconies
						</p>
						<p
							className={`${styles.paragraph} mt-1 text-gray-900  text-[20px] font-semibold text-start ml-5`}
						>
							Beds
						</p>
						<p
							className={`${styles.paragraph} mt-1 text-gray-900  text-[20px] font-semibold text-start ml-5`}
						>
							School Desks
						</p>
						<p
							className={`${styles.paragraph} mt-1 text-gray-900  text-[20px] font-semibold text-start ml-5`}
						>
							Kids play equipments
						</p>
						<div className="">
							<h1 className="text-[26px] pt-4 pb-3 px-4 text-red-500">
								Contact Us:
							</h1>
							<h2 className="text-[26px] text-gray-90font-semibold 0 text-start  pb-3 ml-5">
								0705621018 / 0781602071
							</h2>
							<SocialContacts />
						</div>
					</div>
				</div>
				<div
					className={`flex-1 sm:hidden flex ${styles.flexCenter} md:my-0 my-10 relative`}
				>
					<Image
						src={robot}
						alt="billing"
						className="w-[90%] h-[90%] relative z-[5] rounded-2xl"
					/>
				</div>
			</section>
			<div className="">
				<p
					className={`${styles.paragraph} max-w-[470px] mt-5 sm:text-white text-[25px] sm:hidden`}
				>
					We make Aluminum doors and windows ,steal doors and windows, roller
					shutters,balconies, beds, school desks.
				</p>
				<p className=" hidden sm:block text-[25px] pt-4 pb-3 text-center">
					Our experienced and highly skilled Technical team are always there to
					provide you with quality products that fit your home and Commercial building metal requirements.
					<p className="font-semibold py-5">Contact us on 0705621018 / 0781602071</p>
				</p>
				<SocialContacts />
			</div>
		</>
	);
};
export default Hero;
