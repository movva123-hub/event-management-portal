import axios from "axios";
import { useState } from "react";

export default function Admin(){
  const [form,setForm]=useState({});
  const user = JSON.parse(localStorage.getItem("user"));



  const add=async()=>{
    await axios.post("http://localhost:5000/add-event",form);
    alert("Event added");
  }

  return (
    <div>
      <h2>Admin</h2>

      <input placeholder="Title" onChange={e=>setForm({...form,title:e.target.value})}/>
      <input placeholder="Location" onChange={e=>setForm({...form,location:e.target.value})}/>
      <input placeholder="Date" onChange={e=>setForm({...form,date:e.target.value})}/>
      <input placeholder="Time" onChange={e=>setForm({...form,time:e.target.value})}/>
      <input placeholder="Chief Guest" onChange={e=>setForm({...form,chiefGuest:e.target.value})}/>

      <button onClick={add}>Add Event</button>
    </div>
  );
}