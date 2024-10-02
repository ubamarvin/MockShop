//Navbar.jsx
import { Link } from "react-router-dom"

export default function NavBar(){


    return (
        <div>
          <nav>
            <span>MockShop</span>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <button>CheckOut</button>
          </nav>
        </div>
    )
}