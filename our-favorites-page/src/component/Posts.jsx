import '../componentCSS/posts.css'
export default function Post(props) {
  const {id, image_2, title,company,price} = props.data;
  return (
    
      <div key={id} className="for-bc-color">
        <img src={image_2} className="content-image-one"></img>
        <p className="content-div-ptag-one">{title}</p>
        <p className="content-div-ptag-two">{company}</p>
        <p className="content-div-ptag-three">{price}</p>
      </div>
    
  );
}