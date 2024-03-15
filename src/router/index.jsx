
import { Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";


const About = lazy(() => import('../components/About/About'))
const Home = lazy(() => import('../components/Home/Home'))
const Page = lazy(() => import('../components/Page/Page'))

const wrapComponentWithSuspense = (comp) => (
    <Suspense fallback={<div>loading</div>}>
        {comp}
    </Suspense>
)


const routes = [
    {
        path: "/",
        element: <Navigate to="/page" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page",
                element: wrapComponentWithSuspense(<Page />)
            },
            {
                path: "/about",
                element: wrapComponentWithSuspense(<About />)
            }
        ]

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