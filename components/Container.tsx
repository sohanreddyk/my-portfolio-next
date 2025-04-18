import { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={
        "w-full px-4 md:w-3xl md:px-0 lg:w-5xl md:mx-auto bg-white dark:bg-black text-black dark:text-white flex flex-col" +
        (props.className || "")
      }
    >
      {props.children}
    </div>
  );
};

export default Container;
