import { Route, Routes } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import NewMidia from "./pages/NewMidia";
import NewProject from "./pages/NewProject";
import GlobalStyle from './styles/GlobalStyles'
export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Routes>
          <Route path="/" element={<NewProject/>}/>
          <Route path="/newmidia" element={<NewMidia/>}/>
          <Route path="/allprojects" element={<AllProjects/>}/>
      </Routes>
    </>
  );
}