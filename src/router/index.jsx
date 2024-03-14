
import { Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import * as mod from "../components/About/About.jsx";

const aboutP = import('../components/About/About.jsx')
console.log(aboutP.then((params) => {
    console.log(params);
    console.log(params === mod);
}));

const About = lazy(() => import('../components/About/About.jsx')  )
const Home = lazy(() => { import('../components/Home/Home.jsx') })


const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element:
            <Suspense fallback={<div>loading</div>}>
                <div>home</div>
            </Suspense>

    },
    {
        path: "/about",
        element: <Suspense fallback={<div>loading</div>}>
            <About/>
        </Suspense>
    }
]
function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }
  
export default routes;


// const baseRouter = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<App />}>
//                     <Route path="/" element={<Navigate to="/home"/>}></Route>
//                     <Route path="/home" element={<Home />}></Route>
//                     <Route path="/about" element={<About />}></Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )

// }

// export default baseRouter