import { Route, Routes } from "react-router-dom";

import Home from "@/pages/home/home";
import Adopt from "@/pages/adopt/adopt";
import Mission from "@/pages/mission/mission";
import Support from "@/pages/support/support";
import Loggin from "@/pages/loggin/loggin";
import Register from "@/pages/register/register";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Adopt />} path="/adopta" />
      <Route element={<Mission />} path="/mision" />
      <Route element={<Support />} path="/apoya" />
      <Route element={<Loggin />} path="/iniciar-sesion" />
      <Route element={<Register />} path="/registrarse" />
    </Routes>
  );
}

export default App;
