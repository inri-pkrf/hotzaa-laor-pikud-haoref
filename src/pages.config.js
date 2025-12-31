import Category from './pages/Category';
import Contact from './pages/Contact';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Category": Category,
    "Contact": Contact,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};