"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient: QueryClient = new QueryClient();

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
