import { Link } from 'react-router-dom';

export default function UserOnboarding(){
    return(
        <>
            <div className='user-onboarding-container'>
                <h1>Welcome to Anywhere Fitness!</h1>
                <p>Here you can:</p>
                <ul>
                    <li>Sign Up/Attend Class</li>
                    <li>View number of registered attendees</li>
                    <li>View intensity Level</li>
                    <li>View duration</li>
                </ul>
            </div>
            <Link to = "/"><button>Ok</button></Link>
        </>
    )
}
