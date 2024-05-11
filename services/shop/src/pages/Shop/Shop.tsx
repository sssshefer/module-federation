import React from 'react';
import {Link} from "react-router-dom";
import {shopRoutes} from "@packages/shared/src/routes/shop";

const Shop = () => {
    return (
        <h1>
            SHOP
            <span>
              <Link to={shopRoutes.second}>Go to second page</Link>
            </span>
        </h1>
    );
};

export default Shop;