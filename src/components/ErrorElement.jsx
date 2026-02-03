import { Link } from "react-router"

export default function ErrorElement() {

    return (<>
        <h2>Oops.. </h2>
        <p>We couldn't find the page that you are looking for</p>
        <p>Click <Link to='/'>here</Link> to go back to the home page</p>
    </>)
}