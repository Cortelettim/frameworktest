import React, { useState, useEffect } from "react";
import api from "../../service/Api";
import Header from "../../Header/Header";
import Anakin from "../../Assets/anakin.jpg";
import Baby from "../../Assets/baby-yoda.jpg";
import Darth from "../../Assets/darth-vader.jpg";
import Yoda from "../../Assets/yoda.jpg";
import Obiwan from "../../Assets/obi-wan.jpg";
import C3po from "../../Assets/c3po-r2d2.jpg";
import Jarjar from "../../Assets/jar-jar-binks.jpg";
import "./post.css";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        return Anakin;

      case 2:
        return Darth;

      case 3:
        return Yoda;

      case 4:
        return Baby;

      case 5:
        return Jarjar;

      case 6:
        return Obiwan;

      default:
        return C3po;
    }
  }
  return (
    <>
      <div className="divH">
        <h1>postagens</h1>
      </div>
      <Header />
      <div className="containerP">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="headerP">

              </div>
              
              <div className="contentP">
              <p className="nameP">{`Id:${post.userId}`}</p>
                <p className="titleP">{post.title}</p>
                <hr />
                <p>{post.body}</p>
                <hr />
                <div className="imageP">
                <img src={getRandomImage()} width="100%" alt="Main Content" />
              </div>
              </div>
              
            </div>
          );
        })}

      </div>
    </>
  );
}
