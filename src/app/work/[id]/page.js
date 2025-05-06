import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const projects = {
  1: {
    title: "Coinbase",
    heading:
      "Coinbase is pioneering a new way for audiences to engage with creators, we showed the world how.",
    subheading: "The Launch Film",
    description:
      "How do you pivot from the lopsided, unfair social media landscape of today, into a vibrant, sprawling creative town square? Watch us pull the world of the creator from black and white to stunning hues.",
    image: "/coinbase-launch.jpg",
    video: "blob:https://ravie.co/87c5a7d3-19f2-47b2-bc54-2038c087176d",
    poster:
      "https://images.squarespace-cdn.com/content/v1/6501de4e1575b916c339b6f7/ca25a826-8c38-4a9a-9235-a888e3070ce5/Untitled+Project_Comp+1_2024-10-04_10.39.14.jpg",
  },
  2: {
    title: "Publix",
    heading: "Publix Series reimagines modern shopping stories through film.",
    subheading: "The Ad Campaign",
    description:
      "We created a vivid narrative arc for the Publix loyalty program. A brand film that celebrates real people and everyday joys.",
    image: "/publix.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // replace with actual hosted video
    poster:
      "https://images.squarespace-cdn.com/content/v1/6501de4e1575b916c339b6f7/ca25a826-8c38-4a9a-9235-a888e3070ce5/Untitled+Project_Comp+1_2024-10-04_10.39.14.jpg",
  },
  3: {
    title: "Publix",
    heading: "Publix Series reimagines modern shopping stories through film.",
    subheading: "The Ad Campaign",
    description:
      "We created a vivid narrative arc for the Publix loyalty program. A brand film that celebrates real people and everyday joys.",
    image: "/publix.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // replace with actual hosted video
    poster:
      "https://images.squarespace-cdn.com/content/v1/6501de4e1575b916c339b6f7/ca25a826-8c38-4a9a-9235-a888e3070ce5/Untitled+Project_Comp+1_2024-10-04_10.39.14.jpg",
  },
  4: {
    title: "Publix",
    heading: "Publix Series reimagines modern shopping stories through film.",
    subheading: "The Ad Campaign",
    description:
      "We created a vivid narrative arc for the Publix loyalty program. A brand film that celebrates real people and everyday joys.",
    image: "/publix.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // replace with actual hosted video
    poster:
      "https://images.squarespace-cdn.com/content/v1/6501de4e1575b916c339b6f7/ca25a826-8c38-4a9a-9235-a888e3070ce5/Untitled+Project_Comp+1_2024-10-04_10.39.14.jpg",
  },
};

const projectImages = [
  "/image1.jpg",
  "/images2.png",
  "/images3.png",
  "/images5.jpg",
];
export default function ProjectDetail({ params }) {
  const { id } = params;
  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Project Not Found
      </div>
    );
  }

  return (
    <>
    <Header/>
      <section className="bg-[#f4ecec] text-[#231f20] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-8">
            <em className="italic">{project.title}</em>{" "}
            {project.heading.replace(project.title, "")}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            {project.subheading}
          </h3>
          <p className="text-base md:text-lg mb-8">{project.description}</p>
          <div className="w-full overflow-hidden rounded">
            <video
              className="w-full h-auto object-cover"
              src={project.video}
              poster={project.poster}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f4ecec] px-6 py-12">
        <div className="max-w-5xl mx-auto border-t border-b border-[#231f20] py-10 grid grid-cols-1 md:grid-cols-4 gap-y-8 text-center text-[#231f20]">
          <div>
            <h4 className="text-base mb-2">Views on Launch Week</h4>
            <p className="text-xl md:text-2xl font-semibold">
              <span className="underline decoration-red-500 decoration-2 underline-offset-4">
                2.5M+
              </span>
            </p>
          </div>
          <div>
            <h4 className="text-base mb-2">Creators Elated</h4>
            <p className="text-xl md:text-2xl font-semibold">Millions</p>
          </div>
          <div>
            <h4 className="text-base mb-2">Platform Signups</h4>
            <p className="text-xl md:text-2xl font-semibold">
              Tens of Thousands
            </p>
          </div>
          <div>
            <h4 className="text-base mb-2">Production</h4>
            <p className="text-xl md:text-2xl font-semibold">2 Weeks</p>
          </div>
        </div>
      </section>
      <section className="bg-[#f4ecec] px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectImages.map((src, index) => (
            <div
              key={index}
              className="w-full h-[300px] overflow-hidden rounded"
            >
              <img
                src={src}
                alt={`Project Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f4ecec] text-[#231f20] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-8">
            <em className="italic">{project.title}</em>{" "}
            {project.heading.replace(project.title, "")}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            {project.subheading}
          </h3>
          <p className="text-base md:text-lg mb-8">{project.description}</p>
          <div className="w-full overflow-hidden rounded">
            <video
              className="w-full h-auto object-cover"
              src={project.video}
              poster={project.poster}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
      </section>
      <ContactSection/>
      <Footer/>
    </>
  );
}
