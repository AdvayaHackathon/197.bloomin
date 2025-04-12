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
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";
import TestConnection from './pages/TestConnection';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <FloatingCollabButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/happenings" element={<Happenings />} />
            <Route path="/built-by" element={<BuiltBy />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/dashboard/:role" element={<Dashboard />} />
            <Route path="/test-connection" element={<TestConnection />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
