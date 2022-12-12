import Main from "../layout/Main";
import Banner from "../pages/banner/Banner";
import MySkills from "../pages/skills/MySkills";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        element: <Main></Main>,
        path: '/',
        children: [
            // {
            //     path: '/',
            //     element: <Banner></Banner>
            // },
            // {
            //     path: '/',
            //     element: <MySkills></MySkills>
            // }
        ]
    }
])
export default router;