import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Home from "./view/Home"
import Signup from "./view/Signup"
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="home">
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/signup"
                    element={<Signup />}
                />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;