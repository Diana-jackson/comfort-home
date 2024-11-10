import "./Home.css"
import profileImg from "../assets/bcg.jpg"

function Testimonies () {
    return(
        <>
        <div className="testimonies-section">
            <div className="test-title">
            <h1>our happy clients</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore neque.</p>
            </div>
           <div className="container">
           <div className="test-card">
                <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quibusdam quas laudantium officiis ipsam impedit corporis tenetur minima delectus quam!</p>
                <div className="profile">
                    <div className="profile-image">
                        <img src={profileImg} alt="" />
                    </div>
                    <div className="profile-text">
                    <h4>roman winters</h4>
                    <p>CEO maridady motors limited</p>
                    </div>
                </div>
            </div>
            <div className="test-card">
                <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quibusdam quas laudantium officiis ipsam impedit corporis tenetur minima delectus quam!</p>
                <div className="profile">
                    <div className="profile-image">
                        <img src={profileImg} alt="" />
                    </div>
                    <div className="profile-text">
                    <h4>roman winters</h4>
                    <p>CEO maridady motors limited</p>
                    </div>
                </div>
            </div>
            <div className="test-card">
                <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quibusdam quas laudantium officiis ipsam impedit corporis tenetur minima delectus quam!</p>
                <div className="profile">
                    <div className="profile-image">
                        <img src={profileImg} alt="" />
                    </div>
                    <div className="profile-text">
                    <h4>roman winters</h4>
                    <p>CEO maridady motors limited</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
        </>
    )
}
export default Testimonies