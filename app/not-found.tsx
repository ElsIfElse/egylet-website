import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
            <h1>404 sucka</h1>
            <Link className="link" href="/">Vissza a főoldalra</Link>
        </div>
     );
}
 
export default NotFound;