import {useEffect, useState} from "react";
import '../componentCSS/productdetails.css'
import {useParams} from "react-router-dom";

import axios from "axios";

export const Userdetail = () => {
  const {id} = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/product/${id}`).then(({data}) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="main-product-div">
      <div className="subdiv-product-one">
        <img src={users.image_1} alt="" />
      </div>
      <div className="subdiv-product-two">
        <p>{users.title}</p>
        <p>{users.company}</p>
        <p>{users.price}</p>
      </div>
      {/* 

      <p>First Name :{users.title} </p>

      <p>Last Name :{users.company} </p> */}
    </div>
  );
};
