import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight, Book, Monitor, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Update {
  title: string;
  date: string;
  description: string;
  readMoreLink: string;
}

interface Article {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const Happenings = () => {
  useEffect(() => {
    document.title = "Happenings - bloomin";
  }, []);

  const updates: Update[] = [
    {
      title: "Bloomin Launches New Mentorship Program",
      date: "April 24, 2025",
      description: "We're thrilled to announce the launch of our Mentorship Program tailored for medical students and young professionals. This initiative connects emerging talents with experienced doctors, offering one-on-one guidance, case discussions, and career advice.",
      readMoreLink: "#"
    },
    {
      title: "Global Webinar: The Future of AI in Healthcare",
      date: "April 18, 2025",
      description: "Join us for a live webinar featuring top experts discussing the evolving role of AI in modern medicine. Learn about breakthroughs in AI-assisted diagnostics, research collaborations, and how Bloomin is pioneering these advancements.",
      readMoreLink: "#"
    },
    {
      title: "New Study Materials & Roadmaps Now Available",
      date: "April 12, 2025",
      description: "Our study hub has just been enriched with new detailed learning roadmaps and study materials designed specifically for medical students. Whether you're preparing for exams or seeking to deepen your knowledge in a specialty, these resources will guide you every step of the way.",
      readMoreLink: "#"
    },
    {
      title: "Bloomin Partners with Leading Medical Institutions",
      date: "April 5, 2025",
      description: "Bloomin is proud to announce new partnerships with several prestigious medical colleges and research institutions. This collaboration will foster deeper engagement, offer enhanced learning opportunities for students, and drive innovative research projects.",
      readMoreLink: "#"
    },
    {
      title: "Community Spotlight: Success Stories & Innovations",
      date: "March 30, 2025",
      description: "In our Community Spotlight series, we celebrate success stories from our vibrant network. This month, read about a group of medical students who collaborated on a groundbreaking research project, transforming a simple idea into a published study.",
      readMoreLink: "#"
    }
  ];

  const articles: Article[] = [
    {
      title: "Innovations in Telemedicine",
      description: "How virtual care is reshaping patient-doctor interactions.",
      icon: <Monitor className="h-6 w-6 md:h-8 md:w-8 text-bloomin-blue" />,
      link: "#"
    },
    {
      title: "Navigating Your Medical Career",
      description: "Tips and insights for students transitioning from classroom to clinic.",
      icon: <Book className="h-6 w-6 md:h-8 md:w-8 text-bloomin-blue" />,
      link: "#"
    },
    {
      title: "The Role of AI in Modern Diagnostics",
      description: "Exploring real-world applications and future possibilities.",
      icon: <Brain className="h-6 w-6 md:h-8 md:w-8 text-bloomin-blue" />,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-bloomin-sage text-bloomin-navy">
      <Navbar />
      <SideNav />
      <div className="ml-0 md:ml-64 pt-24">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-gradient-to-r from-bloomin-blue to-bloomin-teal text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Happenings at Bloomin</h1>
              <p className="text-base md:text-xl leading-relaxed">
                Stay informed and inspired by the latest updates, events, and insights from our global medical community.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-bloomin-blue">Latest Updates</h2>
            
            <div className="space-y-6 md:space-y-8">
              {updates.map((update, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 md:p-6 border-l-4 border-bloomin-blue">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-bloomin-navy mb-2 sm:mb-0">{update.title}</h3>
                      <div className="flex items-center text-xs md:text-sm text-gray-500">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        <span>{update.date}</span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{update.description}</p>
                    <Link 
                      to={update.readMoreLink} 
                      className="inline-flex items-center text-bloomin-blue hover:text-bloomin-blue/80 text-sm md:text-base"
                    >
                      Read more
                      <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-bloomin-blue">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 md:p-6">
                    <div className="bg-bloomin-blue/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4">
                      {article.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-bloomin-navy">{article.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{article.description}</p>
                    <Link 
                      to={article.link} 
                      className="inline-flex items-center text-bloomin-blue hover:text-bloomin-blue/80 text-sm md:text-base"
                    >
                      Read article
                      <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-8 md:py-16 bg-bloomin-blue/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-bloomin-navy">Stay Updated</h2>
              <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
                Subscribe to our newsletter to receive the latest updates, events, and articles directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bloomin-blue text-sm md:text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-bloomin-blue text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:bg-bloomin-blue/90 transition-colors text-sm md:text-base"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Happenings; 