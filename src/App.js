import "./App.css";
import TopBar from "./components/Topbar/TopBar";
import SideMenu from "./components/SideMenu/SideMenu";
import ContentPage from "./components/ContentPage/ContentPage";

function App() {
  return (
    <div className="wrapper ">
      <TopBar></TopBar>
      <SideMenu></SideMenu>
      <ContentPage></ContentPage>
    </div>
  );
}

export default App;
