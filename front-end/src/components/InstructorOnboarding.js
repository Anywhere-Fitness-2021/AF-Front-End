import {Link} from 'react-router-dom';
export default function InstructorOnboarding(){
    return(
        <div>
        <div>
            <h1>Welcome to Anywhere Fitness!</h1>
            <p>Here you can:</p>
            <ul>
                <li>Create classes</li>
                <li>View number of registered attendees</li>
                <li>Set max class size</li>
                <li>Set location</li>
                <li>Set intensity Level</li>
                <li>Set duration</li>
            </ul>
            
        </div>
        <div>
       
            <Link to = "/"><button>Ok</button></Link>
     
        </div>            
        </div>
    )
}