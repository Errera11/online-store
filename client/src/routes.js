import ItemShop from './pages/ItemShop';
import Admin from './pages/Admin';
import ItemPage from './pages/ItemPage';
import Auth from './pages/auth/Auth';
import Cart from './pages/Cart';
import {
    ITEM_SHOP_ROUTE, ITEM_PAGE_ROUTE,
    ADMIN_ROUTE, CART_ROUTE, AUTH_ROUTE,
} from "./utils/route_constants";

export const publicRoutes = [
    {path: ITEM_SHOP_ROUTE, element: <ItemShop />},
    {path: ITEM_PAGE_ROUTE, element: <ItemPage />},
    {path: AUTH_ROUTE, element: <Auth />},
]

export const privateRoutes = [
    {path: ADMIN_ROUTE, element: <Admin />},
    {path: CART_ROUTE, element: <Cart />},
    ...publicRoutes
]