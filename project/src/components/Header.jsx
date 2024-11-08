import './Header.css'
function Header () {
    return(
        <>
    <div className='header'>
        <div className="logo">
            <h1>comfort home furnitures</h1>
        </div>
        <div className="list">
            <ol className='items'>
                <li className="item"><a href="">home</a></li>
                <li className='item'><a href="">about us</a></li>
                <li className="item"><a href="">products</a></li>
                <li className="item"><a href="">testimonies</a></li>

            </ol>
        </div>
        
    </div>
    </>
    )
}
export default Header