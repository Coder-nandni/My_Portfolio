import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiDownload,
  FiMail,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiExternalLink,
  FiChevronRight,
  FiFilter,
  FiArrowLeft,
} from "react-icons/fi";

import emailjs from "@emailjs/browser";

import img1 from "./assets/img1.jpeg";
import resumePdf from "./assets/Anjali_CV.pdf";

// ==========================================
// DATA CONFIGURATION
// ==========================================


const portfolioData = {
  designer: {
    name: "ANJALI",
    brand: "My Portfolio",
    title: "Fashion Designer & Creative",
    tagline:
      "Designing ideas into wearable art, rooted in individuality and timeless craftsmanship.",
    education: "B.Voc Fashion Designing, Punjab University",
    location: "Punjab, India",
    email: "anjali987211.n@gmail.com",
    instagram: "https://www.instagram.com/des.igneranjali?stkn=MW5oaXFwaDI5OXFzbw==",
    linkedin: "https://www.linkedin.com/in/anjali-kumari-0b10623ab?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    resumeLink: resumePdf,
  },
  skills: [
    { name: "Fashion Designing", icon: "✨" },
    { name: "Fashion Illustration", icon: "🎨" },
    { name: "Garment Construction", icon: "🧵" },
    { name: "Pattern Making", icon: "📐" },
    { name: "Draping", icon: "👗" },
    { name: "Embroidery", icon: "🪡" },
    { name: "Printing Techniques", icon: "🖨️" },
    { name: "Textile & Fabric Knowledge", icon: "🧶" },
    { name: "Fashion Styling", icon: "✨" },
    { name: "Visual Merchandising", icon: "🏛️" },
    { name: "CorelDRAW", icon: "💻" },
    { name: "Canva", icon: "🎨" }
  ],
  experience: [
    {
      role: "Assistant Merchandiser",
      period: "Summer Industrial Training",
      description: "Handled production samples, garment workflow coordination, and quality assessment."
    },
    {
      role: "Tie & Dyeing Specialist",
      period: "V.K. Thapar Industry",
      description: "Created intricate pigment samples, tie-dye patterns, and color experiments."
    },
    {
      role: "Industrial Training Associate",
      period: "Sarpanch Industry",
      description: "Trained in industrial garment finishing, quality control, and retail packing."
    }
  ],
  // ==========================================
  // HOW TO ADD NEW PROJECTS:
  // Copy any block below, give it a unique id, and fill in your details.
  // ==========================================
  projects: [
    {
      id: "garment-design",
      title: "Street Style",
      category: "Garment Design",
      shortDesc:
        "A chic leopard-print co-ord set with contrast piping, blending bold patterns with modern style.",

      images: [
        "/src/assets/img1.jpeg",
        "/src/assets/garment1.jpeg",
      ],

      concept:
        "Inspired by contemporary street style, this coordinated outfit combines bold animal prints with clean tailoring for a confident, modern look.",
      materials:
        "Animal-print fabric, contrast white piping, matching thread, and finishing trims.",
      techniques:
        "Pattern making, fabric cutting, garment stitching, piping application, and precision finishing.",
      role: "Fashion Design & Garment Development — Created a coordinated two-piece outfit featuring a statement animal print and contrasting details.",
      outcome:
        "Exhibited at university graduation showcase with high acclaim.",
    },
    {
      id: "garment-design",
      title: "Fire Inspire Dress",
      category: "Garment Design",
      shortDesc:
        "A bold, fire-inspired fashion concept featuring dramatic ruffles and red LED lighting. Blending creativity with futuristic runway aesthetics.",

      images: [
        "/src/assets/light1.jpeg",
        "/src/assets/light2.jpeg",
        "/src/assets/light3.jpeg",
        "/src/assets/light4.jpeg",
        "/src/assets/light5.jpeg",
        "/src/assets/light6.jpeg",
        "/src/assets/light7.jpeg",
      ],

      concept:
        "Inspired by the power and beauty of fire, this avant-garde design represents passion, energy, and transformation through dramatic silhouettes and illuminated details.",
      materials:
        "Lightweight fabric, layered ruffles, decorative trims, and red LED light strips for a glowing flame-inspired effect.",
      techniques:
        "Creative fashion illustration, concept development, layered ruffle detailing, garment construction, and LED light integration.",
      role: "Original Concept & Design by Anjali — developed a statement fashion outfit combining fire-inspired aesthetics with illuminated details to create a bold, futuristic runway look.",
      outcome:
        "Featured in regional fashion publications.",
    },

    {
      id: "painting",
      title: "Madhubani Inspired Printed Kurti",
      category: "Printing",
      shortDesc:
        "A vibrant printed kurti featuring colourful bird motifs and intricate leafy patterns, blending traditional Indian folk-art inspiration with contemporary ethnic wear.",

      images: [
        "/src/assets/p1.jpeg",
        "/src/assets/p2.jpeg",
        "/src/assets/p3.jpeg",

      ],

      concept:
        "Inspired by traditional Indian folk-art motifs and colourful nature-inspired patterns.",
      materials:
        "Light-coloured cotton fabric.",
      techniques:
        "Print design, motif placement, colour coordination, and garment detailing.",
      role: "Designed and styled a printed ethnic kurti combining traditional-inspired artwork with a modern silhouette.",
      outcome:
        "A lightweight luxury resort capsule collection.",
    },

    {
      id: "mood-board",
      title: "Fire Inspire Dress",
      category: "Mood Board",
      shortDesc:
        "Ready-to-wear streetwear featuring asymmetrical cuts, utility tailoring, and sharp silhouettes.",

      images: [
        "/src/assets/mood1.jpeg",
        "/src/assets/mood2.jpeg",
        "/src/assets/mood3.jpeg",
        "/src/assets/mood4.jpeg",
        "/src/assets/mood5.jpeg",
        "/src/assets/mood6.jpeg",

      ],

      concept:
        "Exploring fashion inspiration through curated mood boards that communicate design themes, colour stories, textures, and the overall vision behind each collection.",
      materials:
        "Inspiration images, colour palettes, fabric textures, prints, patterns, and visual references.",
      techniques:
        "Theme development, visual research, colour coordination, image curation, and creative layout composition.",
      role: "Fashion Design & Concept Development — Created mood boards to establish design direction, explore visual inspiration, and communicate garment concepts before the design process.",
      outcome:
        "Featured in regional fashion publications.",
    },


    {
      id: "embroidery",
      title: "Hand Embroidery Samples",
      category: "Embroidery",
      shortDesc:
        "A collection of embroidery samples showcasing colourful threadwork and decorative stitching. Highlighting creativity and hands-on textile skills.",

      images: [
        "/src/assets/emb1.jpeg",
        "/src/assets/emb2.jpeg",
        "/src/assets/emb3.jpeg",
        "/src/assets/emb4.jpeg",
        "/src/assets/emb5.jpeg",
        "/src/assets/emb6.jpeg",
        "/src/assets/emb7.jpeg",
        "/src/assets/emb8.jpeg",
        "/src/assets/emb9.jpeg",
        "/src/assets/emb10.jpeg",
        "/src/assets/emb11.jpeg",
        "/src/assets/emb12.jpeg",
        "/src/assets/emb13.jpeg",
        "/src/assets/emb14.jpeg",
        "/src/assets/emb15.jpeg",
        "/src/assets/emb16.jpeg",
        "/src/assets/emb17.jpeg",
        "/src/assets/emb18.jpeg",
        "/src/assets/emb19.jpeg",
        "/src/assets/emb20.jpeg",
        "/src/assets/emb21.jpeg",
        "/src/assets/emb22.jpeg",

      ],

      concept:
        "A collection of embroidery and surface ornamentation samples showcasing creativity, traditional craftsmanship, decorative patterns, and hands-on textile exploration.",
      materials:
        "Fabric swatches, embroidery threads, needles, and decorative materials used for different embroidery techniques.",
      techniques:
        "Hand embroidery, thread work, decorative stitching, motif development, and surface embellishment.",
      role: "Fashion Design Student — Practiced and explored different embroidery techniques, developing practical skills in textile decoration, colour combinations, and creative surface design.",
      outcome:
        "Praised for indigenous craft preservation.",
    },

    {
      id: "blue-monochrome",
      title: "Blue monochrome Window Display",
      category: "Visual Merchandising",
      shortDesc:
        "A creative window display featuring denim-inspired outfits, blue-toned décor, and a statement butterfly installation, showcasing visual merchandising and styling skills.",

      images: [
        "/src/assets/mono1.jpeg",
        "/src/assets/mono2.jpeg",
        "/src/assets/mono3.jpeg",
        "/src/assets/mono4.jpeg",
      ],

      concept:
        "A monochromatic blue theme inspired by denim fashion, combining creative décor with coordinated outfit styling.",
      materials:
        "Denim fabric, blue decorative leaves, butterfly installation, mannequins, fairy lights, and display props.",
      techniques:
        "Visual merchandising, colour coordination, mannequin styling, creative prop arrangement, and window display design.",
      role: "Window Display Designer — Created a coordinated fashion display highlighting denim outfits through thematic styling and eye-catching visual elements.",
      outcome:
        "Boosted foot traffic and customer engagement by 35%.",
    },
    {
      id: "window-display",
      title: "90s Western Cowboy Window Display",
      category: "Visual Merchandising",
      shortDesc:
        "A rustic Western-themed window display featuring cowboy styling, farmhouse elements, and creative props to create an authentic country-inspired fashion setup.",

      images: [
        "/src/assets/90s1.jpeg",
        "/src/assets/90s4.jpeg",
        "/src/assets/90s3.jpeg",
        "/src/assets/90s2.jpeg",
      ],

      concept:
        "Inspired by Western cowboy culture, rustic farm aesthetics, and country-style fashion.",
      materials:
        "Checkered fabric, hay, wooden props, wagon wheels, cowboy hats, and handmade decorative elements.",
      techniques:
        "Visual merchandising, mannequin styling, prop arrangement, thematic decoration, and creative window dressing.",
      role: "Window Display Designer — Created a themed fashion display combining Western-inspired outfits with rustic décor for an engaging visual presentation.",
      outcome:
        "Boosted foot traffic and customer engagement by 35%.",
    },

    {
      id: "digital-illustration",
      title: "Digital Illustration",
      category: "Illustration",
      shortDesc:
        "Digital garment illustrations featuring creative designs, colour rendering, and front-and-back views. Bringing fashion concepts to life through digital design.",
      images: [
        "/src/assets/dig1.jpeg",
        "/src/assets/dig2.jpeg",
        "/src/assets/dig3.jpeg",
        "/src/assets/dig4.jpeg",
        "/src/assets/dig5.jpeg",
        "/src/assets/dig6.jpeg",
        "/src/assets/dig7.jpeg",
        "/src/assets/dig8.jpeg",
        "/src/assets/dig9.jpeg",
        "/src/assets/dig10.jpeg",
        "/src/assets/dig11.jpeg",
      ],
      concept:
        "Transforming creative fashion ideas into digital garment illustrations, showcasing outfit silhouettes, colour combinations, and front-and-back design details.",
      materials:
        "Digital illustration software, drawing tablet or computer, digital brushes, and colour palettes.",
      techniques:
        "Digital sketching, colour rendering, garment detailing and fashion illustration.",
      role: "Digital Fashion Illustrator",
      outcome:
        "A curated collection of digital fashion concepts showcasing contemporary design development.",
    },
    {
      id: "hand-illustration",
      title: "Hand Illustration",
      category: "Illustration",
      shortDesc:
        "Original fashion sketches showcasing creative silhouettes, garment details, and colour combinations. Expressing my design ideas through hand illustration.",
      images: [
        "/src/assets/ill1.jpeg",
        "/src/assets/ill2.jpeg",
        "/src/assets/ill3.jpeg",
        "/src/assets/ill4.jpeg",
        "/src/assets/ill5.jpeg",
        "/src/assets/ill6.jpeg",
        "/src/assets/ill7.jpeg",
        "/src/assets/ill8.jpeg",
      ],
      concept:
        "Exploring creative fashion ideas through hand-drawn illustrations, showcasing unique silhouettes, garment details, and contemporary styling.",
      materials:
        "Drawing paper, pencils, fine-liner pens, colour pencils, and watercolour or markers for rendering.",
      techniques:
        "Hand sketching, fashion figure drawing, garment detailing, colour rendering, and silhouette development.",
      role: "Fashion Illustrator — Developed original fashion illustrations demonstrating creativity, colour coordination, garment design, and personal artistic expression.",
      outcome:
        "Foundation blueprint for 12 custom bridal outfits.",
    },
  ],

  videoShowcase: [
    {
      id: "collection-film",
      title: "Collection Film",
      subtitle: "A visual story of silhouettes, textures & movement",
      category: "FASHION FILM",
      src: "/src/assets/videos/collection-film.mp4",
    },

    {
      id: "design-process",
      title: "Design Process",
      subtitle: "From concept & fabric to finished garment",
      category: "BEHIND THE DESIGN",
      src: "/src/assets/videos/design-process.mp4",
    },

    {
      id: "editorial-motion",
      title: "Editorial Motion",
      subtitle: "A cinematic presentation of selected looks",
      category: "EDITORIAL",
      src: "/src/assets/videos/editorial-motion.mp4",
    },
  ],

  editorialGallery: [
    {
      title: "Bespoke Evening Gown",
      type: "Dress Design",
      img: "/src/assets/editorial/bespoke-evening-gown.jpg",
    },

    {
      title: "Zardozi Handwork",
      type: "Embroidery",
      img: "/src/assets/editorial/zardozi-handwork.jpg",
    },

    {
      title: "Bridal Illustration",
      type: "Fashion Illustration",
      img: "/src/assets/editorial/bridal-illustration.jpg",
    },

    {
      title: "Window Styling",
      type: "Visual Merchandising",
      img: "/src/assets/editorial/window-styling.jpg",
    },

    {
      title: "Silk Drape Detail",
      type: "Garment Details",
      img: "/src/assets/editorial/silk-drape-detail.jpg",
    },
  ],

  processSteps: [
    {
      num: "01",
      title: "Inspiration",
      desc: "Gathering deep references from architecture, nature, and cultural heritage.",
    },
    {
      num: "02",
      title: "Concept",
      desc: "Translating abstract thoughts into structured mood boards and color stories.",
    },
    {
      num: "03",
      title: "Design",
      desc: "Drafting precise patterns, experimenting with draping, and sourcing luxury fabrics.",
    },
    {
      num: "04",
      title: "Creation",
      desc: "Meticulous garment construction, fine embroidery, and final fitting perfection.",
    },
  ],
  
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function App() {
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [mousePos, setMousePos] = useState({
    x: -100,
    y: -100,
  });

  const [cursorText, setCursorText] = useState("");
  const [cursorHovered, setCursorHovered] = useState(false);

  const { scrollYProgress } = useScroll();

  // ================================
  // CONTACT FORM
  // ================================
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setFormStatus("");

    try {
      await emailjs.send(
        "service_nwo08bb",
        "template_uvwxizi",
        {
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        },
        "3IGrEj4Wl5rIzNzMp"
      );

      setFormStatus(
        "Thank you! Your message has been sent successfully."
      );

      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setFormStatus(
        "Sorry, your message could not be sent. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  // ================================
  // EFFECT
  // ================================
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const categories = ["ALL", "MOOD BOARD", "GARMENT DESIGN", "EMBROIDERY", "PRINTING", "VISUAL MERCHANDISING", "ILLUSTRATION"];

  const filteredProjects = activeCategory === "ALL"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category.toUpperCase() === activeCategory);

  const scrollTo = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1A1A1A] font-sans selection:bg-[#E8C5C8] selection:text-[#1A1A1A] relative cursor-auto md:cursor-none">

      {/* 1. LOADING SCREEN INTRO */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#1A1A1A] text-[#FAF7F2] flex flex-col items-center justify-center p-6"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="font-serif text-4xl md:text-6xl tracking-[0.3em] font-light text-center"
            >
              My Portfolio
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 text-xs uppercase tracking-[0.5em] text-[#C5A880]"
            >
              Fashion &bull; Creativity &bull; Identity
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CUSTOM CURSOR (Desktop Only) */}
      <motion.div
        className="hidden md:flex fixed top-0 left-0 pointer-events-none z-50 items-center justify-center rounded-full mix-blend-difference bg-white"
        animate={{
          x: mousePos.x - (cursorHovered ? 35 : 12),
          y: mousePos.y - (cursorHovered ? 35 : 12),
          width: cursorHovered ? 70 : 24,
          height: cursorHovered ? 70 : 24,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      >
        {cursorText && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-black">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C5A880] z-40 origin-left"
      />

      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-[#FAF7F2]/80 backdrop-blur-md border-b border-[#E8DCC4]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollTo('hero')}>
            <span className="font-serif text-2xl tracking-widest font-semibold">ANJALI</span>
            <span className="block text-[9px] tracking-[0.4em] uppercase text-[#7A736B]">Janki Creations</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium">
            <button onClick={() => scrollTo('about')} className="hover:text-[#C5A880] transition-colors">About</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-[#C5A880] transition-colors">Skills</button>
            <button onClick={() => scrollTo('journey')} className="hover:text-[#C5A880] transition-colors">Journey</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-[#C5A880] transition-colors">Projects</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-[#C5A880] transition-colors">Editorial</button>
            <button onClick={() => scrollTo('brand')} className="hover:text-[#C5A880] transition-colors">Brand</button>
            <button onClick={() => scrollTo('process')} className="hover:text-[#C5A880] transition-colors">Process</button>
            <button onClick={() => scrollTo('resume')} className="hover:text-[#C5A880] transition-colors">CV</button>
            <button
              onClick={() => scrollTo('contact')}
              className="border border-[#1A1A1A] px-5 py-2.5 hover:bg-[#1A1A1A] hover:text-[#FAF7F2] transition-all"
            >
              Contact
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setNavOpen(!navOpen)} className="text-2xl focus:outline-none">
              {navOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DCC4] px-6 py-8 space-y-4 text-center font-serif text-lg"
            >
              <button onClick={() => scrollTo('about')} className="block w-full py-2">About</button>
              <button onClick={() => scrollTo('skills')} className="block w-full py-2">Skills</button>
              <button onClick={() => scrollTo('journey')} className="block w-full py-2">Journey</button>
              <button onClick={() => scrollTo('projects')} className="block w-full py-2">Projects</button>
              <button onClick={() => scrollTo('gallery')} className="block w-full py-2">Editorial</button>
              <button onClick={() => scrollTo('brand')} className="block w-full py-2">Janki Creations</button>
              <button onClick={() => scrollTo('process')} className="block w-full py-2">Process</button>
              <button onClick={() => scrollTo('resume')} className="block w-full py-2">Resume</button>
              <button onClick={() => scrollTo('contact')} className="block w-full py-2 text-[#C5A880]">Contact</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="hero" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B] bg-[#F2ECE1] px-4 py-2 rounded-full">
              My Portfolio
            </span>
            <h1
  className="font-serif text-6xl md:text-8xl font-light tracking-wider leading-none"
  style={{ color: "#8C7A6B" }}
>
  ANJALI
</h1>
            <p className="text-xl md:text-2xl font-serif italic text-[#59524C] tracking-wide">
              Fashion Designer & Creative
            </p>
            <p className="text-[#685F56] max-w-xl mx-auto lg:mx-0 text-base md:text-lg font-light leading-relaxed">
              {portfolioData.designer.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                onMouseEnter={() => { setCursorHovered(true); setCursorText("EXPLORE"); }}
                onMouseLeave={() => { setCursorHovered(false); setCursorText(""); }}
                className="w-full sm:w-auto bg-[#1A1A1A] text-[#FAF7F2] px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#333] transition-all flex items-center justify-center space-x-3 group"
              >
                <span>Explore My Work</span>
                <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('brand')}
                onMouseEnter={() => { setCursorHovered(true); setCursorText("BRAND"); }}
                onMouseLeave={() => { setCursorHovered(false); setCursorText(""); }}
                className="w-full sm:w-auto border border-[#1A1A1A] px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#1A1A1A] hover:text-[#FAF7F2] transition-all"
              >
                View Brand
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div
              onMouseEnter={() => { setCursorHovered(true); setCursorText("EDIT"); }}
              onMouseLeave={() => { setCursorHovered(false); setCursorText(""); }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden shadow-2xl rounded-sm border-8 border-white group"
            >
              <img
                src="\src\assets\img1.jpeg"
                alt="Anjali Fashion Design"
                className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition-transform
                duration-[1200ms]
              "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                <span className="text-[#FAF7F2] font-serif tracking-[0.3em] text-xs uppercase">
                  JANKI CREATIONS
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-28 px-6 bg-[#F5EFE6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div
              onMouseEnter={() => { setCursorHovered(true); setCursorText("ANJALI"); }}
              onMouseLeave={() => { setCursorHovered(false); setCursorText(""); }}
              className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src="\src\assets\me.jpeg"
                alt="Anjali Portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-6"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B]">Biography</span>
           <h2
  className="font-serif text-4xl md:text-5xl font-light"
  style={{ color: "#59524C" }}
>
  About Me
</h2>
            <p className="text-[#59524C] leading-relaxed text-lg font-light">
              My name is Anjali. I have recently completed my graduation in Fashion Designing. I am passionate about fashion design, garment construction, creative development, styling and experimenting with new ideas. I enjoy transforming concepts into wearable designs while paying attention to detail, craftsmanship and individuality.
            </p>
            <div className="pt-4 border-t border-[#E2D6C5] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-serif text-base font-medium text-[#1A1A1A]">Education</h4>
                <p className="text-xs text-[#685F56] mt-1">B.Voc Fashion Designing</p>
              </div>
              <div>
                <h4 className="font-serif text-base font-medium text-[#1A1A1A]">University</h4>
                <p className="text-xs text-[#685F56] mt-1">Punjab University</p>
              </div>
              <div>
                <h4 className="font-serif text-base font-medium text-[#1A1A1A]">Location</h4>
                <p className="text-xs text-[#685F56] mt-1">{portfolioData.designer.location}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B]">Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">My Skills</h2>
          <p className="text-[#685F56]">A curated blend of technical mastery, textile knowledge, and artistic vision.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, rotate: 1 }}
              onMouseEnter={() => { setCursorHovered(true); setCursorText("SKILL"); }}
              onMouseLeave={() => { setCursorHovered(false); setCursorText(""); }}
              className="bg-white p-6 border border-[#E8DCC4] rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="text-2xl mb-4">{skill.icon}</div>
              <h3 className="font-serif text-lg font-medium text-[#1A1A1A] group-hover:text-[#C5A880] transition-colors">{skill.name}</h3>
              <span className="mt-4 text-[9px] tracking-[0.3em] uppercase text-[#8C7A6B]">Verified Expertise</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE TIMELINE */}
      <section id="journey" className="py-28 px-6 bg-[#FAF7F2] border-t border-b border-[#E8DCC4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B]">Background</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light">My Journey</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-7 before:w-[2px] before:bg-[#E8DCC4]">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start space-x-8 pl-4"
              >
                <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-[#FAF7F2] flex items-center justify-center text-xs font-serif z-10 shrink-0 mt-1 shadow-md">
                  0{index + 1}
                </div>
                <div className="bg-white p-8 border border-[#E8DCC4] rounded-sm shadow-sm flex-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold">{exp.period}</span>
                  <h3 className="font-serif text-2xl font-medium mt-1 text-[#1A1A1A]">{exp.role}</h3>
                  <p className="text-[#685F56] mt-3 font-light leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROJECTS GALLERY (MOST IMPORTANT) */}
      <section id="projects" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B]">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">Selected Work</h2>
          <p className="text-[#685F56]">Explore original garments, textile prints, embroidery, and design collections.</p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] transition-all rounded-full border ${activeCategory === cat
                  ? "bg-[#1A1A1A] text-[#FAF7F2] border-[#1A1A1A]"
                  : "bg-white text-[#59524C] border-[#E8DCC4] hover:border-[#1A1A1A]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => { setCursorHovered(true); setCursorText("VIEW"); }}
                onMouseLeave={() => { setCursorHovered(false); setCursorText(""); }}
                className="group cursor-pointer bg-white border border-[#E8DCC4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[#FAF7F2] text-xs uppercase tracking-[0.3em] font-medium border-b border-[#FAF7F2] pb-1">
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-2xl font-medium text-[#1A1A1A] group-hover:text-[#C5A880] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#685F56] text-sm font-light line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* PROJECT DETAIL FULL-SCREEN MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#FAF7F2] w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl border border-[#E8DCC4] relative p-8 md:p-14"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-xl text-[#1A1A1A] hover:text-[#C5A880] transition-colors flex items-center space-x-2 bg-white px-4 py-2 border border-[#E8DCC4]"
              >
                <FiArrowLeft />
                <span className="text-[10px] tracking-widest uppercase">Back to Projects</span>
              </button>

              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-semibold">
                {selectedProject.category}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light mt-2 text-[#1A1A1A]">
                {selectedProject.title}
              </h2>
              <p className="text-[#685F56] text-base md:text-lg mt-3 font-light max-w-3xl">
                {selectedProject.shortDesc}
              </p>

              {/* Multiple Images Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-sm overflow-hidden border border-[#E8DCC4] shadow-md">
                    <img src={img} alt={`${selectedProject.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#E8DCC4] pt-10 text-sm">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#1A1A1A]">Concept</h4>
                    <p className="text-[#685F56] mt-1 font-light leading-relaxed">{selectedProject.concept}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#1A1A1A]">Materials & Fabrics</h4>
                    <p className="text-[#685F56] mt-1 font-light leading-relaxed">{selectedProject.materials}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#1A1A1A]">Techniques Used</h4>
                    <p className="text-[#685F56] mt-1 font-light leading-relaxed">{selectedProject.techniques}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#1A1A1A]">Role & Outcome</h4>
                    <p className="text-[#685F56] mt-1 font-light leading-relaxed">{selectedProject.role} — {selectedProject.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#1A1A1A] text-[#FAF7F2] px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-[#333] transition-all"
                >
                  Close Project View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. EDITORIAL PARALLAX GALLERY */}
      <section id="gallery" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B]">Magazine Preview</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">Editorial Gallery</h2>
          <p className="text-[#685F56]">Dress designs, embroidery detail work, fashion illustrations, and mood boards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {portfolioData.editorialGallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => { setCursorHovered(true); setCursorText("ZOOM"); }}
              onMouseLeave={() => { setCursorHovered(false); setCursorText(""); }}
              className={`relative overflow-hidden group rounded-sm border border-[#E8DCC4] shadow-sm ${index === 0 ? "md:col-span-2 md:row-span-2" :
                  index === 3 ? "md:col-span-2 md:row-span-1" : "col-span-1 row-span-1"
                }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#E8C5C8] font-semibold">{item.type}</span>
                <h4 className="font-serif text-xl text-white mt-1">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. JANKI CREATIONS BRAND SECTION */}

      <section
        id="brand"
        className="py-36 px-6 bg-[#1A1A1A] text-[#FAF7F2] text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="src/assets/boutique1.jpeg"
            alt="Janki Creations"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">

          {/* Coming Soon Label */}
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880]">
            Coming Soon
          </span>

          {/* Brand Name */}
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-wider">
            JANKI CREATIONS
          </h2>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-serif italic text-[#D4C5B9]">
            “Designed with imagination. Created with identity.”
          </p>

          {/* Brand Description */}
          <p className="text-[#A89F96] max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
            Janki Creations is an upcoming fashion label envisioned with a focus
            on thoughtful design, craftsmanship, individuality and contemporary
            expression.
          </p>

          {/* Coming Soon Message */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-3 border border-[#C5A880]/40 px-8 py-4">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>

              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880]">
                The Label Is Coming Soon
              </span>
            </div>
          </div>

          {/* Small Closing Text */}
          <p className="text-xs uppercase tracking-[0.25em] text-[#756D65] pt-3">
            A new expression of fashion is taking shape.
          </p>

        </div>
      </section>

      {/* 9. CREATIVE PROCESS */}
      <section id="process" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B]">Methodology</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">Creative Process</h2>
          <p className="text-[#685F56]">Four deliberate stages of fashion realization.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 border border-[#E8DCC4] rounded-sm shadow-sm space-y-4"
            >
              <span className="font-serif text-3xl text-[#C5A880] font-light">{step.num}</span>
              <h3 className="font-serif text-2xl font-medium text-[#1A1A1A]">{step.title}</h3>
              <p className="text-[#685F56] text-sm font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. RESUME SECTION */}
      <section id="resume" className="py-24 px-6 bg-[#F5EFE6] text-center">
        <div className="max-w-3xl mx-auto space-y-6">

          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B]">
            Curriculum Vitae
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-black">
            My Resume
          </h2>

          <p className="text-[#685F56] font-light max-w-xl mx-auto">
            Explore my education, technical proficiencies, industrial training,
            and fashion design portfolio.
          </p>

          <div className="pt-4">
            <a
              href={portfolioData.designer.resumeLink}
              download="Anjali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => {
                setCursorHovered(true);
                setCursorText("DOWNLOAD");
              }}
              onMouseLeave={() => {
                setCursorHovered(false);
                setCursorText("");
              }}
              className="inline-flex items-center space-x-3 bg-[#1A1A1A] text-[#FAF7F2] px-9 py-4 text-xs uppercase tracking-[0.25em] hover:bg-[#333] transition-all shadow-md"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </div>

        </div>
      </section>

      {/* 11. CONTACT SECTION */}
      <section id="contact" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8C7A6B]">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">Lets Create Something Beautiful</h2>
            <p className="text-[#685F56] font-light leading-relaxed">
             Looking for an opportunity to grow, create, and contribute in the fashion industry. I’m open to professional opportunities where I can apply my skills in fashion design, garment development, illustration, embroidery, printing, and visual merchandising.
            </p>

            <div className="space-y-4 pt-4 text-sm">
              <div className="flex items-center space-x-4">
                <FiMail className="text-lg text-[#C5A880]" />
                <span className="text-[#1A1A1A]">{portfolioData.designer.email}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FiMapPin className="text-lg text-[#C5A880]" />
                <span className="text-[#1A1A1A]">{portfolioData.designer.location}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FiInstagram className="text-lg text-[#C5A880]" />
                <a href={portfolioData.designer.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram Profile</a>
              </div>
              <div className="flex items-center space-x-4">
                <FiLinkedin className="text-lg text-[#C5A880]" />
                <a href={portfolioData.designer.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-14 border border-[#E8DCC4] rounded-sm shadow-sm">
            <form
  onSubmit={handleContactSubmit}
  className="space-y-6"
>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-[#FAF7F2] border border-[#E8DCC4] px-4 py-3.5 text-sm focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-[#FAF7F2] border border-[#E8DCC4] px-4 py-3.5 text-sm focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>
              <div className="flex items-center space-x-4">
  <span className="text-lg text-[#C5A880]">☎</span>

  <div className="flex flex-col gap-1">
    <a href="tel:9530591248" className="hover:underline">
      +91 95305 91248
    </a>

    <a href="tel:8198837746" className="hover:underline">
      +91 81988 37746
    </a>
  </div>
</div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-[#FAF7F2] border border-[#E8DCC4] px-4 py-3.5 text-sm focus:outline-none focus:border-[#1A1A1A]"
                ></textarea>
              </div>
              <button
  type="submit"
  disabled={isSending}
  className="w-full bg-[#1A1A1A] text-[#FAF7F2] py-4 text-xs uppercase tracking-[0.25em] hover:bg-[#333] transition-all disabled:opacity-60"
>
  {isSending ? "Sending..." : "Send Message"}
</button>
              {formStatus && (
                <p className="text-center text-sm text-[#59524C] pt-2 font-serif italic">{formStatus}</p>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#1A1A1A] text-[#FAF7F2] py-20 px-6 border-t border-[#333]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          <div className="space-y-2">
            <h3 className="font-serif text-3xl tracking-widest">JANKI CREATIONS</h3>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#A89F96]">Fashion Designer & Creative</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.25em] text-[#A89F96]">
            <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">Skills</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-[#C5A880] transition-colors">Editorial</button>
            <button onClick={() => scrollTo('films')} className="hover:text-[#C5A880] transition-colors">  Films</button>
            <button onClick={() => scrollTo('brand')} className="hover:text-[#C5A880] transition-colors"> Brand</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>

          <div className="flex space-x-6 text-xl">
            <a href={portfolioData.designer.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors"><FiInstagram /></a>
            <a href={portfolioData.designer.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors"><FiLinkedin /></a>
            <a href={`mailto:${portfolioData.designer.email}`} className="hover:text-[#C5A880] transition-colors"><FiMail /></a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#333] text-center text-xs text-[#80766E] tracking-wider">
          &copy; 2026 Janki Creations. All Rights Reserved. Designed for Anjali.
        </div>
      </footer>

    </div>
  );
}