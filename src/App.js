
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import MovieList from './component/header/MovieList/MovieList';
import Movie from './pages/home/MovieDetails/Movie';
import Footer from './component/header/MovieList/Footer';




function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<Movie/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>Error Not Found</h1>}></Route>
          
  
       
  </Routes>
      
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
