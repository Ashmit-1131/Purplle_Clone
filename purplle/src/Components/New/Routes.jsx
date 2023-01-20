import {Route,Routes} from "react-router-dom"
import New from "./New";
import ProductPage from "./ProductPage";

export default function NewRoutes() {
    return (
      <Routes>
        <Route path="/" element={<New />} />
        <Route
          path="/:_id"
          element={
              <ProductPage />
          }
        />
      </Routes>
    );
  }
  