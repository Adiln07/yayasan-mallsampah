import { Routes, Route } from "react-router-dom";
import BerandaPage from "./pages/Beranda/BerandaPage";
import TentangKamiPage from "./pages/TentangKami/TentangKamiPage";
import ProgramPage from "./pages/Program/ProgramPage";
import BeritaPage from "./pages/Berita/BeritaPage";
import BeritaContentPage from "./pages/Berita/BeritaContentPage";
import Kontak from "./pages/Kontak/Kontak";
import LoginAdmin from "./pages/Auth/LoginAdmin";
import ManajemenBerita from "./pages/Admin/ManajemenBerita";
import Berita from "./pages/Admin/Berita";
import EditBerita from "./pages/Admin/EditBerita";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BerandaPage />} />
        <Route path='/TentangKami' element={<TentangKamiPage />} />
        <Route path='/Program' element={<ProgramPage />} />
        <Route path='/Berita' element={<BeritaPage />} />
        <Route path='/Berita-Content' element={<BeritaContentPage />} />
        <Route path="/Kontak" element={<Kontak />} />
        <Route path="/Login" element={<LoginAdmin />} />
        <Route path="/Tabel-Berita"  element={<ManajemenBerita />} />
        <Route path="/Form-Berita"  element={<Berita />} />
        <Route path="/Edit-Form-Berita"  element={<EditBerita />} />
      </Routes>
    </div>
  );
}

export default App;
