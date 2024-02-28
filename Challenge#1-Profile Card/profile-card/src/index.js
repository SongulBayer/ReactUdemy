import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function App(){
  return(
    <div className='card' >
 <Avatar/>
 <div className='data'>
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
<div className='skill-list'>
<Skill skill="C#" emoji="👌" color="purple"/>
<Skill skill="HTML-CSS" emoji="👌" color="orange"/>
<Skill skill="JavaScript" emoji="👶" color="blue"/>
<Skill skill=".NET CORE" emoji="👌" color="pink"/>
</div>

  );
}
function Skill(props){
  return(
<div className='skill' style={{backgroundColor:props.color}}>
<span>{props.skill}</span>
<span>{props.emoji}</span>

</div>

  )
}
function Intro(){
  return(
    <div>
      <h1>Songül Bayer</h1>
      I recently received my degree in computer engineering from Sakarya University with a concentration in
    .NET Backend development. I have a solid background in.NET technologies and a diverse skill set that may
    be used in a variety of businesses. In order to satisfy high corporate expectations, I am motivated and
    excited about finding creative solutions to complicated situations.</div>
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

  