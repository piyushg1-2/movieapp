
import './App.css';
import first from './avatar.jpg'
import second from './titanic.jpg'
import third  from  './Star Wars_ Episode VII - The Force Awakens.png'
import four from  './Avengers.jpg'
import fifth from './jurassic world.jpg'

  const data=[
    {
      id: 1,
      title: "Avatar",
      distributor: "20th Century Fox",
      year: 2009,
      amount: '$2,787,965,087',
      img: {
        src: first,
        alt: "avatar"
      },
      ranking: 1
    },
    {
      id: 2,
      title: "Titanic",
      distributor: "20th Century Fox",
      year: 1997,
      amount: "$2,187,463,944",
      img: {
        src: second,
        alt: "titanic"
      },
      ranking: 2
    },
    {
      id: 3,
      title: "Star Wars: The Force Awakens",
      distributor: "Walt Disney Studios Motion Pictures",
      year: 2015,
      amount: "$2,068,223,624",
      img: {
        src: third,
        alt: "star_wars_the_force_awakens"
      },
      ranking: 3
    },
    {
      id: 4,
      title: "Avengers: Infinity War",
      distributor: "Walt Disney Studios Motion Pictures",
      year: 2018,
      amount: "$2,048,359,754",
      img: {
        src: four,
        alt: "avengers_infinity_war"
      },
      ranking: 4
    },
    {
      id: 5,
      title: "Jurassic World",
      distributor: "Universal Pictures",
      year: 2015,
      amount: "$1,671,713,208",
      img: {
        src:fifth ,
        alt: "jurassic_world"
      },
      ranking: 5
    }
  ]
function App() {
  return (
    <div className="App">
        <h1 id='list'>Movie List</h1>
        

         {data.map((info )=>{
             return <div id={`movie${info.id}`} className="movie">
                      
                     <img id={`img${info.id}`} src={info.img.src} alt={info.img.alt}/>
                     <h1>#{info.id}- {info.title}({info.year})</h1>
                     <hr></hr>
                   <ul>
                      <li key={info.id}>Distributor:{info.distributor}</li>
                      <hr></hr>
                      <li key={info.id+1}>Amount:{info.amount}</li>
                   </ul>
                  
                   </div>
         })
         }
      
    </div>
  );
}

export default App;
