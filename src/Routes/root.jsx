import { Outlet, Link } from "react-router-dom";

export default function Root () {


    return(
        <div>
          <nav>This will be the NavBar i guess
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </nav>
          <Outlet />
        </div>
    );
}