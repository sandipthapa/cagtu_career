import Footer from "./components/Footer";
import JobList from "./components/JobList";
import Navigation from "./components/Navigation";
import './assets/css/job-lists.css';
import UiUxDeveloper from "./components/UiUxDeveloper";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ReactDeveloper from "./components/ReactDeveloper";



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<JobList/>}/>
          <Route path='/ui' element={<UiUxDeveloper/>}/>
          <Route path='/react' element={<ReactDeveloper/>}/>
        </Routes> 
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
