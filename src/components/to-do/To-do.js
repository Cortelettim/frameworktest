import React, { useState, useEffect } from "react";
import api from "../../service/Api";
import "./styles.css";
import Header from "../../Header/Header";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [exibe, setExibi] = useState([]);
  const [all, setAllTodos] = useState([]);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTodo(items);
  }, [items]);

  useEffect(() => {
    api.get("/todos").then((response) => {
      setAllTodos(response.data);
    });
  }, []);

  useEffect(() => {
    setTodo(all.slice(exibe));
  },[all, exibe]);


  useEffect(() => {
    const results = all.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTodo(results);
  },[all, searchTerm]);


  function handleChange(event) {
    setSearchTerm(event.target.value);
  }


  function genClassName(boolean) {
    if (boolean) {
      return "done";
    } else {
      return "todo";
    }
  }
  function done() {
    setItems(all.filter((item) => item.completed));
  }

  function toDo() {
    setItems(all.filter((item) => !item.completed));
  }

  function allItems() {
    setItems(all.slice(todo));
  }



  return (
    <>
      <div className="divH">
        <h1>postagens</h1>
      </div>
      <Header /> 
      <div className="container">
        
        <button className="buttom" onClick={allItems}>
          All
        </button>
        <button className="buttom" onClick={toDo}>
          To-do
        </button>
        <button className="buttom" onClick={done}>
          Done
        </button>
        
   
        
      </div>
         <div className="search">
           <br />
      <input
          className="inputFilter"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <br />
      <br />
      <div className="todoContainer">
        {todo.map((todo) => {
          return (
            <div key={todo.id} className={genClassName(todo.completed)}>
              <h2>{todo.title}</h2>
            </div>
          );
        })}
      </div>
     
    </>
  );
}
