import React from "react";

export default function Home() {
  return (
    <div className="pt-20">

{/* Hero Section */}
<section className="bg-primary text-white text-center py-20" id="hero">
<img src="/logo.png" alt="AOL Logo" className="mx-auto mb-6 h-24" />
  <h1 className="text-4xl font-bold mb-4">Art of Language Training Institute</h1>
  <p className="text-lg max-w-2xl mx-auto mb-6">
    Empowering individuals and organizations with the knowledge and skills needed to excel in today's dynamic business environment.
  </p>
  <a
    href="#about"
    className="bg-accent text-dark px-6 py-2 rounded hover:opacity-90 font-semibold transition"
  >
    Explore More
  </a>
</section>


{/* Section 1: About AOL */}
<section id="about" className="bg-white py-20 px-6 md:px-24">
  <h2 className="text-3xl font-bold text-primary mb-6">About AOL</h2>
  <p className="text-lg text-gray-700 mb-4">
    AOL is a premier training institute based in Riyadh, Kingdom of Saudi Arabia, dedicated to empowering individuals and organizations with the knowledge and skills needed to excel in today's dynamic business environment.
  </p>
  <p className="text-lg text-gray-700">
    With a comprehensive range of courses spanning management, finance, HR, English language education and other general topics, we are committed to fostering continuous learning and development.
  </p>
</section>


{/* Section 2: Vision and Mission */}
<section id="vision" className="bg-light py-20 px-6 md:px-24">
  <h2 className="text-3xl font-bold text-primary mb-8">Vision & Mission</h2>

  <h3 className="text-2xl font-semibold text-dark mb-2">Vision</h3>
  <p className="text-lg text-gray-700 mb-6">
    To be the leading catalyst for professional and personal growth in Saudi Arabia, playing a role in the Vision 2023 and specifically in the Human Capability Development Program by equipping individuals and organizations with the capabilities to thrive in a rapidly evolving global landscape.
  </p>

  <h3 className="text-2xl font-semibold text-dark mb-2">Mission</h3>
  <p className="text-lg text-gray-700">
    Provide high-quality solutions and customized programs according to individual and institutional needs.
  </p>
  <p className="text-lg text-gray-700 mt-4">
    We strive to cultivate a culture of excellence, innovation, and lifelong learning, enabling our clients to achieve their fullest potential and contribute effectively to the growth and prosperity of Saudi Arabia.
  </p>
</section>


{/* Section 3: Our Values */}
<section id="values" className="bg-white py-20 px-6 md:px-24">
  <h2 className="text-3xl font-bold text-primary mb-10">Our Values</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
    
    <div>
      <h3 className="text-xl font-semibold text-dark mb-2">Excellence</h3>
      <p>
        We are committed to delivering excellence in everything we do, from the quality of our courses to the caliber of our instructors.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-dark mb-2">Innovation</h3>
      <p>
        We embrace innovation and creativity to continually enhance our programs and stay ahead of industry trends.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-dark mb-2">Empowerment</h3>
      <p>
        We believe in empowering individuals and organizations with the knowledge, skills, and confidence to succeed.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-dark mb-2">Collaboration</h3>
      <p>
        We foster a culture of collaboration and teamwork, leveraging the collective expertise of our staff, partners, and clients to achieve mutual success.
      </p>
    </div>
    
  </div>
</section>


{/* Section 4: Our Clients */}
<section id="clients" className="bg-light py-20 px-6 md:px-24">
  <h2 className="text-3xl font-bold text-primary mb-8">Our Clients</h2>
  <p className="text-gray-700 mb-6">
    We’ve proudly worked with a range of respected organizations across various industries. Below are some of our clients:
  </p>

  <div className="flex flex-wrap gap-6 justify-start items-center">
    {/* Replace these gray boxes with your actual client logos */}
    <div className="w-32 h-16 bg-gray-200 rounded-md shadow-sm" />
    <div className="w-32 h-16 bg-gray-200 rounded-md shadow-sm" />
    <div className="w-32 h-16 bg-gray-200 rounded-md shadow-sm" />
    <div className="w-32 h-16 bg-gray-200 rounded-md shadow-sm" />
  </div>
</section>


{/* Section 5: Our Partners */}
<section id="partners" className="bg-white py-20 px-6 md:px-24">
  <h2 className="text-3xl font-bold text-primary mb-8">Our Partners</h2>
  <p className="text-gray-700 mb-6">
    We collaborate with leading institutions and organizations to deliver world-class training and development programs.
  </p>

  <div className="flex flex-wrap gap-6 justify-start items-center">
    {/* Replace these with your actual partner logos */}
    <div className="w-32 h-16 bg-gray-200 rounded-md shadow-sm" />
    <div className="w-32 h-16 bg-gray-200 rounded-md shadow-sm" />
    <div className="w-32 h-16 bg-gray-200 rounded-md shadow-sm" />
    <div className="w-32 h-16 bg-gray-200 rounded-md shadow-sm" />
  </div>
</section>


{/* Section 6: Our Solutions - General Solutions */}
<section id="solutions" className="bg-light py-20 px-6 md:px-24">
  <h2 className="text-3xl font-bold text-primary mb-10">Our Solutions</h2>

  <h3 className="text-2xl font-semibold text-dark mb-6">General Solutions</h3>
  <p className="text-gray-700 mb-4">
    At AOL, we provide a range of high-level training solutions tailored to meet diverse needs and objectives, including:
  </p>

  <div className="space-y-4 text-gray-700">

    <div>
      <p className="font-semibold text-dark">General Training Programs:</p>
      <p>
        Our general training programs encompass a wide array of topics, catering to individuals and organizations seeking foundational knowledge and skills development across various disciplines.
      </p>
    </div>

    <div>
      <p className="font-semibold text-dark">Contractual Training Solutions:</p>
      <p>
        We offer contractual training services tailored to the specific requirements of organizations, delivering customized training solutions designed to address their unique challenges and opportunities.
      </p>
    </div>

    <div>
      <p className="font-semibold text-dark">Specialized Workshops:</p>
      <p>
        Our specialized workshops focus on niche areas within management, finance, HR, and other domains, providing in-depth insights and practical tools to enhance professional expertise and performance.
      </p>
    </div>

    <div>
      <p className="font-semibold text-dark">Executive Education:</p>
      <p>
        Our executive education programs are designed for senior executives and business leaders, offering advanced learning experiences and strategic insights to drive organizational growth and innovation.
      </p>
    </div>

    <div>
      <p className="font-semibold text-dark">Language Proficiency Courses:</p>
      <p>
        As language proficiency is crucial for success in today's globalized world, we provide comprehensive English language education programs for individuals and corporate clients, enabling effective communication and collaboration on a global scale.
      </p>
    </div>

  </div>
</section>
{/* Section 7: Training Solutions */}
<section className="bg-white py-20 px-6 md:px-24">
  <h3 className="text-2xl font-semibold text-dark mb-6">Training Solutions</h3>
  <p className="text-gray-700 mb-4">
    AOL offers specialized training across a variety of critical domains, designed to enhance skills and performance in both the public and private sectors. Our programs cover:
  </p>

  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>Leadership And Management</li>
    <li>Self-Development</li>
    <li>Executive Secretary</li>
    <li>Media</li>
    <li>Organizing Conferences and Events</li>
    <li>Media and Advertising Campaigns</li>
    <li>Human Resources</li>
    <li>Information Technology</li>
    <li>Public Relations</li>
  </ul>
</section>
{/* Section 8: External Scholarship */}
<section className="bg-light py-20 px-6 md:px-24">
  <h3 className="text-2xl font-semibold text-dark mb-6">External Scholarship</h3>

  <p className="text-gray-700 mb-4">
    AOL is considered one of the institutes specialized in securing language and course acceptance and university admission.
  </p>

  <p className="text-gray-700 mb-4">
    We facilitate acceptance of institutes all over the world and study abroad opportunities thanks to our partnerships with the best universities, international educational institutions, institutes, and language schools.
  </p>

  <p className="text-gray-700">
    Our experience in dealing with institutes, universities, and educational institutions is based on direct experience — securing admission, housing, insurance, and other matters that concern the student and make their educational journey smoother and more successful.
  </p>
</section>


{/* Section 9: Customized Programs */}
<section className="bg-white py-20 px-6 md:px-24">
  <h3 className="text-2xl font-semibold text-dark mb-6">Customized Programs</h3>

  <p className="text-gray-700">
    Designing programs according to the client’s needs, AOL provides its services to clients in the government sector, the private sector, and individuals wishing to study the English language and train outside the Kingdom of Saudi Arabia.
  </p>
</section>

{/* Section 10: Contact Us */}
<section id="contact" className="bg-light py-20 px-6 md:px-24">
  <h2 className="text-3xl font-bold text-primary mb-6">Contact Us</h2>

  <ul className="text-gray-700 text-lg space-y-4">
    <li>
      <strong>Phone:</strong>{" "}
      <a href="tel:+966555439642" className="text-primary hover:underline">
        00966 555439642
      </a>
    </li>
    <li>
      <strong>Email:</strong>{" "}
      <a href="mailto:info@artoflang.net" className="text-primary hover:underline">
        info@artoflang.net
      </a>
    </li>
    <li>
      <strong>Website:</strong>{" "}
      <a href="https://www.artoflang.net" target="_blank" rel="noreferrer" className="text-primary hover:underline">
        www.artoflang.net
      </a>
    </li>
  </ul>
</section>

    </div>
  );
}
