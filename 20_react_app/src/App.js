import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Main from "./pages/Main";
import Blogs from "./pages/Blogs";
import Guestbooks from "./pages/Guestbooks";
import Stores from "./pages/Stores";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BasicLayout/>}>
            <Route path="/" element={<Main/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/guestbooks" element={<Guestbooks/>}/>
            <Route path="/stores" element={<Stores/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;   // export 선언이 있어야 다른곳에서 import 가 가능합니다.
