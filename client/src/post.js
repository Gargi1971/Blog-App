// import { compareAsc, format,formatISO90  } from 'date-fns';

import { Link } from "react-router-dom";

export default function Post({_id, title, summary, cover, content, createdAt}){
    return(
        <div class="post">
        <div class="image">
          <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt = ""/>
          </Link>
        </div>
        <div class= "texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          </Link>
        <p class= "info">
          <a class="author">Gargi Singh</a>
          {/* <time>{formatISO90(new Date(createdAt))}</time> */}
        </p>
        <p class="summary">{summary}</p></div> 
      </div>
    );

}