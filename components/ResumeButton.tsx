import React from 'react';
import {
  greetings,
  educationInfo,
  experience,
  projects,
  socialLinks,
} from '../portfolio';

const ResumeButton: React.FC = () => {
  const download = () => {
    const md = `# ${greetings.name}

${greetings.description}

${Object.keys(socialLinks)
  .map((l) => `- [${l}](${socialLinks[l]})`)
  .join('\n')}

## Experience
${experience
  .map(
    (e) =>
      `### ${e.role} at ${e.company}\n- **Duration:** ${
        e.date
      }\n- **Description:** ${e.desc}\n${(e.descBullets || [])
        .map((b) => `  - ${b}`)
        .join('\n')}`
  )
  .join('\n\n')}

## Education
${educationInfo
  .map(
    (e) =>
      `### ${e.course}\n- **School:** ${e.schoolName}\n- **Duration:** ${e.duration}\n- **Description:** ${e.desc}`
  )
  .join('\n\n')}

## Projects
${projects.map((p) => `### ${p.name}\n${p.tagline}\n\n${p.desc}`).join('\n\n')}
`;
    const url = URL.createObjectURL(new Blob([md], { type: 'text/markdown' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button className="btn" onClick={download}>
      Download resume ↓
    </button>
  );
};

export default ResumeButton;
