import "../componentCSS/posts.css";
import {Link} from "react-router-dom";
export default function Post(props) {
  
  const {_id, image_2, title, company, price} = props.data;
  return (
    <div key={_id} className="for-bc-color">
      <Link to={`/product/${_id}`}>
        
        <img src={image_2} className="content-image-one"></img>
        <p className="content-div-ptag-one">{title}</p>
        <p className="content-div-ptag-two">{company}</p>
        <p className="content-div-ptag-three">{price}</p>
      </Link>
    </div>
  );
}
