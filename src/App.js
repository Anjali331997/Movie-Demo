import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './Pages/Movies';
import MovieDetails from './Components/MovieDetails/MovieDetails';



function App() {

  return (
    <Movies/>
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path='/' index element={<Movies/>}/>
  //     <Route path='/movie/:if' index element={<MovieDetails/>}/>
  //   </Routes>
  // </BrowserRouter>
  );
}

export default App;
