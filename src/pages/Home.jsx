import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Experience from "../components/home/Experience";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Home Section</h1>
        </section>

        <Experience />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  );
}