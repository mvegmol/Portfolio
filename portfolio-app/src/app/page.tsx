'use client';

import Certifications from '../components/Certifications';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className='min-h-screen font-sans'>
            <a href="#main-content" className="skip-link">Saltar al contenido</a>
            <Header />
            <main id="main-content">
            <Hero />
            <About />
            <Experience />
            <Certifications />
            <Skills />
            <Projects />
            <Contact />
            </main>
            <Footer />
        </div>
    );
}
