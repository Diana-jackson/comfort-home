import "./Home.css"
import product1 from "../assets/prod1.jpg"
import product2 from "../assets/prod2.jpg"
import product3 from "../assets/prod3.jpg"
import product4 from "../assets/prod4.jpg"
import product5 from "../assets/prod5.jpg"
function Products () {
    return(
        <>
        <div className="products-section">
            <div className="products-text">
                <h1>our products</h1>
                <p >sustainable, affordable and compatible</p>
            </div>
            <div className="products-images">
                <div className="prod-container">
                    <img src={product1} alt="" />
                    <div className="prod-text">
                    <h4>mahoghany wardrobe</h4>
                    <p>$49.47</p>
                    </div>
                </div>
                <div className="prod-container">
                    <img src={product2} alt="" />
                    <div className="prod-text">
                    <h4>vanity relaxing coach</h4>
                    <p>$78.97</p>
                    </div>
                </div>
                <div className="prod-container">
                    <img src={product3} alt="" />
                    <div className="prod-text">
                    <h4>low height chairs</h4>
                    <p>$48.81</p>
                    </div>
                </div>
                <div className="prod-container">
                    <img src={product4} alt="" />
                    <div className="prod-text">
                    <h4>office chair</h4>
                    <p>$98.47</p>
                    </div>
                </div>
                <div className="prod-container">
                    <img src={product5} alt="" />
                    <div className="prod-text">
                    <h4>butterfly pillow chairs</h4>
                    <p>$72.40</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Products