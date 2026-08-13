import { Button } from "./ui/button";
import {
  ArrowRight,
  BookMarked,
  CheckCircle,
  Mail,
  Smile,
} from "lucide-react";

// Soft pastel palette (used throughout):
// Yellow:   #F9E87B (accent), #FFFBEB / #FEF9E6 (bg tints)
// Mint:     #B5EAD7
// Pink:     #FECDD3
// Lavender: #E9D5FF
// Peach:    #FED7AA

export function HomePage() {
  const contactEmail = "jessicaslearninglounge@gmail.com";
  const contactHref = "mailto:jessicaslearninglounge@gmail.com?subject=Free%20Consultation%20Request";

  return (
    <div className="w-full bg-[#FFFEF9]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFEF9]/90 backdrop-blur-xl border-b border-[#F9E87B]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xl sm:text-2xl flex-shrink-0">✨</span>
              <div className="min-w-0">
                <div
                  className="text-gray-900 text-base sm:text-lg truncate"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  Jessica's Learning Lounge
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500 -mt-1">
                  Academic Coach • 6th–12th Grade
                </div>
              </div>
            </div>

            <Button
              asChild
              className="bg-[#F9E87B] text-gray-900 hover:bg-[#F5DF60] rounded-full px-4 sm:px-6 shadow-md hover:shadow-lg transition-all border border-[#EDD84A]/30 flex-shrink-0"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              <a href={contactHref}>
                <span className="hidden sm:inline">Book a Free Consultation</span>
                <span className="sm:hidden">Free Consultation</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#F9E87B] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FECDD3] rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-block px-4 py-2 bg-[#B5EAD7]/30 rounded-full border-2 border-[#B5EAD7]">
                <span className="text-sm text-gray-700" style={{ fontWeight: 700 }}>
                  Academic Coaching • Math Support • Study Skills
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-[1.08]"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
              >
                Helping students learn better—not just finish tonight's homework.
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Personalized support for middle and high school students who want to
                understand their classes, build stronger study habits, and become more
                confident and independent learners.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F9E87B] text-gray-900 hover:bg-[#F5DF60] rounded-full px-8 text-lg shadow-md hover:shadow-lg transition-all border border-[#EDD84A]/30"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                >
                  <a href={contactHref}>
                    Book a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="text-lg rounded-full border-2 border-gray-300 hover:border-gray-400"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  <a href="#how-i-help">See How I Help</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-full h-full bg-[#B5EAD7] rounded-[2rem] rotate-2"></div>
                <div className="relative bg-white rounded-[2rem] p-8 sm:p-10 border-2 border-[#F9E87B]/60 shadow-xl">
                  <div className="text-4xl mb-5">🌱</div>
                  <h2
                    className="text-3xl text-gray-900 mb-6"
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
                  >
                    Support that goes beyond one assignment
                  </h2>

                  <div className="space-y-4">
                    {[
                      "Understand difficult concepts",
                      "Manage time and assignments",
                      "Prepare for tests with a plan",
                      "Build habits that support independence",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#3DAA7A] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section id="how-i-help" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm text-[#3DAA7A] uppercase tracking-wider mb-3" style={{ fontWeight: 800 }}>
              How I Help
            </p>
            <h2
              className="text-4xl sm:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
            >
              The right support for the whole student
            </h2>
            <p className="text-xl text-gray-600">
              We focus on what needs attention now while building skills that keep
              helping long after the session ends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FFFBEB] rounded-3xl p-8 border-2 border-[#F9E87B]/70">
              <div className="w-12 h-12 rounded-2xl bg-[#F9E87B] flex items-center justify-center mb-5">
                <Smile className="w-6 h-6 text-gray-800" />
              </div>
              <h3
                className="text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
              >
                Academic Coaching
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Organization, time management, accountability, self-advocacy, and
                realistic routines designed around how each student learns.
              </p>
            </div>

            <div className="bg-[#F0FAF5] rounded-3xl p-8 border-2 border-[#B5EAD7]">
              <div className="w-12 h-12 rounded-2xl bg-[#B5EAD7] flex items-center justify-center mb-5">
                <BookMarked className="w-6 h-6 text-gray-800" />
              </div>
              <h3
                className="text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
              >
                Math Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Clear, personalized instruction from foundational middle school math
                through advanced high school courses, including AP Calculus.
              </p>
            </div>

            <div className="bg-[#FFF0F5] rounded-3xl p-8 border-2 border-[#FECDD3]">
              <div className="w-12 h-12 rounded-2xl bg-[#FECDD3] flex items-center justify-center mb-5">
                <CheckCircle className="w-6 h-6 text-gray-800" />
              </div>
              <h3
                className="text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
              >
                Study Skills
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Planning assignments, preparing for tests, breaking down large tasks,
                and developing study strategies students can use independently.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            Middle school all-subject support • High school math support • Test preparation
          </p>
        </div>
      </section>

      {/* About Jessica */}
      <section id="about" className="py-20 px-6 lg:px-12 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-[#BE185D] uppercase tracking-wider mb-3" style={{ fontWeight: 800 }}>
                Meet Jessica
              </p>
              <h2
                className="text-4xl sm:text-5xl text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
              >
                Personal support with a clear purpose
              </h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I’m Jessica, an academic coach and private tutor who works with
                  middle and high school students. My goal is to help students
                  understand the material in front of them while building the habits
                  they need to work more independently.
                </p>
                <p>
                  Sessions are personalized to how each student learns. We might focus
                  on a difficult math concept, organize a packed week, prepare for an
                  upcoming test, or build a study routine that actually feels realistic.
                </p>
                <p>
                  I bring encouragement, accountability, and a little humor to every
                  session. Students get someone who actually gets it, and parents get a
                  partner who cares about meaningful, lasting progress.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#E9D5FF] shadow-md">
              <h3
                className="text-3xl text-gray-900 mb-6"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
              >
                What families can expect
              </h3>

              <div className="space-y-5">
                {[
                  "Personalized one-on-one or small-group support",
                  "Clear goals and useful next steps",
                  "In-person, virtual, or hybrid sessions",
                  "Progress updates that keep parents informed",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8B5CF6] mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm text-[#3DAA7A] uppercase tracking-wider mb-3" style={{ fontWeight: 800 }}>
              Getting Started
            </p>
            <h2
              className="text-4xl sm:text-5xl text-gray-900"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
            >
              A simple plan built around your student
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Free Consultation",
                description: "We’ll talk about your student’s strengths, current challenges, classes, and goals.",
                accent: "bg-[#FFFBEB] border-[#F9E87B]/70",
              },
              {
                number: "02",
                title: "Personalized Plan",
                description: "We’ll choose the right format and focus based on what your student needs most.",
                accent: "bg-[#F0FAF5] border-[#B5EAD7]",
              },
              {
                number: "03",
                title: "Build Momentum",
                description: "Sessions combine academic support, study strategies, and steady accountability.",
                accent: "bg-[#FFF0F5] border-[#FECDD3]",
              },
            ].map((step) => (
              <div key={step.number} className={"rounded-3xl p-8 border-2 " + step.accent}>
                <div
                  className="text-4xl text-gray-900 mb-5"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-2xl text-gray-900 mb-3"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 lg:px-12 bg-[#FFFBF5]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 border-2 border-[#F9E87B]/70 shadow-xl text-center">
            <div className="w-16 h-16 bg-[#F9E87B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-gray-900" />
            </div>
            <h2
              className="text-4xl sm:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
            >
              Let’s talk about what your student needs
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Email me with your student’s grade, current classes, goals, and whether
              you prefer in-person or virtual support. We’ll start with a friendly,
              no-pressure conversation.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-[#F9E87B] text-gray-900 hover:bg-[#F5DF60] rounded-full px-8 text-lg shadow-md hover:shadow-lg transition-all border border-[#EDD84A]/30"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              <a href={contactHref}>
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>

            <a
              href={"mailto:" + contactEmail}
              className="block mt-6 text-gray-700 hover:text-[#B38A00] transition-colors break-all"
              style={{ fontWeight: 700 }}
            >
              {contactEmail}
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
                <div
                  className="text-white text-lg"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  Jessica's Learning Lounge
                </div>
                <div className="text-sm text-gray-400">Academic Coach • 6th–12th Grade</div>
              </div>
            </div>

            <a
              href={"mailto:" + contactEmail}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">{contactEmail}</span>
            </a>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Jessica's Learning Lounge. Made with ☕ and ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
