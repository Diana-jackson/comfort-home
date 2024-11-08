import image1 from "../assets/about.jpg"
import image2 from "../assets/bcg2.jpg"
import "./Home.css"
function About (){
    return(
        <>
        <div className="about-section">
            
            <div className="about-text">
            <h1 className="title">about us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quod facere pariatur neque consectetur odit inventore error dolore autem omnis voluptatem quo est, voluptatibus quas, quae fuga magnam. Unde, impedit.</p>

            </div>
            <div className="about-images">
                <img id="img1" src={image2} alt="" />
                <img id="img2" src={image1} alt="" />

            </div>
            
        </div>
        </>
    )
}
export default About