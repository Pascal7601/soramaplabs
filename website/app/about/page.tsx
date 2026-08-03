import AboutHero from "./_components/AboutHero";
import BusinessStats from "./_components/BusinessStats";
import TeamSection from "./_components/TeamSection";

export default function About() {
  return (
	<main className="flex flex-col">
	  <AboutHero />
	  <BusinessStats />
	  <TeamSection />
	</main>
  );
}