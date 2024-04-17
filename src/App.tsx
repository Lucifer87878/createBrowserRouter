import { Route, Routes } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const AboutUs = () => <h1>About Us Page</h1>;

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}



export default App
