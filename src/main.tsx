import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./providers/cartProvider.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>

      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster reverseOrder={false} />
          <App />
        </QueryClientProvider>
      </CartProvider>

  </StrictMode>
);
