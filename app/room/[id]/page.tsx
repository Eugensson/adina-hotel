"use client";

import Image from "next/image";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { useParams } from "next/navigation";

import { CheckIn } from "@/components/check-in";
import { CheckOut } from "@/components/check-out";
import { KidsDropdown } from "@/components/kids-dropdown";
import { AdultsDropdown } from "@/components/adults-dropdown";

import { RoomContext } from "@/context/room-context";

const RoomDetails = () => {
  const { id } = useParams();

  const context = useContext(RoomContext);

  if (!context)
    throw new Error("RoomContext must be used within a RoomProvider");

  const { rooms } = context;

  const room = rooms.find((room) => room.id === id);

  if (!room) return <div>Room not found</div>;

  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <div className="relative h-[560px] flex items-center justify-center bg-room bg-cover bg-center">
        <div className="absolute w-full h-full bg-black/70" />
        <h1 className="z-20 text-6xl font-primary text-center text-white">
          {name} Details
        </h1>
      </div>
      <div className="container">
        <div className="h-full py-24 flex flex-col lg:flex-row">
          <div className="w-full h-full lg:w-3/5 px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <Image src={imageLg} alt={`${name} image`} className="mb-8" />
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, repellendus eum? Consectetur animi quis laborum
                provident! Recusandae in, aliquam dolorem iure cupiditate
                suscipit autem natus, nihil ea rem facilis eaque.
              </p>
              <ul className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex flex-1 items-center gap-x-3">
                    <Icon size={30} className="text-accent" />
                    <p className="text-base">{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full h-full lg:w-2/5">
            <div className="py-8 px-6 mb-12 bg-accent/20">
              <div className="flex flex-col gap-y-4 mb-4">
                <h3>Your Reservation</h3>
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
              </div>
              <button className="btn btn-lg btn-primary w-full">
                book now for ${price}
              </button>
            </div>
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
                consequuntur
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
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
