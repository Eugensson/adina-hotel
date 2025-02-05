"use client";

import { createContext, useEffect, useState } from "react";

import { roomData } from "@/lib/data";

interface RoomContextType {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  kids: number;
  setKids: React.Dispatch<React.SetStateAction<number>>;
  rooms: typeof roomData;
  setRooms: React.Dispatch<React.SetStateAction<typeof roomData>>;
  handleClick: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export const RoomContext = createContext<RoomContextType | undefined>(
  undefined
);

export const RoomProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState<number>(1);
  const [kids, setKids] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTotal(adults + kids);
  }, [adults, kids]);

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const newRooms = roomData.filter((room) => room.maxPerson >= total);

    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 3000);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        setRooms,
        adults,
        setAdults,
        kids,
        setKids,
        handleClick,
        loading,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
