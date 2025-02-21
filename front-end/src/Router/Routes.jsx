import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/accueil"
import DetailById from "../pages/Detail/DetailById";

const RoutesPosts = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/:id" element={<DetailById />} />



    </Routes>
  );
};

export default RoutesPosts;