import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Project {
  id: string;
  title: string;
  // description: string;
  // fullDescription: string;
  purpose: string;
  image: string;
  technologies: string[];
  journey: string;
  hurdles: string;
  future: string;
  videoId?: string;
}

// Sample project data (in a real app, you would fetch this)
const projectsData: Project[] = [
  {
    id: "project1",
    title: "Skia Coffee-Client Project",
    purpose: `
  At <strong>Decube</strong>, we received an <strong>exciting opportunity</strong> — a chance to deliver for a <strong>real-world client</strong>. 
  <br><br>
  <strong>Ashish</strong>, the owner of a coffee business in <strong>Bangalore</strong>, approached us with a clear <em>vision</em>: 
  to <strong>digitize his operations</strong> and serve his clientele more efficiently. 
  <br><br>
  He needed applications that could <strong>simplify order placement</strong> and provide <strong>inventory visibility</strong> to his customers and a medium to monitor it all. 
  <br><br>
  After understanding his needs, we aligned on building a <strong>comprehensive digital solution</strong> tailored specifically for his business.
`,
    image: "/images/skia-coffee.jpeg",
    technologies: [
      "Vue.js",
      "Firebase (Auth, Hosting, Functions)",
      "Shadc-vue (Headless UI)",
      "Shiprocket",
      "Github Projects",
    ],
    journey: `
  The project began with <strong>gathering detailed requirements</strong>, defining the need for <strong>mobile applications</strong> and an 
  <strong>admin portal</strong> to manage central operations. 
  <br><br>
  The core functionalities identified included <strong>order tracking</strong>, <strong>inventory management</strong>, and <strong>business analytics</strong>.
  <br><br>
  
  I took <strong>the responsibility</strong> for building the admin portal, with others joining later. 
  Being in an <em>early-stage environment</em>, I had the liberty to <strong>choose the tech stack</strong>. 
  After careful consideration, I decided on <strong>Vue.js</strong> for the frontend — my first experience with it — and <strong>Firebase</strong> for the backend.
  <br><br>

  <em>Learning</em> was given priority over mere delivery. I started with the official <strong>Vue.js documentation</strong> and <strong>Vue School tutorials</strong>. 
  To accelerate my growth,<strong>Vivek Bhaiya</strong>, one of the visionaries who bought the team together, generously shared his access to a Coursera premium course. 
  The company believed in <em>investing in solid foundations</em> for long-term success.
  <br><br>

  As the project progressed, I was introduced to <strong>ShadCN-Vue</strong>. 
  Observing how an experienced developer from Bangalore delivered a <strong>shared UI</strong> in a single day — something that took me a week — 
  motivated me to focus deeply on <strong>pixel-perfect implementation</strong> and <strong>efficient development practices</strong>.
  <br><br>

  After weeks of refining the UI, I transitioned to backend integrations — <strong>authentication</strong> (using phone number sign-in), 
  <strong>Firestore database</strong> operations, <strong>hosting</strong>, and writing <strong>cloud functions</strong> for backend jobs. 
  Backend tasks came naturally to me, and a special thanks to <strong>Sheersh</strong> for being there — often even at 3 AM — to guide me through technical queries.
`,
    hurdles: `
  The timeline allotted for the project was approximately <strong>three months</strong>. 
  However, due to <em>college commitments</em> and <em>competitive exam preparation</em>, 
  I was able to engage fully only during the final month. 
  By that time, I was the <strong>sole full-stack developer</strong> on the project.
  <br><br>

  Managing timelines became a significant challenge. 
  There were stretches of working <strong>12–14 hours daily</strong>, often late into the night. 
  While the <strong>mobile applications</strong> were ready for initial demonstration to the client, 
  the <strong>admin portal</strong> needed more time, causing a project delay of around <strong>20 days</strong>.
  <br><br>

  Fortunately, client interactions were skillfully managed by <strong>Vivek</strong>, <strong>Sheersh</strong>, and <strong>Karmveer</strong>, 
  allowing me the necessary breathing room to complete development without undue pressure.
  <br><br>

  Toward the final phase, <strong>Divy</strong> joined the team — a dedicated fella. 
  I took on the added responsibility of <strong>project management</strong>, using <strong>GitHub Projects</strong> for tracking tasks and delegating various functional modules to Divy. 
  His contribution proved valuable in tying up loose ends efficiently.
`,
    future: `
  While the initial solution is live and serving the client’s needs, there is <strong>significant scope</strong> for expanding the <strong>analytics functionalities</strong>. 
  As <strong>Ashish’s business</strong> grows, we plan to <strong>iterate and extend</strong> the platform further to support a broader range of operations. 
  <br><br>

  In the interim, the application is being tested among friends and close customers, 
  with feedback loops helping us <strong>refine and scale</strong> the solution as needed.
`,
    videoId: "dQw4w9WgXcQ", // Optional, if you have a YouTube video showcasing the project
  },
  {
    id: "project2",
    title: "Cieszyc Web App",
    purpose: `
  <strong>Cieszyc 2024</strong> was our college’s first fest after a gap of nearly five years — delayed due to COVID and other administrative reasons. 
  The preparations were electric, and as part of the organizing effort, a dedicated <strong>web app</strong> was needed to handle <strong>ticketing, event schedules</strong>, 
  and <strong>submission forms</strong> for event participation and payment.
  <br><br>
  The fest committee collaborated with <strong>Spiders.co.in</strong>, a company run by an alumnus from the 2020 batch. 
  They provided the backend support but needed someone on the ground to implement college-specific requirements. 
  That’s where <strong>Ravinder</strong> and I came in — known in our college circles for our development work and being the only two familiar with <strong>Laravel</strong>, the framework the project was built on.
`,

    image: "/images/cieszyc.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    journey: `
  We were provided with a Laravel-based project template and a shared hosting account by Spiders.co.in. 
  From there, <strong>Ravinder and I</strong> dove into the prewritten codebase, analyzing, modifying, and extending it to suit our fest's unique needs. 
  <br><br>
  The timeline was tight — within a week, we had to <strong>understand unfamiliar code</strong>, <strong>gather functional requirements</strong>, and 
  <strong>implement new features</strong> without compromising stability.
  <br><br>
  Despite the crunch, we delivered. One personal milestone during this phase was resolving a bug in the existing <strong>navigation bar logic</strong>. 
  Though not critical, I noticed a flaw in how routes were being handled — written by someone already in the software industry. 
  Fixing that gave me a real sense of accomplishment.
`,

    hurdles: `
  Surprisingly, there were no major roadblocks. I genuinely <em>enjoyed</em> working on this — contributing something tangible for my college. 
  It felt personal, and in many ways, it reinforced my passion for building things that matter. 
  <br><br>
  This experience helped shape who I am today, not just as a developer but as someone who enjoys delivering under pressure, for a cause that means something.
`,
    future: `
  With the fest concluded during our <strong>seventh semester</strong>, we’ve handed off the baton to our juniors. 
  Our work laid a foundation — a tradition, even — for how digital infrastructure around college events can be handled going forward. 
  <br><br>
  While our direct involvement may no longer be needed, I remain open to helping in the future, should the next team ever need guidance.
`,
    videoId: "dQw4w9WgXcQ", // YouTube video ID
  },
  {
    id: "project3",
    title: "Complaint Managment System",
    purpose: `
  During my early days in college, eager to learn and build something meaningful, my assistant professor approached me with a project. 
  He asked, “Sarvesh, can you and your friends deliver this to a client?” I said yes — even though my seniors did the actual delivery, and I had little knowledge of development.
  <br><br>
  As a follow-up, he offered me a college-level internal project. Not wanting to lose the opportunity, I said yes again — and so began my journey into <strong>Laravel</strong>.
`,
    image: "/images/cms.png",
    technologies: [
      "React Native",
      "Firebase",
      "Redux",
      "Jest",
      "GitHub Actions",
    ],
    journey: `
  This was my <strong>first real project</strong>. I lacked the skillset to handle it on my own and initially relied on a senior who claimed to know Laravel. 
  We sat down once, produced no results, and eventually, he vanished from the picture. The responsibility, however, remained squarely on my shoulders.
  <br><br>
  I attempted to seek help from peers, but being in the second year, no one around me was equipped to handle Laravel. 
  Still, I didn’t back down. I reached out to contacts at <strong>Colored Cow</strong>, an incubation group on campus known for working with Laravel. 
  I had joined them earlier for a short internship and training — and remembered <strong>Laracasts</strong>.
  <br><br>
  So I began — from scratch — diving deep into Laravel documentation, watching tutorials, and experimenting with every line of code. 
  That decision, although lonely and uncertain at first, became the defining point of my development career.
`,
    hurdles: `
  The hurdles were plenty. I had no guidance, no collaborative team, and no prior exposure to Laravel or MVC architecture.
  But those very constraints became my biggest teachers. I learned <strong>routing, controllers, database interactions, middleware, authentication, authorization</strong> — 
  and yes, what <strong>Spatie</strong> packages are and why they matter.
  <br><br>
  I also explored frontend tools like <strong>vanilla CSS</strong>, <strong>Bootstrap</strong>, and <strong>Tailwind</strong>, integrating them into the project.
  The system required <strong>role-based access control</strong>, so I had to study how Laravel handles user roles, guards, and policies.
  <br><br>
  Despite the struggle, I managed to deliver a minimal working prototype — and gained a deep, working knowledge of how robust web applications are built.
  <br><br>
  One insight I appreciated: Laravel surfaces the structure. It makes you aware of everything — unlike some JS stacks that hide complexity under convention.
`,
    future: `
  Looking back, I should have pursued a deeper internship with <strong>Colored Cow</strong>. It would’ve helped me accelerate, but hindsight is always clear.
  Still, the road I took shaped me — no regrets.
  <br><br>
  After delivering the MVP in Laravel, I was introduced to <strong>blockchain</strong> development. That led me into <strong>JavaScript</strong> — a domain I hadn’t touched yet.
  <br><br>
  Even to this day, I somehow remain a <strong>full-stack JavaScript developer</strong>, yet to get my hands truly dirty with blockchain development.
  <br><br>
  Soon after, I discovered <strong>RemixJS</strong>. I chose it over Next.js simply because its routing style felt familiar — reminiscent of Laravel. 
  This allowed me to <strong>rebuild the entire CMS</strong> in Remix, applying my Laravel experience to a JS ecosystem.
  <br><br>
  The switch between stacks wasn’t overwhelming because I had a strong foundation in <strong>C programming and DSA</strong> from my first year. 
  That logical base helped me adapt across paradigms.
`,
    videoId: "dQw4w9WgXcQ", // YouTube video ID
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setLoading(true);
    const foundProject = projectsData.find((p) => p.id === id) || null;

    // Simulate loading delay
    setTimeout(() => {
      setProject(foundProject);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Button asChild>
          <Link to="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/#projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">
                How and Why it Started
              </h2>
              {/* <p className="text-gray-700">{project.purpose}</p> */}
              <div
                className="text-gray-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: project.purpose }}
              />
            </section>

            <Separator className="my-6" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">The Journey</h2>
              <div
                className="text-gray-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: project.journey }}
              />
            </section>

            <Separator className="my-6" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">The Hurdles</h2>
              <div
                className="text-gray-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: project.hurdles }}
              />
            </section>

            <Separator className="my-6" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Future Direction</h2>
              <div
                className="text-gray-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: project.future }}
              />
            </section>

            {project.videoId && (
              <>
                <Separator className="my-6" />

                <section>
                  <h2 className="text-xl font-semibold mb-3">Demo Video</h2>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[300px] sm:h-[400px]"
                    ></iframe>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
