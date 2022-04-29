import { Route, Routes } from "react-router-dom";
import ApresentationPage from "./pages/ApresentationPage";
import ListingPage from "./pages/ListingPage";
import ProjectPage from "./pages/projectPage";

export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<ApresentationPage/>}/>
        <Route path="/listing-page" element={<ListingPage/>}/>
        <Route path="/project-page" element={<ProjectPage/>}>
          <Route path=":destination" element={<ProjectPage/>}/>
        </Route>
      </Routes>
    </>
  );
}