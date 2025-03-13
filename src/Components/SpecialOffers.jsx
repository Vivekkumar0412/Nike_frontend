import React from "react";
import Button from "./Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

function SpecialOffers() {
  return (
    <section
      id="contact-us"
      className="flex justif-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="offers"
          width={773}
          height={678}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Everyone loves a great deal! Special offers are limited-time
          promotions that give customers discounts, bonuses, or exclusive perks.
          Whether it's a buy-one-get-one-free deal, percentage discounts, or
          free shipping, these offers help customers save money while enjoying
          premium products and services.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Retailers and online stores use special offers to attract new
          customers, boost sales, and reward loyal buyers. Flash sales, seasonal
          discounts, and holiday promotions are some of the most popular ways to
          grab amazing deals.
        </p>
        <div className="mt-11">
          <Button label="Shop Now" iconUrl={arrowRight} />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
