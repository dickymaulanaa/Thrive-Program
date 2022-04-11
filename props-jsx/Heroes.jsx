import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


const heroes = [
  {
    id: 1,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
    name: "Doraemon",
    age: 40,
    city: "Toyama",
  },
  {
    id: 2,
    imgSrc:
      "https://pbs.twimg.com/profile_images/493416454104969216/2gt_nClw_400x400.jpeg",
    name: "Goku",
    age: 11,
    city: "West City",
  },
  {
    id: 3,
    imgSrc: "https://pbs.twimg.com/media/DyXR3quXQAUBo81.jpg",
    name: "Itachi",
    age: 8,
    city: "Konoha",
  },
];

// const Cards = (props) => {


//   return (
//     <div className='card'>
//       <img src={props.imgSrc} className="image" />
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.city}</h2>
//       <button >chose</button>

//     </div>
//   )

// };

const App = () => {
  const [nama, setNama] = useState("")
  // const [bgColor, setBgColor] = useState("#222831")


  return (
    <div className='container'>
      {heroes.map((hero) => (
        <div className='card'>
        <img src={hero.imgSrc} className="image" />
        <h1>{hero.name}</h1>
        <h2>{hero.age}</h2>
        <h2>{hero.city}</h2>
        <button onClick={() => setNama(`${hero.name}`)}>chose</button>
      </div>
      ))}
      <h1>{nama}</h1>
    </div>
  )
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
// ReactDOM.render(React.createElement(App), document.getElementById("root"));