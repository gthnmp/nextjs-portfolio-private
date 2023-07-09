import Socials from "./Socials";

export default function Navigation() {
  return (
    <nav className="fixed z-50 w-screen h-auto font-medium grid grid-cols-3 grid-rows-1 px-20 py-5 gap-x-20">
      <h1 className="font-bold">217EL</h1>
      <Socials className="flex gap-4 justify-end items-center col-start-3 "/>
    </nav>
  );
}
