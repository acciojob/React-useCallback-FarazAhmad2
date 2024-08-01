import React, { useCallback, useState } from "react";
import SkillList from "./SkillList";

const App = () => {
  const [Input, setInput] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const addSkills = useCallback((e) => {
    e.preventDefault();
    if (Input && !skills.includes(Input)) {
      setSkills([...skills, Input]);
    }
    setInput("");
  }, [Input, skills]);

  const deleteSkill = useCallback(
    (skill) => {
      setSkills(skills.filter((s) => s != skill));
    },
    [skills]
  );

  return (
    <div>
      <form onSubmit={addSkills}>
        <h1 id="heading">Skills List</h1>
        <input
          id="skill-input"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="skill-add-btn">
          Add Skill
        </button>
      </form>

      <SkillList skills={skills} deleteSkill={deleteSkill} />
    </div>
  );
};

export default App;
