import React from 'react';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'Python',
  'Django',
  'SQL',
  'Git',
  'Docker'
];

const Skills = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>My Skills</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ marginBottom: '10px', fontSize: '18px' }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;