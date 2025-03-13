import React from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Stay updated on special offers by subscribing to newsletters,
          following brands on social media, or checking their websites
          regularly. Don’t miss out—act fast before the deal expires! 🚀
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Supreme quality represents the highest standard of craftsmanship,
          durability, and performance. Whether it's a product, service, or
          experience, superior quality ensures reliability, longevity, and
          customer satisfaction.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
