import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import BrowsPage from "./pages/BrowsePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RandomPage from "./pages/RandomPage";
import TrendingPage from "./pages/TrendingPage";

export const links = [
  { path: "/", Component: HomePage, name: "Home" },
  { path: "/trending", Component: TrendingPage, name: "Trending" },
  { path: "/browse", Component: BrowsPage, name: "Browse" },
  { path: "/random", Component: RandomPage, name: "Random" },
  { path: "/about", Component: AboutPage, name: "About" },
];

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: links.map(({ name, ...rest }) => rest),
  },
]);
