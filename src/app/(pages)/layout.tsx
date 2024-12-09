import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
