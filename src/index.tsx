import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Cart } from "./components/pages/Cart/Cart";
import { Favorites } from "./components/pages/Favorites/Favorites";
import { Profile } from "./components/pages/Profile/Profile";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Catalog } from "./components/pages/Catalog/Catalog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContacts } from "./components/pages/subPages/UserContacts/UserContacts";
import { DeliveryAddresses } from "./components/pages/subPages/DeliveryAddresses/DeliveryAddresses";
import { Orders } from "./components/pages/subPages/Orders/Orders";
import { Promotions } from "./components/pages/subPages/Promotions/Promotions";
import { BackCall } from "./components/pages/subPages/BackCall/BackCall";
import { DeliveryAndPayment } from "./components/pages/DeliveryAndPayment/DeliveryAndPayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart/",
        element: <Cart />,
      },
      {
        path: "favorites/",
        element: <Favorites />,
      },
      {
        path: "profile/",
        element: <Profile />,
        children: [
          {
            path: "contacts/",
            element: <UserContacts />
          },
          {
            path: "addresses/",
            element: <DeliveryAddresses />
          },
          {
            path: "orders/",
            element: <Orders />
          },
          {
            path: "promotions/",
            element: <Promotions />
          },
          {
            path: "backcall/",
            element: <BackCall />
          },
        ]
      },
      {
        path: "catalog/",
        element: <Catalog />,
      },
      {
        path: "delivery-payment/",
        element: <DeliveryAndPayment />
      }
    ],
  },
], { basename: "/" });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
