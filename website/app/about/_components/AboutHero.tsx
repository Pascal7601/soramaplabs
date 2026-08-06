import Image from "next/image";
import styles from "../about.module.css";

import RevealSection from "../../../components/RevealSection";

export default function AboutHero() {
	return (
		<section data-nav-theme="light" className={styles.aboutHero}>
			<RevealSection className={styles.aboutHeroLayout}>
				<div className={styles.aboutHeroCopy}>
					<h1>Delivering Software Solutions</h1>
				</div>
				<div className={styles.aboutHeroImage}>
					<Image src="/team-working.png" alt="" fill style={{ objectFit: "cover" }} />
				</div>
				<p className={styles.aboutHeroText}>
					We build high-performance software solutions and scalable digital
					ecosystems that empower businesses to innovate, grow, and thrive in
					an increasingly digital world. From modern web and mobile
					applications to robust backend systems and cloud-native platforms,
					we create technology that is reliable, secure, and designed to
					scale with your ambitions.
				</p>
				<div className={styles.aboutHeroLogoBox}>
					<Image src="/soramapbg.png" alt="Company Logo" width={100} height={100} style={{ objectFit: "contain" }} />
				</div>
			</RevealSection>
		</section>
	)
}