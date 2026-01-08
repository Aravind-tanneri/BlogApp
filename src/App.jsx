import "./index.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useSearchParams, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {

    const page =  searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route index element = {<Home/>}   />
      <Route path="/BlogPage" element = {<BlogPage/>}   />
      <Route path="/CategoryPage" element = {<CategoryPage/>}   />
      <Route path="/TagPage" element = {<TagPage/>}   />
    </Routes>
  );
}