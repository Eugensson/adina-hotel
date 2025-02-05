"use client";

import { useContext } from "react";
import { SpinnerDotted } from "spinners-react";

import { RoomCard } from "@/components/room-card";

import { RoomContext } from "@/context/room-context";

export const Rooms = () => {
  const context = useContext(RoomContext);

  if (!context)
    throw new Error("RoomContext must be used within a RoomProvider");

  const { rooms, loading } = context;

  return (
    <section className="py-24">
      {loading && (
        <div className="fixed z-50 top-0 bottom-0 h-screen w-screen flex items-center justify-center bg-black/90">
          <SpinnerDotted color="white" />
        </div>
      )}
      <div className="container lg:px-0">
        <div className="text-center mb-4">
          <p className="font-tertiary uppercase text-base tracking-[6px]">
            Hotel & Spa Adina
          </p>
          <h2 className="font-primary text-4xl lg:text-5xl">Rooms & Suites</h2>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {rooms.map((room) => (
            <li key={room.id}>
              <RoomCard room={room} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
