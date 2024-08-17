import "./categories.styles.scss";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Auth from "./routes/authetication/Auth";
import Shop from "./routes/shop/Shop";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Auth/>}/>
      </Route>
    </Routes>

  );
}

export default App;
