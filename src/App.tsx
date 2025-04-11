import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Collaborate from "./pages/Collaborate";
import FeaturesPage from "./pages/FeaturesPage";
import Happenings from "./pages/Happenings";
import BuiltBy from "./pages/BuiltBy";
import NotFound from "./pages/NotFound";
import FloatingCollabButton from "./components/FloatingCollabButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingCollabButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/happenings" element={<Happenings />} />
          <Route path="/built-by" element={<BuiltBy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
