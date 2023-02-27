import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import React from 'react';
import { useNavigate } from 'react-router-dom';



function handleChange(e){
  // console.log(e)
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "X-Api-Key": "Y2ZhZWRjNTUtZWQzNS00YjRkLWEwMmEtOTM5ZTE5NjNkOWZh"
    },
    body: JSON.stringify({
      id: e.event.id,
      description: e.event.title,
      start: e.event.start.toISOString(),
      end: e.event.end.toISOString()
    })
  };
  const response = fetch(`https://api.clockify.me/api/v1/workspaces/5e0ddcf5579d860ff456dc3b/time-entries/${e.event.id}`,requestOptions)
  const data = response.then((res)=>res.json());
  // console.log(data)
}


function Calendar() {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  function handleClick(e){
    console.log(e)
    let body = {
      project: "e.event.project",
      title: e.event._def.title,
      description: e.event._def.title,
      duration: "e.event.duration",
      start: e.event._instance.range.start,
      end: e.event._instance.range.start,
    }

    

    navigate("/details",{ state: { data: body }})
  }
  React.useEffect(() => {
  fetch('https://api.clockify.me/api/v1/workspaces/5e0ddcf5579d860ff456dc3b/user/63c1550cce4abb1e1c035ed9/time-entries',
   {
    method: "GET",
    headers: {
      "X-Api-key": "Y2ZhZWRjNTUtZWQzNS00YjRkLWEwMmEtOTM5ZTE5NjNkOWZh"
    }
   })
  
   .then(res => res.json())
   .then((result)=>{
    let events = result.map((item) => {
      return {
        id: item.id,
        title: item.description,
        start: item.timeInterval.start,
        end: item.timeInterval.end
      }
    })
    setData(events)
  //  console.log(data)
   },(error) => console.log(error));
  },[])

  React.useEffect(() => {
    // console.log(data)
    },[data])

    
  
  return (
      <div className="App">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar = {{
            start:'title',
            center:'dayGridMonth,timeGridWeek,timeGridDay',
            end: 'today,prev,next'
          }}
          selectable={true}
          editable={true}
          events= {data}
          selectMirror = {true}
          dayMaxEvents = {true}
          // weekends = {state.weekendsVisible}
          eventColor={'blue'} 
          eventChange = {(e)=> handleChange(e)}
          eventClick = {(e) => handleClick(e)}
        />
      </div>
    );
}

  export default Calendar;


//   import { useNavigate } from "react-router-dom";

// function SendingComponent() {
//   const navigate = useNavigate();
//   const sendObject = () => {
//     const myObject = { name: "John", age: 30 };
//     navigate("/receiving-component", { state: { data: myObject } });
//   };

//   return <button onClick={sendObject}>Send Object</button>;
// }

// import { useLocation } from "react-router-dom";

// function ReceivingComponent() {
//   const location = useLocation();
//   const myObject = location.state.data;

//   return (
//     <div>
//       <h2>Name: {myObject.name}</h2>
//       <h2>Age: {myObject.age}</h2>
//     </div>
//   );
// }