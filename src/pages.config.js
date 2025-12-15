import Home from './pages/Home';
import Contact from './pages/Contact';
import Category from './pages/Category';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Contact": Contact,
    "Category": Category,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};