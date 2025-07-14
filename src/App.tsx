import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VesselLocation from "./pages/VesselLocation";
import EngineData from "./pages/EngineData";
import ManagementData from "./pages/ManagementData";
import InspectionData from "./pages/InspectionData";
import PortCallsByVessel from "./pages/PortCallsByVessel";
import PortCallsByPort from "./pages/PortCallsByPort";
import Weather from "./pages/Weather";
import PortReport from "./pages/PortReport";
import VesselsByArea from "./pages/VesselsByArea";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vessel-location" element={<VesselLocation />} />
          <Route path="/engine-data" element={<EngineData />} />
          <Route path="/management-data" element={<ManagementData />} />
          <Route path="/inspection-data" element={<InspectionData />} />
          <Route path="/port-calls-by-vessel" element={<PortCallsByVessel />} />
          <Route path="/port-calls-by-port" element={<PortCallsByPort />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/port-report" element={<PortReport />} />
          <Route path="/vessels-by-area" element={<VesselsByArea />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
