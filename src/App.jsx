import React from "react";
import { motion } from 'framer-motion'
import Section from './components/Section'
import Badge from './components/Badge'
import { EXPERIENCE, PROJECTS, SKILLS, TESTIMONIALS } from './data'

function Nav() {
    const links = [
        { href: '#work', label: 'Work' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' }
    ]
    return (
        <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur">
            <nav className="container-hero flex items-center justify-between py-4">
                <a href="#home" className="font-display text-lg md:text-xl font-semibold">Mohammed Riyaz Khan F</a>
                <div className="hidden md:flex items-center gap-6">
                    {links.map(l => (
                        <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition">{l.label}</a>
                    ))}
                    <a href="/resume.pdf" className="ml-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-brand-400 transition">
                        Download Resume
                    </a>
                </div>
            </nav>
        </header>
    )
}

function Hero() {
    return (
        <section id="home" className="container-hero grid md:grid-cols-2 gap-10 items-center pt-16 md:pt-24 pb-14">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-4xl md:text-6xl font-bold leading-tight"
                >
                    Hi, I’m <span className="text-brand-400">Riyaz Khan</span> — Senior Frontend Engineer
                </motion.h1>
                <p className="mt-5 text-slate-300 max-w-xl">
                    8+ years crafting pixel-perfect, performant web experiences with React, Next.js, Redux, and GraphQL. I build delightful UIs with strong architecture and attention to detail.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#projects" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-200 transition">View Work</a>
                    <a href="#contact" className="rounded-xl border border-white/10 px-5 py-3 font-medium hover:bg-white/10 transition">Contact</a>
                </div>
                <div className="mt-8 flex items-center gap-3">
                    <a href="https://github.com/" target="_blank" className="text-slate-400 hover:text-white">GitHub</a>
                    <span className="text-slate-700">•</span>
                    <a href="https://www.linkedin.com/" target="_blank" className="text-slate-400 hover:text-white">LinkedIn</a>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: .96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .6, delay: .1 }}
                className="card p-6 md:p-8"
            >
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop" alt="Workspace" className="h-full w-full object-cover" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Redux', 'Tailwind', 'GraphQL'].map(s => <Badge key={s}>{s}</Badge>)}
                </div>
            </motion.div>
        </section>
    )
}

function Work() {
    return (
        <Section id="work" title="Experience" subtitle="Impact-focused work across products and client projects.">
            <div className="grid gap-6">
                {EXPERIENCE.map((job) => (
                    <div key={job.company} className="card p-6 md:p-8">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                            <h3 className="font-display text-2xl font-semibold">{job.role} · <span className="text-brand-400">{job.company}</span></h3>
                            <span className="text-sm text-slate-400">{job.period}</span>
                        </div>
                        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-300">
                            {job.points.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}

function Projects() {
    return (
        <Section id="projects" title="Featured Projects" subtitle="A selection of recent work and case studies.">
            <div className="grid md:grid-cols-2 gap-6">
                {PROJECTS.map((p) => (
                    <article key={p.title} className="card overflow-hidden">
                        <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />
                        <div className="p-6">
                            <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                            <p className="mt-2 text-slate-300">{p.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.tech.map(t => <Badge key={t}>{t}</Badge>)}
                            </div>
                            <div className="mt-5 flex gap-4">
                                <a href={p.links.live} className="text-brand-400 hover:underline">Live</a>
                                <a href={p.links.code} className="text-brand-400 hover:underline">Code</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    )
}

function Skills() {
    return (
        <Section id="skills" title="Skills" subtitle="Tools and technologies I use to build fast, beautiful products.">
            <div className="card p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
            </div>
        </Section>
    )
}

function Testimonials() {
    return (
        <Section id="testimonials" title="Testimonials" subtitle="Kind words from teammates and stakeholders.">
            <div className="grid md:grid-cols-2 gap-6">
                {TESTIMONIALS.map((t, i) => (
                    <div className="card p-6" key={i}>
                        <p className="text-slate-200">“{t.text}”</p>
                        <p className="mt-3 text-sm text-slate-400">— {t.name}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}

function Contact() {
    return (
        <Section id="contact" title="Contact" subtitle="Open to senior frontend roles and advanced UI engineering.">
            <div className="card p-6 md:p-8">
                <p className="text-slate-300">Email: <a href="mailto:riyazreengu@example.com" className="text-brand-400 hover:underline">riyazreengu@example.com</a></p>
                <p className="mt-2 text-slate-300">Location: Madurai, India</p>
                <div className="mt-4 flex gap-4">
                    <a href="https://github.com/" className="text-brand-400 hover:underline">GitHub</a>
                    <a href="https://www.linkedin.com/" className="text-brand-400 hover:underline">LinkedIn</a>
                </div>
            </div>
            <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Mohammed Riyaz Khan F</p>
        </Section>
    )
}

export default function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <Work />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
        </div>
    )
}
