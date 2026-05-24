1. Router 적용 방법 터미널에 npm i react-router 를 작성후 main.jsx에

import React from "react"; import ReactDOM from "react-dom/client"; import { createBrowserRouter } from "react-router"; import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([ { path: "/", element: <div>Hello World</div>, }, ]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render( <RouterProvider router={router} />, );

등 으로 경로를 설정한다.

2. Tailwind 적용법 npm install @tailwindcss/vite 설치 후 vite.config.js 에 import tailwindcss from '@tailwindcss/vite' index.css 에 @import "tailwindcss"; 작성
