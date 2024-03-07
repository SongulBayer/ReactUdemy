import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App(){
  return(
    <div className="card" >
 <Avatar/>
 <div className="data">
 <Intro/>
 <SkillList/>
 </div>
    </div>
  );
}

function Avatar(){
  return(
    <img className="avatar" src="img/avatar.jpg" alt="Songül Bayer" />
  );
}

function SkillList(){
  return(
<div className="skill-list">

{skills.map((skillList) => (
  <Skill skill={skillList.skill} color={skillList.color} level={skillList.level} key={skillList.skill}/>
))}

</div>

  );
}
function Skill({skill, color,level}){
  return(
<div className="skill" style={{backgroundColor:color}}>
<span>{skill}</span>
<span>
  {level === "beginner" && "👶"}
  {level === "intermediate" && "👍"}
  {level === "advanced" && "💪"}
{/* Not: 
{condition && <Component />}
Bu yapıda, condition bir koşul ifadesidir. 
Eğer bu koşul doğruysa (true ise), <Component /> bileşeni render edilir. 
Eğer koşul yanlışsa (false ise), <Component /> bileşeni render edilmez. */}

  </span>
</div>
  );
}
function Intro(){
  return(
    <div>
      <h1>Songül Bayer</h1>
      <p>
      I recently received my degree in computer engineering from Sakarya University with a concentration in
    .NET Backend development. I have a solid background in.NET technologies and a diverse skill set that may
    be used in a variety of businesses. In order to satisfy high corporate expectations, I am motivated and
    excited about finding creative solutions to complicated situations.
    </p>
    
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

  