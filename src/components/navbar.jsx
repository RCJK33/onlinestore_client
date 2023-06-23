import { useContext} from "react";
import "./cssStyles/navbar.css"
import { Link } from 'react-router-dom';
import StoreContext from "../store/storeContext";


function Navbar() {
    let {user, getCartCount} = useContext(StoreContext);

    return (
        <nav className="navbar navbar-expand-lg bg-secondary-subtle">
            <div className="container-fluid">
                <Link className="navbar-brand" aria-current="page" to='/'>Dairy and Fruit</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/catalog'>Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/admin'>Admin</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link className='btn btn-outline-success position-relative' to='/cart'>
                            <i className="i-cart fa-solid fa-cart-shopping"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-warning" hidden={getCartCount() === 0}>
                                {getCartCount()}
                            </span>
                        </Link>
                        <label className="lbl-user">
                            <i className="i-user fa-solid fa-circle-user"></i>
                            {user.name}
                        </label>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;