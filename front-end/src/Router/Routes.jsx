import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/accueil"

const RoutesPosts = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />

    </Routes>
  );
};

export default RoutesPosts;