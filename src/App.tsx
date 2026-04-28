/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, type ReactNode } from "react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  GraduationCap, 
  Users, 
  Trophy, 
  BookOpen, 
  Building2, 
  Microscope, 
  Globe, 
  Stethoscope, 
  Cpu, 
  Palmtree, 
  Briefcase, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Calendar,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const SectionHeading = ({ children, title, subtitle, light = false }: { children?: ReactNode, title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`font-serif text-3xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-nu-navy'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`max-w-2xl mx-auto text-lg ${light ? 'text-blue-100' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    {children}
  </div>
);

const ProgramCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
  >
    <div className="w-14 h-14 bg-nu-navy/5 text-nu-navy rounded-xl flex items-center justify-center mb-6">
      <Icon size={28} />
    </div>
    <h3 className="font-serif text-2xl font-bold mb-4 text-nu-navy">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
      {description}
    </p>
    <a href="#" className="inline-flex items-center text-nu-navy font-semibold hover:text-nu-gold transition-colors group">
      Learn More <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
    </a>
  </motion.div>
);

const TestimonialCard = ({ name, course, quote, image }: { name: string, course: string, quote: string, image: string }) => (
  <div className="bg-gray-50 p-8 rounded-3xl relative">
    <div className="flex items-center gap-1 text-nu-gold mb-6">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-xl italic text-gray-700 mb-8 leading-relaxed font-serif">
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover shadow-md" />
      <div>
        <h4 className="font-bold text-nu-navy">{name}</h4>
        <p className="text-sm text-gray-500">{course}</p>
      </div>
    </div>
  </div>
);

// --- Sections ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = [
    { category: "STEM", title: "Engineering", icon: Building2, desc: "Building the foundations of tomorrow with cutting-edge civil, electrical, and mechanical engineering programs." },
    { category: "STEM", title: "Architecture", icon: GraduationCap, desc: "Combining art and science to design sustainable and beautiful urban landscapes for the next generation." },
    { category: "Business", title: "Business Administration", icon: Briefcase, desc: "Developing future CEOs and entrepreneurs with global perspectives and strong ethical foundations." },
    { category: "Health", title: "Nursing", icon: Stethoscope, desc: "Providing world-class healthcare education focused on compassion, competence, and clinical excellence." },
    { category: "STEM", title: "IT & Computer Science", icon: Cpu, desc: "Leading the digital revolution through innovative software development, cybersecurity, and data science." },
    { category: "Arts", title: "Tourism & Hospitality", icon: Palmtree, desc: "Shaping leaders for the global tourism industry with a focus on Filipino hospitality and management." },
    { category: "Arts", title: "Education", icon: BookOpen, desc: "Empowering the educators of tomorrow with the skills and passion to transform lives across the nation." },
  ];

  const filteredPrograms = activeTab === "All" ? programs : programs.filter(p => p.category === activeTab);

  const stats = [
    { label: "Alumni", value: "50,000+" },
    { label: "Programs", value: "30+" },
    { label: "Excellence", value: "124 Years" },
    { label: "Top Passers", value: "100s" },
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative group">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpqPrNujs6hrNvTmcJsOZCXIt1T-rAgOKgQ&s" 
                alt="NU Logo" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-lg bg-white p-1 shadow-md group-hover:scale-110 transition-transform"
              />
            </div>
            <div className={`hidden md:block font-serif font-bold text-lg xl:text-xl ${scrolled ? 'text-nu-navy' : 'text-white'}`}>
              NATIONAL UNIVERSITY
              <span className="block text-[10px] tracking-widest font-sans uppercase font-medium">Manila</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {["Home", "Programs", "Admissions", "Campus Life", "About", "Contact"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '-')}`} 
                className={`text-sm font-semibold tracking-wide hover:text-nu-gold transition-colors ${
                  scrolled ? "text-gray-600" : "text-white"
                }`}
              >
                {link}
              </a>
            ))}
            <a 
              href="#admissions" 
              className="bg-nu-gold text-nu-navy px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-nu-navy shadow-lg transition-all"
            >
              APPLY NOW
            </a>
          </div>

          <button 
            className={`lg:hidden ${scrolled ? 'text-nu-navy' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center gap-8"
            >
              {["Home", "Programs", "Admissions", "Campus Life", "About", "Contact"].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif font-bold text-nu-navy hover:text-nu-gold"
                >
                  {link}
                </a>
              ))}
              <a 
                href="#admissions" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-nu-gold text-nu-navy px-12 py-4 rounded-full font-bold text-lg shadow-xl"
              >
                APPLY NOW
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-mesh">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {/* Animated decorative circles */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-96 h-96 border border-white/20 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/2 -right-40 w-[600px] h-[600px] border border-white/10 rounded-full"
          />
        </div>

        <div className="flex-grow flex items-center py-10 xl:py-20">
          <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-[1fr_1.3fr] gap-12 xl:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-nu-gold/20 text-nu-gold rounded-full text-[10px] xl:text-xs font-bold tracking-widest uppercase mb-6 xl:mb-8">
                Founded 1900 • First Private Non-Sectarian University
              </span>
              <h1 className="font-serif text-4xl xl:text-7xl 2xl:text-8xl leading-none text-white font-black mb-8 xl:mb-10">
                Your Future <br />
                <span className="text-nu-gold">Starts Here.</span>
              </h1>
              <p className="text-base xl:text-xl text-blue-100 mb-10 xl:mb-12 max-w-xl leading-relaxed">
                Join thousands of graduates shaping the nation from Manila to the world. Experience academic excellence and sports legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#programs" className="bg-nu-gold text-nu-navy px-8 py-4 xl:px-12 xl:py-6 rounded-full font-bold text-sm xl:text-lg shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                  Explore Programs <ArrowUpRight size={20} />
                </a>
                <a href="#contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 xl:px-12 xl:py-6 rounded-full font-bold text-sm xl:text-lg hover:bg-white hover:text-nu-navy transition-all flex items-center justify-center gap-2">
                  Schedule a Visit
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative group/hero"
            >
              <div className="relative">
                <div className="aspect-video max-h-[550px] xl:max-h-[650px] rounded-[48px] overflow-hidden shadow-3xl border-4 border-white/20 transform hover:scale-[1.02] transition-all duration-700 bg-nu-navy">
                   <img 
                    src="https://i.ytimg.com/vi/6VJrPJFkJk0/maxresdefault.jpg" 
                    alt="National University Manila Campus" 
                    className="w-full h-full object-cover opacity-95"
                  />
                </div>
                {/* Repositioned Badge to bottom-right for better visibility of image content */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 xl:p-10 rounded-[32px] shadow-4xl space-y-1 xl:space-y-2 z-30 border-b-8 border-nu-gold transform rotate-3 group-hover/hero:rotate-0 transition-transform duration-500">
                  <div className="text-3xl xl:text-6xl font-serif font-black text-nu-navy text-right">98%</div>
                  <div className="text-[10px] xl:text-sm font-bold text-gray-500 uppercase tracking-tighter text-right">PRC Board Passing Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar - Final Visibility Optimization */}
        <div className="w-full py-3 xl:py-6 bg-nu-navy/80 backdrop-blur-3xl border-t border-white/10 z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-row justify-between items-center gap-1 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group flex-1">
                  <div className="text-xs sm:text-base md:text-xl xl:text-3xl font-serif font-bold text-white leading-tight group-hover:text-nu-gold transition-colors">{stat.value}</div>
                  <div className="text-[6px] sm:text-[8px] xl:text-[10px] text-blue-100 uppercase tracking-widest font-bold mt-0.5 opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NU Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Excellence Through Legacy" 
            subtitle="For over a century, National University has been at the forefront of providing quality education that is accessible to all Filipinos."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "World-Class Faculty", text: "Learn from industry experts and researchers dedicated to your success." },
              { icon: Building2, title: "Modern Facilities", text: "Access high-tech labs, expansive libraries, and top-tier sports complexes." },
              { icon: Trophy, title: "Scholarships", text: "We believe in rewarding potential. Numerous financial aid options available." },
              { icon: Users, title: "Industry Linked", text: "Direct partnerships with Fortune 500 companies for internships and careers." },
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gray-50 text-nu-navy rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-nu-navy group-hover:text-white transition-all duration-300 shadow-sm">
                  <prop.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nu-navy">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section id="programs" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Find Your Passion" 
            subtitle="Our diverse range of programs are designed to equip you with the skills and mindset needed to excel in the 21st-century global economy."
          >
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["All", "STEM", "Business", "Health", "Arts"].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
                    activeTab === tab ? "bg-nu-navy text-white" : "bg-white text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </SectionHeading>

          <motion.div 
             layout
             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((program, i) => (
                <motion.div
                  key={program.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProgramCard 
                    icon={program.icon} 
                    title={program.title} 
                    description={program.desc} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-24 bg-nu-navy text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-nu-gold/5 skew-x-12 transform origin-top-right" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Embark on Your <br /> Journey
              </h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Apply Online", text: "Complete our digital application form in minutes. Secure and simple." },
                  { step: "02", title: "Submit Requirements", text: "Upload your academic credentials and necessary documents." },
                  { step: "03", title: "Interview & Exam", text: "A conversation with our faculty and a basic assessment." },
                  { step: "04", title: "Enroll Today", text: "Confirm your slot and start your transformation at NU Manila." },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-3xl font-serif font-black text-nu-gold opacity-50">{item.step}</div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-blue-100 max-w-md">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white text-nu-navy p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Upcoming Admissions Dates</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-nu-navy" size={20} />
                    <span className="font-semibold">Application Period</span>
                  </div>
                  <span className="font-bold text-nu-navy">Open Now</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-nu-navy" size={20} />
                    <span className="font-semibold">Entrance Exams</span>
                  </div>
                  <span className="font-bold text-nu-navy">May 15-20</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-nu-navy" size={20} />
                    <span className="font-semibold">Enrollment Deadline</span>
                  </div>
                  <span className="font-bold text-nu-navy">June 30</span>
                </div>
              </div>
              <div className="bg-nu-gold/10 border-2 border-dashed border-nu-gold rounded-2xl p-6 mb-10 text-center">
                <p className="text-nu-navy font-bold text-xl mb-1">Scholarships Available</p>
                <p className="text-sm text-gray-600">Up to 100% tuition coverage for qualified students. Limited slots!</p>
              </div>
              <button className="w-full bg-nu-navy text-white font-bold py-5 rounded-2xl text-xl shadow-lg hover:bg-nu-navy/90 transition-all">
                Start Your Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section id="campus-life" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Beyond the Classroom" 
            subtitle="At NU Manila, education is about the whole person. Our vibrant campus life provides endless opportunities for growth."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
              <img src="https://picsum.photos/800/800?random=1" alt="Campus Life" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-nu-navy/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">NU Bulldogs Legacy</h4>
                  <p className="text-blue-100">Dominating UAAP Sports Excellence</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden group">
              <img src="https://picsum.photos/600/600?random=2" alt="Student Orgs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden group">
              <img src="https://picsum.photos/600/600?random=3" alt="Library" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-2 rounded-3xl overflow-hidden relative group aspect-[2/1]">
              <img src="https://picsum.photos/1200/600?random=4" alt="Dormitories" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-nu-navy/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">Modern Dormitories</h4>
                  <p className="text-blue-100">Your second home in the heart of Manila</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading title="Student Success Stories" />
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Marco Santos" 
              course="BS Civil Engineering" 
              image="https://picsum.photos/100/100?random=5"
              quote="The industry partnerships at NU provided me with a direct path to a top engineering firm even before I graduated." 
            />
            <TestimonialCard 
              name="Isabel Dizon" 
              course="BS Nursing" 
              image="https://picsum.photos/100/100?random=6"
              quote="Our clinical rotations in specialized hospitals gave me the confidence I needed to top the board exams." 
            />
            <TestimonialCard 
              name="Rico Blanco" 
              course="BS Computer Science" 
              image="https://picsum.photos/100/100?random=7"
              quote="The hackathons and tech centers at NU are world-class. I've developed apps that are now used nationally." 
            />
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-nu-navy mb-4">News & Updates</h2>
              <p className="text-gray-600 text-lg">Keep up with the latest happenings at NU Manila.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-nu-navy font-bold hover:text-nu-gold transition-colors">
              View All News <ArrowUpRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "NU Achieves 100% Passing Rate in Board Exams", date: "April 20, 2024", img: "https://picsum.photos/600/400?random=11" },
              { title: "Bulldogs Clinch UAAP Basketball Championship", date: "December 15, 2023", img: "https://picsum.photos/600/400?random=12" },
              { title: "New AI Research Center Opens at sampaloc Campus", date: "January 10, 2024", img: "https://picsum.photos/600/400?random=13" },
            ].map((news, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <img src={news.img} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-nu-gold font-bold text-xs uppercase tracking-widest">{news.date}</span>
                  <h3 className="text-xl font-bold text-nu-navy mt-2 mb-4 leading-tight">{news.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">Learn more about how National University continues to lead in innovation and excellence...</p>
                  <a href="#" className="font-bold text-nu-navy hover:text-nu-gold text-sm group flex items-center">
                    Read Story <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-nu-navy text-white p-12">
              <h2 className="font-serif text-4xl font-bold mb-8">Connect With Us</h2>
              <p className="text-blue-100 mb-12 text-lg">Our admissions officers are ready to help you plan your future. Visit our campus or reach out today.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-nu-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-blue-100 text-sm">551 M.F. Jhocson St., Sampaloc, Manila, Philippines 1008</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-nu-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-blue-100 text-sm">+63 (2) 8712-1900 / 8743-7951</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-nu-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-blue-100 text-sm">admissions@national-u.edu.ph</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Social, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nu-gold hover:text-nu-navy transition-colors">
                    <Social size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-nu-navy mb-10">Quick Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-nu-navy outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-nu-navy outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase">Program of Interest</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-nu-navy outline-none appearance-none">
                    <option>Select a Program</option>
                    <option>Engineering</option>
                    <option>Architecture</option>
                    <option>Business & Accountancy</option>
                    <option>Nursing</option>
                    <option>IT & Computer Science</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-nu-navy outline-none resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-nu-gold text-nu-navy font-bold py-5 rounded-2xl text-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  Send Inquiry
                </button>
              </form>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-64 bg-gray-100 rounded-3xl overflow-hidden grayscale">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1214473854125!2d120.99268397584618!3d14.602758277322967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f807218659%3A0xc07cf3b2a26c483d!2sNational%20University!5e0!3m2!1sen!2sph!4v1714312345678!5m2!1sen!2sph" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-nu-navy text-white flex items-center justify-center font-bold text-lg rounded-lg">
                  NU
                </div>
                <div className="font-serif font-bold text-lg text-nu-navy leading-none">
                  NATIONAL<br />UNIVERSITY
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">
                Shaping the future of the nation through education and sports excellence since 1900.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Social, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-50 text-nu-navy flex items-center justify-center hover:bg-nu-navy hover:text-white transition-colors">
                    <Social size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-nu-navy mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#" className="hover:text-nu-gold transition-colors">Digital Enrollment</a></li>
                <li><a href="#" className="hover:text-nu-gold transition-colors">Scholarship Programs</a></li>
                <li><a href="#" className="hover:text-nu-gold transition-colors">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-nu-gold transition-colors">Library & Resources</a></li>
                <li><a href="#" className="hover:text-nu-gold transition-colors">Student Handbook</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-nu-navy mb-6">Our Campuses</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#" className="hover:text-nu-gold transition-colors">NU Manila (Main)</a></li>
                <li><a href="#" className="hover:text-nu-gold transition-colors">NU Nazareth School</a></li>
                <li><a href="#" className="hover:text-nu-gold transition-colors">NU Laguna</a></li>
                <li><a href="#" className="hover:text-nu-gold transition-colors">NU MOA</a></li>
                <li><a href="#" className="hover:text-nu-gold transition-colors">NU Fairview</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-nu-navy mb-6">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-6">Subscribe to get the latest updates on admissions and university news.</p>
              <div className="relative">
                <input type="email" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:ring-2 focus:ring-nu-navy" placeholder="Email Address" />
                <button className="absolute right-2 top-2 bottom-2 bg-nu-navy text-white px-4 rounded-lg text-sm font-bold">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 National University Manila. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-nu-navy">Privacy Policy</a>
              <a href="#" className="hover:text-nu-navy">Terms of Service</a>
              <a href="#" className="hover:text-nu-navy">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

