import Layout from "../Components/HOC/layout";
import "./App.css";
import Home from "../Components/Pages/Home";
import About from '../Components/Pages/about'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "../Components/PageComponents/Form/modelForm";
import NewFile from '../Components/Pages/Newfile'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/form" element={<Form/>} />
          <Route path='/newfile' element={<NewFile/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
