import AboutCTA from "./AboutCTA";
import AboutDescription from "./AboutDescription";
import AboutHeading from "./AboutHeading";

const About = () => {
  return (
    <section className="flex gap-8">
      <div className="space-y-6 w-1/2">
        <AboutHeading />
        <AboutDescription />
        <AboutCTA />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img
          src="src/assets/buildingWeb.svg"
          alt="Charanaraj N"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default About;
