import { Home, Rps, EtchSketch, Calculator } from './pages/index.jsx'
import { SharedLayout } from './components/index.jsx'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";



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
            <Route path='/etch' element={<EtchSketch />} />
            <Route path='/calculator' element={<Calculator />} />
        </Route>
    )
)
export default App
