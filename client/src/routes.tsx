import { BrowserRouter, Route, Routes as DomRoutes } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/*" element={<>Hey there</>} />
      </DomRoutes>
    </BrowserRouter>
  );
};

export default Routes;
