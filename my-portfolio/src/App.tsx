import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ProfileSection from './components/ProfileSection';
// The get_data import is no longer needed as we will use fallback data exclusively.
// import get_data from './utils/DataScraper/ApifyClient';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectGrid from './components/ProjectsGrid';
import CertificateGrid from './components/CertificateGrid';
import ContactSection from './components/Contact';
import ContactForm from './components/ContactForm';
import { fallbackData } from './utils/fallbackData.ts';

function App() {
  const [data, setData] = useState<any>(fallbackData);
  const [loading, setLoading] = useState(false); // Data is loaded instantly, so no loading state.

  // The entire useEffect for data fetching is replaced.
  // We now use fallbackData directly, ensuring no API calls are made.

  const DataString = JSON.stringify(data);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="spinner"></div>
          <p className="loading-text">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2 className="error-title">Oops! Something went wrong.</h2>
          <p className="error-message">Could not load the portfolio data. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <main>
        <ProfileSection
          profile_image_url={data.basic_info.profile_image_url}
          about={data.basic_info.about}
          linkedin={String(DataString)}
        >
          <h1 className="profile-name">{data.basic_info.name}</h1>
        </ProfileSection>
        <SkillsSection skills={data.categorized_skills} />
        <ExperienceSection experienceData={data.experience}/>
        <ProjectGrid projects={data.projects}/>
        <section id="contact">
          <ContactForm/>
          <ContactSection/>
        </section>
      </main>
    </>
  );
}

export default App;
