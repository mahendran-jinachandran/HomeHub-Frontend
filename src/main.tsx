import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./components/LandingPage.tsx";
import SignUp from "./components/SignUp.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import Login from "./components/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
