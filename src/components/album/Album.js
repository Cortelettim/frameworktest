import React, { useState, useEffect } from "react";
import api from "../../service/Api";
import Header from "../../Header/Header";
import placeholder from "../../Assets/placeholder.png";

import "./styles.css";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/albums").then((response) => {
      setPosts(response.data);
    });
  }, []);


  return (
    <>
      <div className="divH">
        <h1>postagens</h1>
      </div>
      <Header />
      <div className="containerA">
        {posts.map((post) => {
          return (
            <div className="album" key={post.id}>
              <div className="headerA">
                <p className="nameA">{`Id:${post.userId}`}</p>
              </div>
              <div className="imageA">
                <img src={placeholder} width="100%" alt="Main Content" />
              </div>
              <div className="contentA">
                <p className="titleA">{post.title}</p>
              
              </div>
            </div>
          );
        })}

      </div>
    </>
  );
}
