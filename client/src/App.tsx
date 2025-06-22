import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Lazy load platform pages for code splitting
const DoclyzePage = lazy(() => import("@/pages/platforms/doclyze"));
const SmartCrawlPage = lazy(() => import("@/pages/platforms/smartcrawl"));
const EngineeringPage = lazy(() => import("@/pages/platforms/engineering"));
const TeleportPage = lazy(() => import("@/pages/platforms/teleport"));
const PolicePage = lazy(() => import("@/pages/platforms/police"));

// Loading component for lazy-loaded pages
const PageSkeleton = () => (
  <div className="min-h-screen bg-white">
    <div className="border-b border-slate-200/50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-8 w-48" />
        </div>
      </div>
    </div>
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
          <Skeleton className="aspect-video rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platforms/doclyze">
        <Suspense fallback={<PageSkeleton />}>
          <DoclyzePage />
        </Suspense>
      </Route>
      <Route path="/platforms/smartcrawl">
        <Suspense fallback={<PageSkeleton />}>
          <SmartCrawlPage />
        </Suspense>
      </Route>
      <Route path="/platforms/engineering">
        <Suspense fallback={<PageSkeleton />}>
          <EngineeringPage />
        </Suspense>
      </Route>
      <Route path="/platforms/teleport">
        <Suspense fallback={<PageSkeleton />}>
          <TeleportPage />
        </Suspense>
      </Route>
      <Route path="/platforms/police">
        <Suspense fallback={<PageSkeleton />}>
          <PolicePage />
        </Suspense>
      </Route>
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
