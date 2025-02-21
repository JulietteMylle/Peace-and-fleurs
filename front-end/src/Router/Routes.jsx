import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/accueil"
import DetailById from "../pages/Detail/DetailById";
import AddFlower from "../pages/Ajouter/Ajouter";

const RoutesPosts = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/:id" element={<DetailById />} />
      <Route path="/flowers" element={<AddFlower />} />



    </Routes>
  );
};

export default RoutesPosts;