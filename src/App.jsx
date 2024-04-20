import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomeLayout from "./layouts/HomeLayout";
import AboutLayout from "./layouts/AboutLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./layouts/NotFound";
import Printing from "./pages/Printing";
import WebDesign from "./pages/WebDesign";
import GraphicsDesign from "./pages/GraphicsDesign";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<WebDesign />} />
        <Route path="graphics" element={<GraphicsDesign />} />
        <Route path="printing" element={<Printing />} />
      </Route>
      <Route path="about" element={<AboutLayout />} />
      <Route path="help" element={<HelpLayout />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
