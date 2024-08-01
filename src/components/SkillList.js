import React from "react";

const SkillList = ({ skills, deleteSkill }) => {
  return (
    <div>
      <ul>
        {skills.map((skill, idx) => (
          <li
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
