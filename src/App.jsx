import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="">
      <Sidebar />
      <div className="content">
        {/* <Navbar /> */}
        <div className="home-content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
