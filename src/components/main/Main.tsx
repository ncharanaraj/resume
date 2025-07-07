import About from "./about/About";
import Skills from "./skills/Skills";
const Main = () => {
  return (
    <main className="min-h-screen">
      <article className="py-8 space-y-12">
        <About />
        <Skills />
      </article>
    </main>
  );
};

export default Main;
