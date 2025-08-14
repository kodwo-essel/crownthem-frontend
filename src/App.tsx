import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/custom/Navbar';
import Footer from './components/custom/Footer';
import Landing from './pages/Landing';
import Event from './pages/Event';
import VotingEvents from './pages/VotingEvents';
import Category from './pages/Category';
import NomineeVoting from './pages/NomineeVoting';
import VotingSuccessful from './pages/VotingSuccessful';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-svh flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />

            {/* Voting Events listing */}
            <Route path="/voting-events" element={<VotingEvents />} />

            {/* Single event details */}
            <Route path="/voting-events/:eventId" element={<Event />} />

            {/* Event category */}
            <Route path="/voting-events/:eventId/:categoryId" element={<Category />} />

            {/* Nominee voting */}
            <Route path="/voting-events/:eventId/:categoryId/:nomineeId" element={<NomineeVoting />} />

            <Route path="/voting-success" element={<VotingSuccessful />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
