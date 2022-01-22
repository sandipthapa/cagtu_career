import Footer from "./components/Footer";
import JobList from "./components/JobList";
import Navigation from "./components/Navigation";
import './assets/css/job-lists.css';
import UiUxDeveloper from "./components/UiUxDeveloper";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ReactDeveloper from "./components/ReactDeveloper";
import FlutterDev from "./components/FlutterDev";
import Django from "./components/Django";



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<JobList/>}/>
          <Route exact path='/ui' element={<UiUxDeveloper/>}/>
          <Route exact path='/react' element={<ReactDeveloper/>}/>
          <Route exact path='/flutter' element={<FlutterDev/>}/>
          <Route exact path='/django' element={<Django/>}/>
        </Routes> 
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
