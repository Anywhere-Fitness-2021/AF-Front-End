import {Link} from 'react-router-dom';

export default function UserOnboarding(){
return(
    <div>
        <div>
            <h1>Welcome to Anywhere Fitness!</h1>
            <p>Here you can:</p>
            <ul>
                <li>Sign Up/Attend Class</li>
                <li>View number of registered attendees</li>
                <li>View intensityLevel</li>
                <li>View Duration</li>
            </ul>
            
        </div>
        <div>
       
            <Link to = "/"><button>Ok</button></Link>
     
        </div>
    </div>
)
}