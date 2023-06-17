import './cssStyles/home.css'
import {Link} from 'react-router-dom';

function Home(params) {
    return (
        <div className="home">
            <h1>this is my home page</h1>
            <h4>this is my home page</h4>

            <Link className='btn btn-primary' aria-current="page" to='/catalog'>Go to Catalog</Link>
        </div>
    );
}
export default Home;