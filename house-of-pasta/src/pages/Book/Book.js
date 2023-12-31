
 import React  from 'react';
 import {useState} from 'react'
 import './Book.css'
function Book() {
  const[name,setName] = useState()
  const[date,setDate] = useState()
  const[time,setTime] = useState()
  function createBooking() {
   
    const newTask = {
      name:name,
      date:date,
      time:time
    };
    fetch('https:649b8f40048075719236b5a0.mockapi.io/api/bookings', {
 method: 'POST',
  headers: {'content-type':'application/json'},

body: JSON.stringify(newTask)
}).then(res => {
if (res.ok) {
    return res.json()

}

}).then(task => {
getBooking()
}).catch(error => {

})
  }
  function getBooking(){
    fetch('https:649b8f40048075719236b5a0.mockapi.io/api/bookings', {
      method: 'GET',
       headers: {'content-type':'application/json'},
     }).then(res => {
     if (res.ok) {
       var resJson=res.json()
      console.log(resJson)
         return resJson;
     
     }
     
     }).then(task => {
      
       alert("Hello "+name+ ", Thank you for making a reservation. We are expecting you on "+date +" at  "+time+"." )    
    
     }).catch(error => {
     
     })
       }

  
    
    return (
        
        
        <div className='booking'>
          <div>
         <div> <label htmlFor="Name">Name</label></div>
            <input onChange={(e) => setName(e.target.value)} type="text"  /></div>
            
            <div>
              <div> <label htmlFor="">Date</label></div>
             
            <input type="date" id="meeting-time"
       name="meeting-time" 
       onChange={(e) => setDate(e.target.value)}></input>
            </div>
            <div>
              <div><label htmlFor="">Time</label></div>
              
               <input type="time" name="" id="" onChange={(e) => setTime(e.target.value)}/></div>
      
            <button className="but" onClick={createBooking}>Book</button>
            <div className='end1'>******</div>
           
        </div>
       
    )
 }
       export default Book
