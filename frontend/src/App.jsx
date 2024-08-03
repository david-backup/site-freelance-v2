import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/" : "";
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
