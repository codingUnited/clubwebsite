"use client";
import PageBuilder from "@/components/ui/page-builder";

export default function About() {
  const AboutPage = new PageBuilder();
  AboutPage.setTitle("About Us");
  AboutPage.setDescription(
    "Learn more about our club, our mission, and the amazing people who make it all possible. From our dedicated board members to our passionate members, discover the heart and soul of our community.",
  );
  return (
    <>
      <title>{AboutPage.getTitle()}</title>

      <section className="flex my-6 text-2xl">
        <div className="text-black">
          <h1 className="font-bold text-4xl text-center">About the Club</h1>
          <hr />
          <p className="mx-auto mt-6 w-3/4">
            We are a university club focused on helping members grow their
            coding skills, learn industry tools, and prepare for careers in
            their chosen specialization, whether that's Software Engineering,
            Game Development, Network Engineering, or DevOps.
          </p>
          <h2 className="font-bold text-3xl text-center">Our Mission</h2>
          <hr />
          <p className="mx-auto mt-3 w-3/4">
            To support every member on their journey by providing resources,
            training materials, hands-on projects, coding challenges, and a
            strong peer support network.
          </p>
        </div>
      </section>

      <section className="my-6 mt-10">
        <h1 className="font-bold text-4xl text-black text-center">
          Meet the Board
        </h1>
        <hr />

        <section className="flex flex-row text-black overflow-x-auto text-lg px-4 py-6">
          <div className="flex flex-col border-2 w-1/3 mr-15 rounded-2xl text-center p-2 shrink-0">
            <h2 className="font-bold text-2xl">Club President</h2>
            <h2 className="font-medium text-2xl">Jose Miguel de Lima</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/jose_avatar.png' %}"
              alt="Jose Avatar"
            />
            <ul className="space-y-0.5 px-4">
              <li>QA Engineer for 20 years</li>
              <li>Major: Computer Science</li>
              <li>Minor: Mathematics</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>Design and program autonomous robotic systems</li>
                  <li>
                    Develop embedded software using C++ and microcontrollers
                  </li>
                  <li>
                    Build and deploy AI/ML models for simulation and automation
                  </li>
                  <li>
                    Create interactive simulators and games that blend robotics,
                    AI, and physics
                  </li>
                  <li>
                    Contribute to open-source tools or educational platforms for
                    engineers
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-2 w-1/3 mr-15 rounded-2xl text-center p-2 shrink-0">
            <h2 className="font-bold text-2xl">Club VP</h2>
            <h2 className="font-medium text-2xl">Tony Davis</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="core/images/tony_davis.jpg"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>Fraud Analyst Turned Developer</li>
              <li>Major: Computer Science</li>
              <li>Concentration: Software Engineering</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    Strengthen leardership and organizational efficiency within
                    the club, improving communication, structur, and resource
                    sharing
                  </li>
                  <li>
                    Create and lead a recurring "Introduction to Coding United"
                    session each term, helping new members understand tools,
                    collaboration practices, and project pathways
                  </li>
                  <li>
                    Build a strong portfolio of creative and technical projects
                    to support long-term goals in software engineering and
                    emerging tech
                  </li>
                  <li>
                    Grow skills in software engineering and web development,
                    focusing on full-stack projects using React, Flask, APIs,
                    and Cloud Services
                  </li>
                  <li>
                    Explore robotics simulations as an extension of
                    problem-solving and system design, including embedded
                    engineering
                  </li>
                  <li>
                    Build Python-based automation and AI/ML tools, drawing from
                    fraud-analysis experience and real industry workflows
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-2 w-1/3 mr-15 rounded-2xl text-center p-2 shrink-0">
            <h2 className="font-bold text-2xl">Club Secretary</h2>
            <h2 className="font-medium text-2xl">Mikayla Gonzalez</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/Mikayla.png' %}"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>Major: To Be Determind</li>
              <li>Concentration: To Be Determind</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>Likes to Read Books</li>
                  <li>Likes to Play Video Games</li>
                  <li>Wants to learn about all programming languages</li>
                  <li>Wants to continue to work on projects</li>
                  <li>Needs to pick a major and concentration</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-2 w-1/3 mr-15 rounded-2xl text-center p-2 shrink-0">
            <h2 className="font-bold text-2xl">Club Engagement Officer</h2>
            <h2 className="font-medium text-2xl">Dakota Riley</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/dakota.png' %}"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>Major: Computer Science</li>
              <li>Concentration: Software Engineering </li>
              <li className="text-left">
                <strong>About Me:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    Space Nerd that likes to play Star Citizen (Ask me about my
                    ships)
                  </li>
                  <li>My favorite Pokemon is Torterra</li>
                </ul>
              </li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    Learn key front-end and back-end technologies to help solve
                    problems with software in my workplace
                  </li>
                  <li>
                    Gain an understanding of the technologies that power
                    Artificial Intelligence so I can implement AI into new
                    features that enable more possibilites for our clients
                  </li>
                  <li>
                    Learn C++ and C# for game and game engine development as a
                    hobby
                  </li>
                  <li>
                    Participate in group projects that allow me to network with
                    others, enhance my skills in different technologies, and
                    bring me out of my comfort zone to elevate my knowledge
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-2 w-1/3 rounded-2xl text-center p-2 shrink-0">
            <h2 className="font-bold text-2xl">Club Event Coordinator</h2>
            <h2 className="font-medium text-2xl">Jacob Garret</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/jacob.jpg' %}"
              alt="Jose Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>Major: Computer Science</li>
              <li>Concentration: Software Engineering</li>
              <li className="text-left">
                <strong>About Me:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    I enjoy hand crafting wooden toys, playing the 6-string
                    guitar, and experimenting with unfamialiar technologies.
                  </li>
                  <li>
                    I have been playing a 6-string guitar since I was a toddler.
                  </li>
                </ul>
              </li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    To expande my expertise beyond front-end design to include
                    robust back-end development as well as server-side
                    deployment.
                  </li>
                  <li>
                    To foster my current skills and knowledge in PMI to become a
                    well-rounded project manager.
                  </li>
                  <li>
                    To collaborate with other developers on projects to gain
                    real-world experiences to better prepare me to enter the
                    workforce.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="my-6 text-black mt-15">
        <h1 className="font-bold text-4xl text-center">
          Meet our Club Officers
        </h1>
        <hr />
        <section className="flex flex-row overflow-x-auto text-lg px-4 py-6">
          <div className="flex flex-col border-2 w-1/3 mr-15 rounded-2xl text-center p-2 shrink-0">
            <h2 className="font-medium text-2xl">John Schmidt</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/John S.jpg' %}"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>Major: Computer Science</li>
              <li>Concentration: Software Engineering</li>
              <li>A CSS Developer walks into a bar.</li>
              <li>And a table.</li>
              <li>And a chair.</li>
              <li>And the bartender.</li>
              <li>(Because the layout was broken)</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    Work on various projects in collaboration with other members
                    to get better experience
                  </li>
                  <li>
                    Learn more about website design including working with React
                    and APIs
                  </li>
                  <li>
                    Build a homelab setup to learn more skills related to
                    networking and server management
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-2 w-1/3 mr-15 rounded-2xl text-center p-2 shrink-0">
            <h2 className="font-medium text-2xl">Stephen Berkley</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/Stephen_Berkley.png' %}"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>Major: Computer Science</li>
              <li>Concentration: Software Engineering</li>
              <li>Why did the Java developer wear glasses?</li>
              <li>...</li>
              <li>...</li>
              <li>Because they couldn't C#</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    Sharpen my Jaca and C++ skill to write cleaner, more
                    efficient code.
                  </li>
                  <li>Explore game engine physics and backend systems.</li>
                  <li>
                    Collaborate on real projects to further expand my skill sets
                    and to learn from others.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-2 w-1/3 rounded-2xl text-center p-2 shrink-0">
            <h2 className="font-medium text-2xl">Devell Robinson</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/Devell.png' %}"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>Major: Computer Science</li>
              <li>Concentration: Software Engineering</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    Create an inclusive social platform designed for developers
                    of all backgrounds, skill levels, and specialties. It will
                    foster collaboration, learning, and community across every
                    area of software development.{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="my-6 text-black text-lg mt-15">
        <h1 className="font-bold text-4xl text-center">
          Meet our Club Members
        </h1>
        <hr />
        <div className="flex space-x-10">
          <div className="flex flex-col border-2 w-1/3 rounded-2xl text-center p-2 mt-4">
            <h2 className="font-medium text-2xl">Erica Boterf</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/erica_boterf.jpg' %}"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>
                I am a Computer Science student seeking my bachelor's degree. I
                love working with computers and coding is life!
              </li>
              <li>Major: Computer Science</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>Working within a company handling data.</li>
                  <li>Owning a homestead and living off the land</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-2 w-1/3 rounded-2xl text-center p-2 mt-4">
            <h2 className="font-medium text-2xl">Bryton Sarrel</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/bryton_sarrell.png' %}"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>
                About Me: Computer Science Hobbyist and IT Professional -
                Currently Working as a Software Engineer
              </li>
              <li>Major: Computer Science</li>
              <li>Concentration: Software Engineering</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    Build open-source tools and applications for different
                    hobbies and business use cases.
                  </li>
                  <li>
                    Design and build open-source projects such as home
                    automation systems and robotics.
                  </li>
                  <li>
                    Use skills to contribute to charities and organizations.
                  </li>
                  <li>Contribute to the computer science community.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-2 w-1/3 rounded-2xl text-center p-2 mt-4">
            <h2 className="font-medium text-2xl">Jenn Cigler</h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/jenn cigler.png' %}"
              alt="Kailey Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>Major: Cybersecurity</li>
              <li>I like plants, Pokemon, and pizza</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    I didn't know what to put for goals or shared any pictures
                  </li>
                  <li>
                    So my club president added this random text your reading
                  </li>
                  <li>And generated some wierd AI art</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="flex flex-col border-2 w-1/3 rounded-2xl text-center p-2 mt-4">
            <h2 className="font-medium text-2xl">
              Caroline aka 'Bailey' Potter
            </h2>
            <hr />
            <img
              className="my-3 w-full h-75 object-contain"
              src="{% static 'core/images/Caroline_potter.png' %}"
              alt="Caroline Avatar"
            />
            <ul className="space-y-0.5 text-center px-4">
              <li>
                Currently working as a Data Analyst in Healthcare and Product
                Development
              </li>
              <li>Major: Data Analytics</li>
              <li>Concentration: Project Management</li>
              <li className="text-left">
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>
                    Deepen my knowledge in programing languages, such as SQL,
                    Python, and R through immersive projects and collaboration
                    with peers.
                  </li>
                  <li>
                    Effectively manipulate data and build predictive models
                    using NumPy, Pandas, and Scikit-Learn libraries.
                  </li>
                  <li>
                    Engage in applied learning by participating in hackathons
                    and community initiatives that translate theoretical
                    knowledge into practical real-world experience.
                  </li>
                  <li>
                    Actively share knowledge, support fellow members, and
                    promote and environment for continuous growth.
                  </li>
                  <li>
                    Grow the community in Coding United Club by fostering a
                    collaborative environment to improve our coding skills
                    together.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
