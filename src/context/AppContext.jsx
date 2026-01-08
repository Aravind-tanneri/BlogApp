import { createContext, useState, useEffect } from "react";
import {baseUrl} from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  //Handle Dark Mode Logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  //Data Fetching Logic
  async function fetchBlogPosts(page = 1, tag=null, category=null) {
    setLoading(true);
    //Build the URL
    let url = `${baseUrl}?page=${page}`;
    if(tag) url += `&tag=${tag}`;
    if(category) url += `&category=${category}`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching blog posts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  //Handle Page Change
  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    posts, setPosts,
    loading, setLoading,
    page, setPage,
    totalPages, setTotalPages,
    fetchBlogPosts,
    handlePageChange,
    darkMode, toggleTheme
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}