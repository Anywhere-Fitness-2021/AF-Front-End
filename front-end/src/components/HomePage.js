import { useHistory } from 'react-router-dom';

export default function HomePage(){

    let history = useHistory();

    const routeToSignUp = () => {
        history.push('/signup');
    }

    return(
        <>
            <div className ="home-container">
                <img className='home-image' src='https://cdn.pixabay.com/photo/2015/09/05/22/28/bodybuilder-925770_960_720.jpg'alt='marketing1'/>
                <button onClick={routeToSignUp} className='md-button getStarted-button'>Get Started</button>
            </div> 
            <div className ="home-wrapper">
                <div className ="description">
                    <div className ="description-img">
                        <img src ="https://media.istockphoto.com/photos/beautiful-young-mixed-race-woman-working-out-from-home-online-workout-picture-id1248698782?k=6&m=1248698782&s=612x612&w=0&h=CLdbSDEgs3xEZVPQ-54YDASx2dwu1R5zkcfqtlhe9jE=" alt ="marketing2"/>
                    </div>
                    <div className ="text">
                        Looking for the perfect app to help maintain your workout routine when you're on the go? <br/><br/> Welcome to ANYWHERE FITNESS - the perfect solution for all your fitness needs!
                    </div>
                </div>
                
                <div className ="description">
                    <div className ="text">
                        ANYWHERE FITNESS offers you an extensive variety of classes to choose from. <br/><br/> Signing up for all your favorite classes has never been easier!
                    </div>
                    <img src ="https://www.stockvault.net/data/2008/11/11/106597/preview16.jpg" alt ="marketing3"/>
                </div>

                <div className ="description">
                    <img src ="https://img.freepik.com/free-photo/cycling-equipment-healthy-fit-fitness_1139-686.jpg?size=626&ext=jpg" alt ="marketing4"/>
                    <div className ="text">
                        Sign up today and get fitter than ever with ANYWHERE FITNESS!
                    </div>
                </div>
            </div>
        </>
    )
}
