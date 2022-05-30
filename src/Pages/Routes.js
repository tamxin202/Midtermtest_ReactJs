import Home from './Home';
import About from './About';
import Add from './Add';
import Chinhtri from './Chinhtri';
const  routes = [
    {
        path: "/",
        name: "Trang Chủ",
        component: <Home/>
    },
    {
        path: "/contact",
        name: " Chính Trị",
        component:<Chinhtri/>
    },
    {
        path: "/about",
        name: "Đời sống",
        component: <About/>
    },
    {
        path: "/add",
        name: "Admin",
        component: <Add/>
    }
];
export default routes;