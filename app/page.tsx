import Image from "next/image";
import { socialLinks , metaData } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Full Stack Web Developer
      </h1>
    
    <div className="prose prose-neutral dark:prose-invert">
  
  <p>
    Versatile full stack developer building enterprise solutions and freelancing. Expert in PERN/MERN stacks, Next.js, Python, and C++. Passionate about AI integration, delivering comprehensive systems that solve complex business challenges with excellent user experiences.
  </p>
  
  <h2>Technical Skills</h2>
  <p>
    Frontend: React.js, Next.js, Tailwind CSS | Backend: Node.js, Express, Python, C++ | Databases: PostgreSQL, MongoDB | AI Technologies | DevOps
  </p>
  
  <p>
    Building innovative software solutions through my enterprise while taking on freelance projects. Focused on clean, maintainable code that delivers tangible business value.
  </p>
</div>    
  </section>
  );
}
