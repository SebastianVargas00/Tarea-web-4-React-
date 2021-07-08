import React , {Component} from "react"
import "./App.css"
class PostForm extends Component{
    constructor(props){
        super(props)
        this.state={
          user:"",
          last_name:"",
          phone:""
        }
    }

    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler =e=>{
        e.preventDefault()
        console.log(this.state)
        fetch("http://www.raydelto.org/agenda.php",{
            method:"POST",
            mode:"no-cors",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
            apellido: this.state.last_name,
            telefono: Number(this.state.phone),
            nombre: this.state.user
            })
        }).then(()=>{
            alert("Enviado");
            window.location.replace('');
        })  
    }
    render(){
        const{user,last_name,phone}=this.state
        return(
        <div className="Form">
          <h2>Registro de datos</h2>
        <form onSubmit={this.submitHandler} >
        <label for="Nombre" className="user_name">Nombre:</label>
          <input type="text" name="user" value={user} onChange={this.changeHandler}></input>
          <label for="Apellido" className="lastname_user">Apellido:</label>
          <input type="text" name="last_name" value={last_name} onChange={this.changeHandler}></input>
          <label for="Apellido" className="phone_user">Telefono:</label>
          <input type="number" name="phone" value={phone} onChange={this.changeHandler}></input>
          <button type="submit" className="btn-send">Enviar</button>
        </form> 
        </div>
        )
    }
}

export default PostForm;
