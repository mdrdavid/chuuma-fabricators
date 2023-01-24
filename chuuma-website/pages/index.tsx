import styles from "../styles/styles";
import { Footer, Hero, Navbar, Services, Starts} from "../components";

export default function Home() {
	return (
		<div className="bg-gray-50 w-full overflow-hidden px-10">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Starts />
				</div>
			</div>
			<div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					{/* <Services/> */}
					<Footer />
				</div>
			</div>
		</div>
	);
}
