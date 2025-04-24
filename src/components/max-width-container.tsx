import { ReactNode } from "react";

const MaxWidthContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 xl:max-w-6xl xl:px-0">
      {children}
    </section>
  );
};

export default MaxWidthContainer;
