import './SkillCards.css';

interface SkillCard {
  name: string;
  description: string;
  category: string;
}

export function SkillCards({ skills }: { skills: SkillCard[] }) {
  return (
    <div className="SkillCardsGrid">
      {skills.map((skill) => (
        <div key={skill.name} className="SkillCard">
          <div className="SkillCardBody">
            <span className="SkillCardName">{skill.name}</span>
            <span className="SkillCardDesc">{skill.description}</span>
            <span className="SkillCardCategory">{skill.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
