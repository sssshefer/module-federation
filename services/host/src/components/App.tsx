import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {adminRoutes} from '@packages/shared/src/routes/admin';
import {shopRoutes} from '@packages/shared/src/routes/shop';

export const App = () => {

    return (
        <div data-testid={'AppTestId'}>
            <h1>Page</h1>
            <Link to={adminRoutes.about}>About</Link>
            <br/>
            <Link to={shopRoutes.main}>Shop</Link>
            <Outlet/>
        </div>
    );
};

