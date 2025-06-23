import './styles/SkillsSection.css';

// Define the structure for skills and categories
interface Skill {
  name: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const SkillsSection = ({ skills = [] }: SkillsSectionProps) => {
  // If there are no skills, don't render the section
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section className="skills-section" id="skills">
      <div className="skills-simple-container animated-section">
        <div className="skills-title-simple">MY SKILLS</div>
        <div className="skills-category-grid">
          {skills.map((cat, idx) => (
            <div className="skills-category-card" key={cat.category + idx}>
              <div className="skills-category-header">{cat.category}</div>
              <div className="skills-tag-list">
                {cat.skills.map((skill, skillIdx) => (
                  <span className="skill-tag-simple" key={skill.name + skillIdx}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
