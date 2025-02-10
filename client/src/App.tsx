import { Router, Route } from 'wouter';
import { useState, useEffect } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Custom hook for hash-based routing
const useHashLocation = () => {
  const [loc, setLoc] = useState(window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const handler = () => {
      setLoc(window.location.hash.replace('#', '') || '/');
    };

    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [loc, navigate];
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation}>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
