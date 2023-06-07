import NavBar from "./components/index.jsx";
import { Rps, EtchSketch } from './apps/index.jsx'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./Home.jsx";
import SharedLayout from "./SharedLayout.jsx";

const App = () => {

    return (
        <RouterProvider router={router} />
  )
}
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/rps' element={<Rps />} />
        </Route>
    )
)
export default App
