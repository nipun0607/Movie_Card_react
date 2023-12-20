import "./Card.css";

const MovieCard = (props) => {
  return (
    <div className="card_container">
      <div className="left">
        <div className="poster_container">
          <div className="image_container">
            <img src={props.poster} />
          </div>
          <div className="title_container">
            <p>{props.moviename}</p>
            <span>
              {props.year}  {props.actorName}
            </span>
            <span id="type"><button>{props.time}</button>  <h4 className="type">{props.type}</h4></span>
          </div>
       
        </div>
        <div className="text_container">
        <p>{props.about}</p>
        </div>
        <div className=" icon_container">
        <i class="fa-solid fa-share-nodes"></i>
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-message"></i>
        </div>
      </div>
      <div className="right">
        <img src={props.img} />
      </div>
      
      
    </div>
  );
};
export default MovieCard;
