import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title =
      "Aldi Isza - Mobile Developer | React Native & Flutter Expert";

    // Add meta tags
    const metaTags = [
      {
        name: "description",
        content:
          "Aldi Isza - Expert Mobile Developer specializing in React Native, Flutter, and iOS/Android development. Creating exceptional mobile experiences.",
      },
      {
        name: "keywords",
        content:
          "mobile developer, react native, flutter, iOS, android, app development, jakarta, indonesia",
      },
      { name: "author", content: "Aldi Isza" },
      { property: "og:title", content: "Aldi Isza - Mobile Developer" },
      {
        property: "og:description",
        content:
          "Expert Mobile Developer specializing in React Native, Flutter, and iOS/Android development.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aldi Isza - Mobile Developer" },
      {
        name: "twitter:description",
        content:
          "Expert Mobile Developer specializing in React Native, Flutter, and iOS/Android development.",
      },
    ];

    metaTags.forEach((tag) => {
      const existingTag = document.querySelector(
        `meta[${tag.name ? "name" : "property"}="${tag.name || tag.property}"]`
      );
      if (existingTag) {
        existingTag.setAttribute("content", tag.content);
      } else {
        const newTag = document.createElement("meta");
        if (tag.name) {
          newTag.setAttribute("name", tag.name);
        } else if (tag.property) {
          newTag.setAttribute("property", tag.property);
        }
        newTag.setAttribute("content", tag.content);
        document.head.appendChild(newTag);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Loading amazing content...
          </p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <Footer />
        <FloatingActionButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
