import React from "react";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
      <header style={{ marginBottom: "1rem", fontWeight: "bold" }}>
        Workbench Main Layout
      </header>
      <main>{children ?? <div>Hello Main Container</div>}</main>
    </div>
  );
};
