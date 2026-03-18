import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Star,
  CheckCircle,
  Mail,
  Send,
  ArrowRight,
  BookMarked,
  Smile,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Soft pastel palette (used throughout):
// Yellow:   #F9E87B (accent), #FFFBEB / #FEF9E6 (bg tints)
// Mint:     #B5EAD7
// Pink:     #FECDD3
// Lavender: #E9D5FF
// Peach:    #FED7AA

export function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        studentGrade: "",
        message: ""
      });
    }, 5000);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FFFEF9]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFEF9]/85 backdrop-blur-xl border-b border-[#F9E87B]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <div>
                <div className="text-gray-900 text-lg" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>Jessica's Learning Lounge</div>
                <div className="text-xs text-gray-500 -mt-1">Math Tutoring • 6th–12th Grade</div>
              </div>
            </div>

            <Button 
              onClick={scrollToContact}
              className="bg-[#F9E87B] text-gray-900 hover:bg-[#F5DF60] rounded-full px-6 shadow-md hover:shadow-lg transition-all border border-[#EDD84A]/30"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
        {/* Soft background blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#F9E87B] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FECDD3] rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left side */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block px-4 py-2 bg-[#B5EAD7]/30 rounded-full border-2 border-[#B5EAD7] rotate-[-1deg]">
                <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>Pre-Algebra → AP Calculus</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl text-gray-900 leading-[1.1]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
                Math tutoring<br/>
                that doesn't feel<br/>
                like <span className="relative inline-block">
                  <span className="relative z-10 italic">homework</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="#F9E87B" strokeWidth="5" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                I'm Jessica. I make math click for middle & high school students who need more than just "here's the formula." 
                Think: your cool tutor who <i>actually</i> gets it.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-[#F9E87B] text-gray-900 hover:bg-[#F5DF60] rounded-full px-8 text-lg shadow-md hover:shadow-lg transition-all border border-[#EDD84A]/30"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="ghost"
                  className="text-lg rounded-full border-2 border-gray-300 hover:border-gray-400"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  <a href="#about">More About Me →</a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#F9E87B] border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-gray-600">100+ students</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C842] text-[#F5C842]" />
                  ))}
                  <span className="text-gray-600 ml-1">5.0 rating</span>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-[#B5EAD7] rounded-[2rem] rotate-3"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#FECDD3] rounded-[2rem] -rotate-3"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770027611269-24975dfa41aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMHN0dWR5aW5nJTIwbWF0aCUyMGhhcHB5JTIwY29uZmlkZW50fGVufDF8fHx8MTc3MzY1NTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Student confidently working on math"
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-square"
                />
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl rotate-6 border-2 border-[#F9E87B]">
                  <div className="text-center">
                    <div className="text-3xl text-gray-900" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>A+</div>
                    <div className="text-xs text-gray-600">achievable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Jessica */}
      <section id="about" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-block">
                <span className="text-sm text-[#3DAA7A] uppercase tracking-wider bg-[#B5EAD7]/30 px-4 py-2 rounded-full" style={{ fontWeight: 700 }}>
                  The Real Deal
                </span>
              </div>
              
              <h2 className="text-5xl text-gray-900 leading-tight" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
                Your tutor who shows up to your musical
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Here's the thing: I don't just teach formulas. I teach <i>you</i>. That means actually getting 
                  to know how your brain works, what makes math scary, and what makes it click.
                </p>
                
                <p>
                  My teaching style? High-energy, encouraging, memorable. (One student said I "make math fun," 
                  which I consider a professional achievement.) I focus on struggling-to-proficient students—not 
                  because I don't believe you can be amazing, but because I love watching that lightbulb moment.
                </p>
                
                <p>
                  And yeah, I genuinely care. I've shown up to students' plays, concerts, and celebrations because 
                  education isn't just about grades. It's about supporting the whole person. You're not a roster number here.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#FEF3C7]/40 p-5 rounded-2xl border-2 border-[#F9E87B]/60">
                  <BookMarked className="w-8 h-8 text-[#D4A017] mb-2" />
                  <div className="text-gray-900" style={{ fontWeight: 600 }}>Study Skills</div>
                  <div className="text-sm text-gray-600 mt-1">Not just problem-solving</div>
                </div>
                <div className="bg-[#B5EAD7]/20 p-5 rounded-2xl border-2 border-[#B5EAD7]">
                  <Smile className="w-8 h-8 text-[#3DAA7A] mb-2" />
                  <div className="text-gray-900" style={{ fontWeight: 600 }}>Personal Bonds</div>
                  <div className="text-sm text-gray-600 mt-1">I remember your name</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9E87B] to-[#FED7AA] rounded-[3rem] -rotate-6 opacity-70"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwdGVhY2hlciUyMHNtaWxpbmclMjBmcmllbmRseXxlbnwxfHx8fDE3NzM2NTU5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Jessica"
                  className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] rotate-3"
                />
              </div>
              {/* Floating quote */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border-2 border-[#FECDD3] rotate-[-3deg]">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C842] text-[#F5C842]" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic">"She actually makes math make sense!"</p>
                <p className="text-xs text-gray-500 mt-1">— High school junior</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-24 px-6 lg:px-12 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-4" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
              Not your typical tutoring
            </h2>
            <p className="text-xl text-gray-600">What makes JLL different</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "💛",
                title: "Actually Personal",
                description: "This isn't a faceless service. I learn your learning style, celebrate your wins, and yes—show up to your school events.",
                bg: "bg-[#FFFBEB]",
                border: "border-[#F9E87B]/70",
              },
              {
                emoji: "🎯",
                title: "Skills That Stick",
                description: "Time management, study strategies, problem-solving frameworks—not just \"here's how to pass the test.\"",
                bg: "bg-[#F0FAF5]",
                border: "border-[#B5EAD7]",
              },
              {
                emoji: "✨",
                title: "Genuinely Engaging",
                description: "Memorable explanations, encouragement, maybe a song reference. Math doesn't have to be torture.",
                bg: "bg-[#FFF0F5]",
                border: "border-[#FECDD3]",
              }
            ].map((item, index) => (
              <div key={index} className={`rounded-3xl p-8 border-2 ${item.bg} ${item.border} hover:shadow-lg transition-all`}>
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Math Topics */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-4" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
              Pre-Algebra → AP Calculus
            </h2>
            <p className="text-xl text-gray-600">All the math that matters for middle & high school</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { subject: "Pre-Algebra",   grades: "6th–8th",   bg: "bg-[#FFFBEB]",  border: "border-[#F9E87B]/60" },
              { subject: "Algebra I",     grades: "8th–9th",   bg: "bg-[#F0FAF5]",  border: "border-[#B5EAD7]"   },
              { subject: "Geometry",      grades: "9th–10th",  bg: "bg-[#FFF0F5]",  border: "border-[#FECDD3]"   },
              { subject: "Algebra II",    grades: "10th–11th", bg: "bg-[#F5F0FF]",  border: "border-[#E9D5FF]"   },
              { subject: "Pre-Calculus",  grades: "11th–12th", bg: "bg-[#FFF5EE]",  border: "border-[#FED7AA]"   },
              { subject: "AP Calculus",   grades: "11th–12th", bg: "bg-[#FFFBEB]",  border: "border-[#F9E87B]/60" },
            ].map((topic, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-6 border-2 ${topic.bg} ${topic.border} hover:scale-105 transition-all`}
              >
                <div className="relative">
                  <div className="text-gray-900 text-lg mb-1" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>{topic.subject}</div>
                  <div className="text-sm text-gray-500">{topic.grades}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">Plus homework help, test prep, and study skills coaching</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-4" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
              Don't just take my word for it
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Jessica helped my daughter go from hating Algebra to actually enjoying it. She's patient, explains things in ways that click, and genuinely cares about her progress.",
                name: "Sarah M.",
                role: "Parent of 9th grader",
                rotation: "rotate-[-2deg]",
                border: "border-[#F9E87B]/60",
              },
              {
                text: "I was so stressed about AP Calc but Jessica made it make sense. She's honestly the best tutor I've ever had—like having a cool older sister who's also a math genius.",
                name: "Alex R.",
                role: "High school senior",
                rotation: "rotate-[1deg]",
                border: "border-[#B5EAD7]",
              },
              {
                text: "My son actually looks forward to tutoring sessions now. Jessica has this gift for making difficult concepts click and building his confidence.",
                name: "Michael T.",
                role: "Parent of 10th grader",
                rotation: "rotate-[-1deg]",
                border: "border-[#FECDD3]",
              }
            ].map((testimonial, index) => (
              <div key={index} className={`${testimonial.rotation} hover:rotate-0 transition-transform`}>
                <div className={`bg-white rounded-3xl p-8 shadow-md border-2 ${testimonial.border} h-full`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F5C842] text-[#F5C842]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="text-gray-900" style={{ fontWeight: 600 }}>{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-4" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
              Getting started is easy
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Free Consultation",
                description: "We'll hop on a quick call to chat about goals, challenges, and see if we vibe. Zero pressure.",
                emoji: "☕",
                accent: "bg-[#FFFBEB] border-[#F9E87B]/60"
              },
              {
                number: "02",
                title: "Schedule Your Sessions",
                description: "Pick times that work for you. Everything's remote via Zoom, so learn from anywhere.",
                emoji: "📅",
                accent: "bg-[#F0FAF5] border-[#B5EAD7]"
              },
              {
                number: "03",
                title: "Show Up & Learn",
                description: "I handle lesson plans, materials, and making math not terrible. You just bring your brain.",
                emoji: "🚀",
                accent: "bg-[#FFF0F5] border-[#FECDD3]"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-8 items-start group">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full border-2 ${step.accent} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <span className="text-gray-800" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: '1.3rem' }}>{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl text-gray-900" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>{step.title}</h3>
                    <span className="text-3xl">{step.emoji}</span>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — editorial "lounge menu" style */}
      <section id="pricing" className="py-24 px-6 lg:px-12 bg-[#FFFBF5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-5xl text-gray-900 mb-3" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
              Simple, honest pricing
            </h2>
            <p className="text-xl text-gray-500">No subscriptions. No fine print. Just good tutoring.</p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-[#F9E87B]/60"></div>
            <span className="text-2xl">✨</span>
            <div className="flex-1 h-px bg-[#F9E87B]/60"></div>
          </div>

          {/* Three options in a staggered editorial row */}
          <div className="grid md:grid-cols-3 gap-6 items-end">
            {/* Option 1 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#E9D5FF] shadow-sm hover:shadow-md transition-all">
              <div className="mb-6">
                <div className="inline-block bg-[#F5F0FF] text-[#8B5CF6] text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ fontWeight: 700 }}>
                  Try it out
                </div>
                <div className="text-gray-400 text-sm mb-1" style={{ fontWeight: 600 }}>Single Session</div>
                <div className="text-gray-900 leading-none mb-1" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: '3.5rem' }}>$85</div>
                <div className="text-gray-500 text-sm">per 60-min session</div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                {["Personalized lesson", "Post-session notes", "No commitment needed"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B5EAD7] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} className="w-full rounded-full bg-[#F5F0FF] text-[#6B3FA0] hover:bg-[#EDE9FE] border border-[#E9D5FF]" style={{ fontWeight: 600 }}>
                Get Started
              </Button>
            </div>

            {/* Option 2 — featured, taller */}
            <div className="bg-[#FFFBEB] rounded-3xl p-8 border-2 border-[#F9E87B] shadow-lg hover:shadow-xl transition-all md:-mt-6 md:-mb-0 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F9E87B] text-gray-800 text-xs px-4 py-1.5 rounded-full whitespace-nowrap" style={{ fontWeight: 700 }}>
                Most loved 💛
              </div>
              <div className="mb-6 pt-2">
                <div className="inline-block bg-[#FEF3C7] text-[#B45309] text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ fontWeight: 700 }}>
                  Save $25
                </div>
                <div className="text-gray-400 text-sm mb-1" style={{ fontWeight: 600 }}>5-Session Package</div>
                <div className="text-gray-900 leading-none mb-1" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: '3.5rem' }}>$400</div>
                <div className="text-gray-500 text-sm">five 60-min sessions</div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                {["Everything in Single", "Progress tracking", "Custom materials", "Priority scheduling"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} className="w-full rounded-full bg-[#F9E87B] text-gray-900 hover:bg-[#F5DF60] border border-[#EDD84A]/30" style={{ fontWeight: 700 }}>
                Get Started
              </Button>
            </div>

            {/* Option 3 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#FECDD3] shadow-sm hover:shadow-md transition-all">
              <div className="mb-6">
                <div className="inline-block bg-[#FFF0F5] text-[#BE185D] text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ fontWeight: 700 }}>
                  Save $100
                </div>
                <div className="text-gray-400 text-sm mb-1" style={{ fontWeight: 600 }}>10-Session Package</div>
                <div className="text-gray-900 leading-none mb-1" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: '3.5rem' }}>$750</div>
                <div className="text-gray-500 text-sm">ten 60-min sessions</div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                {["Everything in 5-Pack", "Detailed progress reports", "Custom study materials", "Priority scheduling", "Unlimited email support"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FECDD3] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} className="w-full rounded-full bg-[#FFF0F5] text-[#BE185D] hover:bg-[#FFE4EE] border border-[#FECDD3]" style={{ fontWeight: 600 }}>
                Get Started
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-[#B5EAD7]/60"></div>
            <span className="text-2xl">🌿</span>
            <div className="flex-1 h-px bg-[#B5EAD7]/60"></div>
          </div>

          {/* Custom note */}
          <div className="text-center max-w-xl mx-auto">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 600 }}>Need something different?</p>
            <h3 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>
              Sibling discounts, intensive test prep,<br/> or a custom package? Let's figure it out.
            </h3>
            <Button onClick={scrollToContact} variant="outline" className="border-2 border-gray-300 hover:border-gray-400 rounded-full px-8 mt-4" style={{ fontWeight: 600 }}>
              Let's Chat →
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl text-gray-900 mb-4" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
              Let's make math make sense
            </h2>
            <p className="text-xl text-gray-600">
              Free consultation • No pressure • Just a friendly chat
            </p>
          </div>

          <div className="bg-[#FFFBF5] rounded-3xl shadow-xl p-10 border-2 border-[#F9E87B]/40">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-[#B5EAD7] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl text-gray-900 mb-3" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}>
                  Got it! 🎉
                </h3>
                <p className="text-xl text-gray-600">
                  I'll get back to you within 24 hours. Looking forward to chatting!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-2 border-gray-200 focus:border-[#F9E87B] bg-white rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-2 border-gray-200 focus:border-[#F9E87B] bg-white rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-2 border-gray-200 focus:border-[#F9E87B] bg-white rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-gray-900">Student Grade *</Label>
                    <Select
                      value={formData.studentGrade}
                      onValueChange={(value) => setFormData({ ...formData, studentGrade: value })}
                    >
                      <SelectTrigger id="grade" className="border-2 border-gray-200 focus:border-[#F9E87B] bg-white rounded-xl">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6th">6th Grade</SelectItem>
                        <SelectItem value="7th">7th Grade</SelectItem>
                        <SelectItem value="8th">8th Grade</SelectItem>
                        <SelectItem value="9th">9th Grade</SelectItem>
                        <SelectItem value="10th">10th Grade</SelectItem>
                        <SelectItem value="11th">11th Grade</SelectItem>
                        <SelectItem value="12th">12th Grade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900">What are your goals? *</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell me what you're hoping to achieve, any specific challenges, upcoming tests, etc."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 border-gray-200 focus:border-[#F9E87B] bg-white rounded-xl"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#F9E87B] text-gray-900 hover:bg-[#F5DF60] shadow-md rounded-full text-lg py-6 border border-[#EDD84A]/30"
                  size="lg"
                  style={{ fontWeight: 700 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Usually respond within 24 hours ✨
                </p>
              </form>
            )}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-2">Or email me directly:</p>
            <a href="mailto:hello@jessicaslearninglounge.com" className="text-xl text-gray-900 hover:text-[#D4A017] transition-colors" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}>
              hello@jessicaslearninglounge.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <div>
                <div className="text-white text-lg" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>Jessica's Learning Lounge</div>
                <div className="text-sm text-gray-400">Math Tutoring • 6th–12th Grade</div>
              </div>
            </div>

            <div>
              <a href="mailto:hello@jessicaslearninglounge.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">hello@jessicaslearninglounge.com</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Jessica's Learning Lounge. Made with ☕ and ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
