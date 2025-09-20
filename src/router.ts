import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import About from "./pages/About";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Trending from "./pages/Trending";

export const links = [
  { path: "/", Component: Home, name: "Home" },
  { path: "/trending", Component: Trending, name: "Trending" },
  { path: "/browse", Component: Browse, name: "Browse" },
  { path: "/random", Component: Random, name: "Random" },
  { path: "/about", Component: About, name: "About" },
];

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: links.map(({ name, ...rest }) => rest),
  },
]);
