import React from "react";
import { Navbar } from "../../components";
import ServicesContainer from "../../components/ui/Services/Services"

type Props = {};

function Services({}: Props) {
	return (
		<div>
			<Navbar />
			<ServicesContainer/>
		</div>
	);
}

export default Services;
