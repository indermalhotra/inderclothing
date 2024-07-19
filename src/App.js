import "./categories.styles.scss";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Signin from "./routes/signin/Signin";

function Shop() {
  return <h1>I am shop</h1>;
}

function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="signin" element={<Signin/>}/>
      </Route>
    </Routes>

  );
}

export default App;
