import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/index.js";
import { Body } from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./domains/Home/index.jsx";
import { LanguageContextProvider } from "./context/LanguageContext.jsx";
import { Wedding } from "./domains/Wedding/index.jsx";
import { PreWedding } from "./domains/Wedding/pages/preWedding/index.jsx";
import { DressCode } from "./domains/Wedding/pages/dressCode/index.jsx";
import { Gifts } from "./domains/Wedding/pages/gifts/index.jsx";
import Travel from "./domains/Travel/index.jsx";
import RioDeJaneiro from "./domains/RJ/index.jsx";
import Buzios from "./domains/Buzios/index.jsx";
import QeA from "./domains/Q&A/index.jsx";
import Historia from "./domains/Historia/index.jsx";
import { TeamBrideGroom } from "./domains/TeamBrideGroom/index.jsx";

//teste

const router = createBrowserRouter([
  {
    element: <Body />,
    children: [
      {
        path: "/",
        children: [
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "wedding",
            element: <Wedding />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "wedding/prewedding",
            element: <PreWedding />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "wedding/dresscode",
            element: <DressCode />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "wedding/gifts",
            element: <Gifts />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "travel",
            element: <Travel />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "travel/rio-de-janeiro",
            element: <RioDeJaneiro />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "travel/buzios",
            element: <Buzios />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "qea",
            element: <QeA />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "nossa-historia",
            element: <Historia />,
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "teamBG",
            element: <TeamBrideGroom />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageContextProvider>
        <RouterProvider router={router} />
      </LanguageContextProvider>
    </ThemeProvider>
  );
}

export default App;
