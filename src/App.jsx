import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Rocket,
  Briefcase,
  BarChart,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const RESUME_URL = "/Vaibhav_CV.pdf";
const PROFILE_PHOTO = "/profile.jpg";

const profile = {
  name: "Vaibhav Ashok Vardhan",
  title: "Automation & Transformation Leader",
  tagline:
    "Driving operational excellence with smart automation, data-driven insights, and scalable transformation programs.",
  location: "Mansfield, UK",
  email: "Vaibhav08vardhan@gmail.com",
  phone: "+44 7949790264",
  strengths: [
    {
      icon: Rocket,
      title: "Automation Strategy",
      desc: "Design and deliver large-scale automation programs aligning tech with business outcomes.",
    },
    {
      icon: Briefcase,
      title: "Controls Engineering",
      desc: "Deep expertise in PLC, SCADA, HMI, and integration of advanced warehouse & logistics systems.",
    },
    {
      icon: BarChart,
      title: "Data & Insights",
      desc: "Transform operational data into actionable intelligence with Power BI, Grafana, and predictive analytics.",
    },
    {
      icon: Users,
      title: "Leadership",
      desc: "Mentor and empower engineering teams to deliver transformation at scale.",
    },
  ],
  impact: [
    { value: "25%", label: "Reduced downtime" },
    { value: "38%", label: "Increased throughput" },
    { value: "10+", label: "Global sites delivered" },
    { value: "8+ yrs", label: "Industry experience" },
  ],
  services: [
    {
      title: "Warehouse & Logistics Automation",
      desc: "End-to-end automation strategy, integration of ASRS, WMS, WES, WCS, Advanced Robotics, and predictive maintenance solutions.",
    },
    {
      title: "Digital Transformation",
      desc: "Align automation initiatives with business strategy to deliver scalable, sustainable outcomes.",
    },
    {
      title: "Data Visualization & Insights",
      desc: "Develop dashboards and reporting frameworks that empower leaders to make informed decisions.",
    },
    {
      title: "Team Development",
      desc: "Mentor and empower engineering teams to deliver automation & transformation at scale.",
    },
  ],
};

export default function VaibhavPortfolio() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white antialiased overflow-hidden">
      {/* Subtle hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/hex-pattern.svg')] bg-repeat"></div>

      <div className="relative max-w-6xl mx-auto p-6 space-y-16">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 text-center lg:text-left lg:grid lg:grid-cols-3 lg:gap-12 lg:items-center bg-white/10 backdrop-blur rounded-2xl p-8"
        >
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-extrabold text-white">
              {profile.name}
            </h1>
            <p className="text-xl text-cyan-400 mt-2 font-semibold">
              {profile.title}
            </p>
            <p className="max-w-2xl mt-6 text-lg text-slate-300">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={14} /> {profile.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />{" "}
                <a href={`mailto:${profile.email}`} className="underline">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />{" "}
                <a href={`tel:${profile.phone}`} className="underline">
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:col-span-1 flex justify-center lg:justify-end">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
              <img
                src={PROFILE_PHOTO}
                alt="Profile"
                className="w-full h-full object-cover scale-96"
              />
            </div>
          </div>
        </motion.header>

        {/* Strengths */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white text-slate-800 rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition"
            >
              <s.icon className="w-8 h-8 mb-3 text-cyan-600" />
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Global Impact */}
        <section className="bg-white/10 backdrop-blur rounded-2xl p-10 text-center shadow">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Global Impact
          </h2>
          <div className="mx-auto w-16 h-1 bg-cyan-500 mb-8 rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {profile.impact.map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-extrabold text-white">
                  {item.value}
                </div>
                <div className="text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Expertise */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-4 text-cyan-400">
            Core Expertise
          </h2>
          <div className="mx-auto w-16 h-1 bg-cyan-500 mb-10 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {profile.services.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white text-slate-800 rounded-2xl p-6 shadow hover:shadow-lg"
              >
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership Highlights */}
        <section className="bg-white text-slate-800 rounded-2xl p-10 shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Leadership Highlights</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-6">
            With over 8 years of experience in automation, controls, and
            transformation programs across global sites, I have a proven track
            record of delivering efficiency, scalability, and innovation in
            complex environments.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={RESUME_URL}
              download
              className="rounded-2xl bg-slate-900 text-white px-5 py-2 text-sm font-medium shadow-sm hover:opacity-95"
            >
              Download CV
            </a>
            <a
              href="mailto:Vaibhav08vardhan@gmail.com"
              className="rounded-2xl border border-slate-200 px-5 py-2 text-sm font-medium shadow-sm hover:shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {profile.name} — All rights reserved.
        </footer>
      </div>
    </div>
  );
}
