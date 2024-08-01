import React from "react";

const SkillList = ({ skills, deleteSkill }) => {
  return (
    <div>
      <ul id="skill-list">
        {skills.map((skill, idx) => (
          <li id={`skill-number-${idx}`}
            onClick={() => deleteSkill(skill)}
            style={{ cursor: "pointer" }}
            key={idx}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
