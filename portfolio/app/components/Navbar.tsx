import Link from "next/link";
import ThemeSwitch from "./ui/ThemeSwitch";
import Navitems from "./ui/Navitems";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-2 md:px-15 py-2 sticky top-0">
      <div>
        <Link href="/">
          <h1 className=" text-2xl lg:text-4xl font-bold">{"<Shrinath />"}</h1>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="order-last md:order-first">
          <Navitems />
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
