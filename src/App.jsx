import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./core/i18n"





function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
