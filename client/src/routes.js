import ItemShop from './pages/ItemShop/ItemShop';
import Admin from './pages/admin/Admin';
import ItemPage from './pages/itemPage/ItemPage';
import Auth from './pages/auth/Auth';
import Cart from './pages/Cart';
import {
    ITEM_SHOP_ROUTE, ITEM_PAGE_ROUTE,
    ADMIN_ROUTE, CART_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE,
} from "./utils/route_constants";

export const publicRoutes = [
    {path: ITEM_SHOP_ROUTE, element: <ItemShop />},
    {path: ITEM_PAGE_ROUTE + '/:id', element: <ItemPage />},
    {path: SIGN_IN_ROUTE, element: <Auth />},
    {path: SIGN_UP_ROUTE, element: <Auth />},
]

export const privateRoutes = [
    {path: ADMIN_ROUTE, element: <Admin />},
    {path: CART_ROUTE, element: <Cart />},
    ...publicRoutes
]