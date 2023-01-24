import { stats } from "../../../constants";
import styles from "../../../styles/styles";
import Image from "next/image";

const Stats = () => (
	<div className={`${styles.flexCenter} mt-5 flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((stat) => (
			<div
				key={stat.id}
				className={`flex justify-start items-center flex-col flex-wrap m-3 border rounded `}
			>
				<Image
					src={stat.img}
					alt="discount"
					className="w-full h-[200px] sm:rounded-[10px]"
				/>
				<h4 className="font-poppins font-semibold xs:text-[40.89px] text-[25px] py-3 px-1 xs:leading-[53.16px] leading-[43.16px] text-purple">
					{stat.title}
				</h4>
				<p className="font-poppins font-semibold xs:text-[20.45px] text-[18px] xs:leading-[26.58px] leading-[21.58px] text-[#33bbcf] uppercase ml-3">
					{stat.contact}
				</p>
			</div>
		))}
	</div>
);
export default Stats;
