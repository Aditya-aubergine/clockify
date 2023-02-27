import { useLocation } from "react-router-dom";

const Details = () => {
    const {state} = useLocation();
    const { project,title, description, duration, start , end } = state.data;
    return (
        <section className="section">
            <h2>Event Details</h2>
             <p>Project Name: {project}</p>
             <p>Task Name: {title}</p>
             <p>Description: {description}</p>
             <p>Duration: {duration}</p>
             <p>Start time: {start.toISOString()}</p>
             <p>End time: {end.toISOString()}</p>
        </section>
    )
}

export default Details;