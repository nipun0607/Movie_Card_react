import MovieCard from './Components/Card';
import  Data from './Components/data.json'
import "./Components/Card.css"
function App() {
  return (
    <div className="Container">
    {Data.map((e)=>{
      return <MovieCard poster={e.poster} moviename={e.moviename} year={e.year} actorName={e.actorName} time={e.time} type={e.type} about={e.about} img={e.img}
      />
    })}
    </div>
  );
}

export default App;
