import { useParams, Link, Navigate } from "react-router-dom";
import projects from "../data/projects";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="text-sm text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition mb-8 inline-block"
        >
          ← Back to projects
        </Link>

        {project.image && (
          <div
            className={
              project.imageFit === "contain"
                ? "w-full flex justify-center bg-[var(--surface)] rounded-2xl border border-[var(--border)] mb-8 py-8"
                : ""
            }
          >
            <img
              src={project.image}
              alt={project.title}
              className={
                project.imageFit === "contain"
                  ? "max-h-[500px] w-auto rounded-xl border border-[var(--border)] object-contain"
                  : "w-full rounded-2xl border border-[var(--border)] object-cover"
              }
            />
          </div>
        )}

        <div className="flex items-center gap-3 text-sm text-[var(--foreground)]/60 mb-2">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

        <p className="text-[var(--foreground)]/80 mb-6 leading-relaxed">
          {project.longDescription || project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <Button as="a" href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </Button>
          )}
          {project.demo && (
            <Button as="a" href={project.demo} target="_blank" rel="noreferrer">
              Live Demo
            </Button>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}