import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Dashboard from "./components/pages/dashboard"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />}> </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
