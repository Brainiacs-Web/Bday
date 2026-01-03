import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayPopup from "./pages/BirthdayPopup";
import MemeCat from "./pages/MemeCat";
import SongMemory from "./pages/SongMemory";
import VintageLetter from "./pages/VintageLetter";
import GiftBox from "./pages/GiftBox";
import FinalNote from "./pages/FinalNote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BirthdayPopup />} />
          <Route path="/meme-cat" element={<MemeCat />} />
          <Route path="/song-memory" element={<SongMemory />} />
          <Route path="/vintage-letter" element={<VintageLetter />} />
          <Route path="/gift-box" element={<GiftBox />} />
          <Route path="/final-note" element={<FinalNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
