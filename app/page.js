import Nav from "@/components/Nav";
import Aboutus from "@/sections/Aboutus";
import Buysell from "@/sections/Buysell";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <Aboutus />
      <Buysell />
    </main>
  );
}
