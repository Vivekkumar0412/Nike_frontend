import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import PopularProducts from "./Components/PopularProducts";
import SuperQuality from "./Components/SuperQuality";
import SpecialOffers from "./Components/SpecialOffers";
import Services from "./Components/Services";
import CustomerReview from "./Components/CustomerReview";
import Suscribe from "./Components/Suscribe";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue ">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Suscribe />
      </section>
      {/* <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section> */}
    </main>
  );
}

export default App;
