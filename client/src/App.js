import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Home from "./view/Home"

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
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;