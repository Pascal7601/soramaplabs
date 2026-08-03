import styles from "../about.module.css";
import RevealSection from "../../../components/RevealSection";

const TEAM = [
  { name: "Monica Eshihanda", role: "Software Engineer" },
  { name: "Pascal Levis", role: "Software Engineer" },
  { name: "Arnold Lupamo", role: "Software Engineer" },
];

export default function TeamSection() {
  return (
    <section data-nav-theme="light" className={styles["team-section"]}>
      <div className={styles["team-wordmark"]} aria-hidden="true">
        OUR TEAM
      </div>

      <RevealSection className={styles["team-intro-row"]}>
        <div className={styles["team-intro-copy"]}>
          <h2>Meet The Team</h2>
          <p className={styles["text-little"]}>
            Behind every successful product is a team of passionate
            engineers, designers, and innovators. We combine technical
            expertise with creative thinking to deliver software solutions
            that are scalable, reliable, and built to solve real-world
            challenges. Every project is a collaborative effort, driven by a
            shared commitment to excellence and client success.
          </p>
        </div>
        <span className={styles["team-tag"]}>leaders</span>
      </RevealSection>

      <RevealSection className={styles["team-grid"]} stagger>
        {TEAM.map((member) => (
          <div className={`${styles["team-card"]} reveal-item`} key={member.name}>
            <div className={styles["team-card-photo"]} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </RevealSection>
    </section>
  );
}