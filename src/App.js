import "./App.css";

import Home from "./pages/Home.js";
import Trade from "./pages/Trade.js";
import News from "./pages/News.js";
import Notifications from "./pages/Notifications.js";

import {useState, useEffect} from 'react'

import Layout from "./layout/Layout.js";
import { Route, Routes } from "react-router-dom";

function App() {


  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    fetch("https://inshortsapi.vercel.app/news?category=science")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, []);
  
console.log('s')
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/paper-hands" element={<Home />} />
          <Route path="/paper-hands/trade" element={<Trade />} />
          <Route path="/paper-hands/news" element={<News props={items, isLoaded, error}/>} />
          <Route path="/paper-hands/notifications" element={<Notifications />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
