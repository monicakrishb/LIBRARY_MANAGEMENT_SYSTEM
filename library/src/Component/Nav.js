import { Link } from "react-router-dom"
import { isAuthenticated } from "../services/Auth"
import './Nav.css';
function Nav(props) {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">JVLcode</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    {!isAuthenticated() ? <li className="nav-item register"><Link className="nav-link" to="/register">Register</Link></li> : null}
                    {!isAuthenticated() ? <li><Link className="nav-link login" to="/login" >Login</Link></li> : null}
                    {isAuthenticated() ? <li className="nav-item dashboard"><Link className="nav-link" to="/dashboard" >Dashboard</Link></li> : null}
                    {isAuthenticated() ? <li><a className="nav-link logout" href="#" onClick={props.logoutUser} >Logout</a></li> : null}
                </ul>
                <div className='fav'><Link to="/favourites"><h5>Wishlist</h5></Link>
                </div>
                <i className="fas fa-heart"></i>
                <div className='cart '>
                    <Link to="/booksearch"> <h5>search</h5></Link>

                    <span> <i className="fa fa-search" aria-hidden="true"></i>
                    </span></div>
            </div>
        </nav>

    )
}
export default Nav