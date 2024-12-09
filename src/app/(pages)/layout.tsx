"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { LoadingProvider } from "@/app/context/LoadingContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LoadingProvider>
        <Header />
        {children}
        <Footer />
      </LoadingProvider>
    </div>
  );
};

export default Layout;
