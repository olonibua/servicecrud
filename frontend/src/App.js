import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./pages/service/Service";
import DisplayedService from "./pages/DisplayedService/DisplayedService";
import CreateService from "./pages/CreateServiceView/CreateService";
import EditService from "./pages/EditServiceView/EditService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/service" element={<DisplayedService />} />
          <Route path="/createService" element={<CreateService />} />
          <Route path="/editService" element={<EditService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
