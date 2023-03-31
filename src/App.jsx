import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom"

// pages
import AboutPage from "./pages/About"
import HomePage from "./pages/Home"

// layouts
import RootLayout from "./layout/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
