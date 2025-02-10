import { Router } from 'wouter';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Add base for GitHub Pages
const base = process.env.NODE_ENV === 'production' 
  ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}`
  : '';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router base={base}>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
