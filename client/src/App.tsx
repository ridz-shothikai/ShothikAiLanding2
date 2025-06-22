import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import DoclyzePage from "@/pages/platforms/doclyze";
import SmartCrawlPage from "@/pages/platforms/smartcrawl";
import EngineeringPage from "@/pages/platforms/engineering";
import TeleportPage from "@/pages/platforms/teleport";
import PolicePage from "@/pages/platforms/police";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platforms/doclyze" component={DoclyzePage} />
      <Route path="/platforms/smartcrawl" component={SmartCrawlPage} />
      <Route path="/platforms/engineering" component={EngineeringPage} />
      <Route path="/platforms/teleport" component={TeleportPage} />
      <Route path="/platforms/police" component={PolicePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
