import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import IWantTo from "./pages/IWantTo";
import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Host from "./pages/Host";
import Places from "./pages/Places";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import CategoryEvents from "./pages/CategoryEvents";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL, BE_URL } from "./constant";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  const getProfile = async () => {
    const res = await axios.get(`${BE_URL}/users/profile`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    // console.log(res.data);
    dispatch({
      type: "STORE_USER",
      payload: res.data,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/host" element={<Host />} />
        <Route path="/iwantto" element={<IWantTo />} />
        <Route path="/places" element={<Places />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:category" element={<CategoryEvents />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
