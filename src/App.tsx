import React from 'react';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;