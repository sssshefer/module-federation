import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {Shop} from "@/pages/Shop";
import {UserCard} from "@packages/shared/src/components/UserCard";

const routes = [
    {
        path: '/shop',
        element: <App/>,
        children: [

            {
                path: '/shop/main',
                element: <Suspense fallback={'Loading...'}><Shop/></Suspense>

            },
            {
                path: '/shop/second',
                element: <Suspense fallback={'Loading...'}>
                    <h1 style={{color: 'blue'}}>Second page</h1>
                    <UserCard username={'FROM SHOP'}/>
                </Suspense>

            }
        ]

    }
]
export const router = createBrowserRouter(routes)

export default routes