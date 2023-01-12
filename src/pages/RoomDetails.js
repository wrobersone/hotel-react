import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import AdultsDropdown from "../components/AdultsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import KidsDropdown from "../components/KidsDropdown";
import ScrollToTop from "../components/ScrollToTop";
import { RoomContext } from "../context/RoomContext";
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  const { name, description, amenities, imageLg, price } = room;
  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex items-center justify-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name}
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left side */}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="" />
            {/* amenities */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Hotel Amenities</h3>
              <p className="mb-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum beatae, autem voluptatibus vero soluta obcaecati
                eaque. Accusamus fugiat suscipit, numquam nam temporibus nulla
                facere vero voluptas rerum alias itaque impedit.
              </p>
              {/* gallery / grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {amenities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      className="flex flex-1 gap-x-3 items-center"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full h-full lg:w-[40%]">
            {/* reservations */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Make A Reservation</h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
                <button className="btn btn-lg btn-primary w-full py-4">
                  Book Now for ${price}
                </button>
              </div>
            </div>
            {/* instructions */}
            <div>
              <h3 className="h3">Hotel Information:</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                sint aperiam fuga fugiat voluptate possimus similique saepe
                suscipit dolorum voluptatibus odio aut, eum reiciendis, incidunt
                doloremque sit. Unde, rem laudantium.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-In: 3:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-Out: 12:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets Allowed
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
