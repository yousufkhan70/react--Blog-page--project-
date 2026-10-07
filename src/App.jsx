
import React, { useState } from "react";

import img1 from "./assets/sir 1.PNG";
import img2 from "./assets/sir2.PNG";
import img3 from "./assets/sir3.PNG";
import img4 from "./assets/sir4.PNG";
import img5 from "./assets/sir3.PNG";
import img6 from "./assets/sir3.PNG";
import img7 from "./assets/scan.PNG";

const users = [
  {
    image: img1,
    head: "Microsoft Office",
    info: "Master Essential computer skills\nwith ICDL program",
    info2:
      "Master Essential computer skills with\nICDL program. Build your digital skills\nin just 6 Months at Upskill Bootcamp",
    info3: "DEC 09, 2025",
    btn: "Read more ➡",
  },
  {
    image: img2,
    head: "Microsoft Office",
    info: "Master Essential computer skills\nwith ICDL program",
    info2:
      "Master Essential computer skills with\nICDL program. Build your digital skills\nin just 6 Months at Upskill Bootcamp",
    info3: "DEC 09, 2025",
    btn: "Read more ➡",
  },
  {
    image: img3,
    head: "Microsoft Office",
    info: "Master Essential computer skills\nwith ICDL program",
    info2:
      "Master Essential computer skills with\nICDL program. Build your digital skills\nin just 6 Months at Upskill Bootcamp",
    info3: "DEC 09, 2025",
    btn: "Read more ➡",
  },
  {
    image: img4,
    head: "Microsoft Office",
    info: "Master Essential computer skills\nwith ICDL program",
    info2:
      "Master Essential computer skills with\nICDL program. Build your digital skills\nin just 6 Months at Upskill Bootcamp",
    info3: "DEC 09, 2025",
    btn: "Read more ➡",
  },
  {
    image: img5,
    head: "Microsoft Office",
    info: "Master Essential computer skills\nwith ICDL program",
    info2:
      "Master Essential computer skills with\nICDL program. Build your digital skills\nin just 6 Months at Upskill Bootcamp",
    info3: "DEC 09, 2025",
    btn: "Read more ➡",
  },
  {
    image: img6,
    head: "Microsoft Office",
    info: "Master Essential computer skills\nwith ICDL program",
    info2:
      "Master Essential computer skills with\nICDL program. Build your digital skills\nin just 6 Months at Upskill Bootcamp",
    info3: "DEC 09, 2025",
    btn: "Read more ➡",
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-950 text-white transition-all duration-300"
          : "min-h-screen bg-white text-gray-900 transition-all duration-300"
      }
    >
      {/* NAVBAR */}
      <nav className="w-full px-4 sm:px-6 lg:px-10 py-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center border-b dark:border-gray-800">
        
        <h1 className="text-blue-500 text-3xl font-bold">
          UP
        </h1>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-bold text-sm md:text-base">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Courses</a>
          <a href="#" className="hover:text-blue-500">Testimonials</a>
          <a href="#" className="hover:text-blue-500">Scholarship</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Partners</a>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-2">
          <button className="border rounded-2xl px-4 py-2">
            Log in
          </button>

          <button className="bg-blue-500 text-white rounded-2xl px-4 py-2">
            Start Learning
          </button>

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white rounded-full px-3 py-2"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-blue-100 dark:bg-gray-900 min-h-[400px] flex flex-col justify-center items-center px-5 text-center text-yellow-300">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
          Our <span className="text-blue-600">Blog</span>
        </h1>

        <p className="pt-3 text-gray-600 dark:text-gray-300">
          Explore our latest, News, tutorials and insights
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-sm sm:text-base">
          
          <button className="bg-blue-500 px-5 py-3 rounded-full text-white">
            All
          </button>

          <p>Accounting & Finance</p>
          <p>AI</p>
          <p>Backend Development</p>
          <p>Cloud Computing</p>
          <p>Data Science</p>
          <p>Digital Marketing</p>
          <p>Entrepreneurship</p>
          <p>Freelancing</p>
          <p>Frontend Development</p>
          <p>Game Development</p>
          <p>Graphic Design</p>
          <p>Microsoft Office</p>
          <p>Mobile App Development</p>
          <p>UI UX Design</p>
          <p>Video Editing</p>
          <p>Web Development</p>

        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-7xl mx-auto px-5 pb-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {users.map((data, index) => (
            <div
              key={index}
              className="border dark:border-gray-700 rounded-xl p-4 sm:p-5 shadow-md bg-white dark:bg-gray-900 hover:-translate-y-1 transition-all duration-300"
            >
              
              <img
                src={data.image}
                alt=""
                className="w-full h-52 sm:h-60 object-cover rounded-lg"
              />

              <h2 className="font-bold text-xl mt-4">
                {data.head}
              </h2>

              <p className="whitespace-pre-line mt-2">
                {data.info}
              </p>

              <p className="whitespace-pre-line mt-3 text-gray-600 dark:text-gray-300">
                {data.info2}
              </p>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mt-5">
                
                <p className="text-sm">
                  {data.info3}
                </p>

                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-2">
                  {data.btn}
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="bg-blue-500 max-w-6xl mx-auto rounded-xl p-6 sm:p-10 text-white">
          
          <h3 className="text-2xl sm:text-3xl font-bold">
            Don't Talk - Take the Next Step Toward Your Brighter Future
          </h3>

          <p className="mt-3">
            Your journey begins with one simple action today.
          </p>

          <button className="bg-white text-blue-500 mt-5 px-5 py-3 rounded-lg font-bold">
            Start Learning
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t dark:border-gray-800 px-5 py-12">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>
            <p className="font-semibold">
              Empowering Afghan Youth with skills
              <br />
              for a Digital Future
            </p>

            <img
              src={img7}
              alt=""
              className="w-32 mt-4"
            />

            <div className="flex gap-4 mt-4 text-xl">
              <span>💬</span>
              <span>📝</span>
              <span>🛒</span>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Services
            </h2>

            <p>Tech services</p>
            <p>Online courses</p>
            <p>Scholarship</p>
            <p>Student Project</p>
            <p>Partners</p>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Helpful Links
            </h2>

            <p>Tech services</p>
            <p>Online Courses</p>
            <p>Scholarship</p>
            <p>Student Project</p>
            <p>Partners</p>
          </div>

          {/* INFORMATION */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Information
            </h2>

            <p>About us</p>
            <p>Our Instructor</p>
            <p>Success stories</p>
            <p>Blog</p>
            <p>078909043</p>
          </div>

        </div>


        <h1 className="text-3xl text-center">created by Yousuf Mosazai </h1>
      </footer>

    </div>
  );
};

export default App;