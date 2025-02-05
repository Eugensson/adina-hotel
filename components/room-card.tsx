import Link from "next/link";
import Image from "next/image";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

import { RoomType } from "@/types";

interface RoomCardProps {
  room: RoomType;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  const { id, name, description, image, size, maxPerson, price } = room;

  return (
    <article className="max-w-sm mx-auto min-h-[500px] bg-white shadow-2xl group">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={`${name} room image`}
          width={500}
          height={500}
          className="w-full group-hover:scale-105 transition-transform duration-300 object-cover"
        />
      </div>
      <div className="bg-white shadow-lg max-w-[300px] h-[60px] mx-auto -translate-y-1/2 flex items-center justify-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
        <div className="flex justify-between w-[80%]">
          <div className="flex items-center gap-x-2">
            <BsArrowsFullscreen size={15} className="text-accent" />
            <div className="flex gap-x-1">
              <p>size</p>
              <p>{size}m2</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <BsPeople size={18} className="text-accent" />
            <div className="flex gap-x-1">
              <p>Max people</p>
              <p>{maxPerson}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link href={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[90%] mx-auto mb-3 lg:mb-6 text-sm line-clamp-3">
          {description}
        </p>
      </div>
      <Link
        href={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-60 mx-auto"
      >
        Book now from ${price}
      </Link>
    </article>
  );
};
