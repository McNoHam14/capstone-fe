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
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL, BE_URL } from "./constant";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Spinner } from "react-bootstrap";

function App()
{
  const dispatch = useDispatch();

  const [profileLoading, setProfileLoading] = useState(true);

  const getProfile = async () =>
  {
    try
    {
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
    } catch (error) { }
    setProfileLoading(false);
  };

  useEffect(() =>
  {
    if (localStorage.getItem("token"))
    {
      getProfile();
    } else
    {
      setProfileLoading(false);
    }
  }, []);

  if (profileLoading)
  {
    return <center><Spinner animation="border" variant="primary" style={{position:"absolute",top:"40%"}} /></center>
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/host" element={<Host />} />
        <Route path="/iwantto" element={<IWantTo />} />
        <Route path="/places" element={<Layout><Places style={{ position: "relative", left: "50%", top: "10%" }} /> </Layout>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/events/:category" element={<CategoryEvents />} /> */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
