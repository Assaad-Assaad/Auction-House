// App.jsx
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auctions from './pages/Auctions';
import CategoryAuctions from './pages/CategoryAuctions'
import AuctionDetails from './pages/AuctionDetails';
import ProfilePage from './pages/ProfilePage';
import AdminAuctions from './pages/admin/AdminAuctions';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/auctions/:id" element={<AuctionDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/auctions" element={<AdminAuctions />} />
          <Route path="/auctions/category/:id" element={<CategoryAuctions />} />
        </Routes>
      </main>
    </>
  );
}

export default App;