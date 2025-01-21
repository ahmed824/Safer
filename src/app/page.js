import Image from "next/image";
import Header from "./Header/page";
import Advantages from "./Home/advantages/page";
import Pocket from "./Home/pocket/page";
import Articles from "./Home/articles/page";

export default function Home() {
  return (
    <>
      <Header />
      <Advantages />
      <Pocket />
      <Articles />
    </>
  );
}
