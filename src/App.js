import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import IWantTo from "./components/IWantTo";

function App() {
  return (
    <>
      <LogIn />
      <hr></hr>
      <SignUp />
      <hr></hr>
      <IWantTo />
      <hr></hr>

      <NavBar />
      <SideBar />
    </>
  );
}

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={< />}>
      <Route index element={< />} />
      <Route path="blogs" element={</>} />
      <Route path="contact" element={< />} />
      <Route path="*" element={< />} />
    </Route>
  </Routes>
</BrowserRouter>; */
}

export default App;
