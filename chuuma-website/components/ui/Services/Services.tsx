import React from "react";
import styles from "../../../styles/styles";

type Props = {};
const services = [
	{ name: 'Aluminum Doors', description: 'Custom-made aluminum doors for residential and commercial use.' },
	{ name: 'Steel Windows', description: 'High-quality steel windows that are durable and energy-efficient.' },
	{ name: 'Shutters', description: 'Custom-made shutters for privacy and security.' },
	{ name: 'Metal Beds', description: 'Handcrafted metal beds that are stylish and sturdy.' },
	{ name: 'Welding Classes', description: 'Learn the art of metal welding from our experienced instructors.' }
];

function ServicesContainer({}: Props) {
	return (
		<div className="flex flex-col sm:flex-row w-full gap-x-[20px]">
			<div className="w-[100%] bg-cyan-900 border mr-10 p-10 rounded">
				<h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[25px] text-red-400 ss:leading-[100.8px] leading-[30px]">
					Our Location
				</h2>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-1 text-white font-medium text-[20px]`}
				>
					We are located in Wabigalo Mityana Opposite Wabigalo Market along
					Mityana Kampala Highway
				</p>
				<div className="bg-gray-200 p-4">
            <h1 className="text-2xl font-medium">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-4">
                        <h2 className="text-lg font-medium">{service.name}</h2>
                        <p className="text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
			</div>
			<div className="w-[100%] h-[100%] bg-sky-900 border p-10 rounded-[10px]">
				<h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[25px] text-red-400 ss:leading-[100.8px] leading-[30px]">
					Other Services
				</h2>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-1 text-white text-[20px] font-medium`}
				>
					We provide Metal welding practical training to the youth; and find for
					them places of work after the training{" "}
				</p>
				<div className="bg-gray-200 p-4">
            <h1 className="text-2xl font-medium">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-4">
                        <h2 className="text-lg font-medium">{service.name}</h2>
                        <p className="text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-1 text-white text-[20px]`}
				>
					Book for Training: 0705621018 or 0781602071{" "}
				</p>
			</div>
		</div>
	);
}
export default ServicesContainer;
