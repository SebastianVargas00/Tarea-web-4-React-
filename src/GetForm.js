import "./App.css"
import React,{useEffect, useState} from "react";

function GetForm(){
    const url="http://www.raydelto.org/agenda.php";
  //React Hooks
  const [todos,setTodos]=useState()
  const Api=async()=>{
  const response =await fetch(url)
  const json=await response.json()
  setTodos(json)
  }
  useEffect(()=>{
  Api()  
  },[])
  return (
    <div className="table-container">
     <h1>Guardado de datos</h1>
  <table className="table">
  <tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Telefono</th>
  </tr>
    {!todos ? "Cargando.....":
    todos.map((todo,index)=>{
      return <tr>  
       <td>{todo.nombre}</td>
       <td>{todo.apellido}</td>
       <td>{todo.telefono}</td>
      </tr>
    })
    }
  </table>  
    </div>
  );
}

export default GetForm;

