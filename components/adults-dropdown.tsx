"use client";

import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { RoomContext } from "@/context/room-context";

const list = [
  { name: "1 Adult", value: 1 },
  { name: "2 Adults", value: 2 },
  { name: "3 Adults", value: 3 },
  { name: "4 Adults", value: 4 },
];

export const AdultsDropdown = () => {
  const context = useContext(RoomContext);

  if (!context)
    throw new Error("RoomContext must be used within a RoomProvider");

  const { adults, setAdults } = context;

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <MenuButton className="w-full h-full flex items-center justify-between px-8">
        {adults} Adults
        <BsChevronDown size={16} className="text-accent-hover" />
      </MenuButton>
      <MenuItems
        as="ul"
        className="absolute z-40 w-full flex flex-col bg-white"
      >
        {list.map(({ name, value }) => (
          <MenuItem
            as="li"
            key={name}
            onClick={() => setAdults(value)}
            className="w-full h-12 flex items-center justify-center lg:justify-start lg:pl-8 border-b last-of-type:border-none hover:bg-accent hover:text-white cursor-pointer"
          >
            {name}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
