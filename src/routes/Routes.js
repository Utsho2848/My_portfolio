import Main from "../layout/Main";
import Banner from "../pages/banner/Banner";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        element: <Main></Main>,
        path: '/',
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            }
        ]
    }
])
export default router;