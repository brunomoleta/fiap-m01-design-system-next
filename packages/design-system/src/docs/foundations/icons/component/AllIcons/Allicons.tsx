import React from "react";

const AllIcons = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mt-spacing-xl grid gap-x-spacing-sm gap-y-8 grid-cols-auto-fill-150">
      {children}
    </section>
  );
};

export default AllIcons;