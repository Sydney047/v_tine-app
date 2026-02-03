import App from "../App";
import ErrorElement from "./ErrorElement";
import Celebration from "./Celebrations";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement />,
    },
    {
        path: 'celebrations',
        element: <Celebration />,
    },
]

export default routes