import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Feed, NotFound, Footer, MovieID, NavBar, SearchPage } from './pages'

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path="movies/:type" element={<Feed />} />
            <Route path="movie/:id" element={<MovieID />} />
            <Route path="search/:searchTerm" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App