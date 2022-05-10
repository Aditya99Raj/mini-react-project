import { Link } from "react-router-dom";
export const Navbar = () => {

   return (
       <div className="navbar" style={{display: 'flex',justifyContent: "space-evenly",backgroundColor:"teal"}}>
           <h2>
              <Link to="/">Home</Link> 
           </h2>
           <h2>
               <Link to="/about">About</Link>
           </h2>
           <h2>
               <Link to="/login">Login</Link>
           </h2>
           <h2>
               <Link to="/cartpage">Cart</Link>
           </h2>
       </div>
   )
}