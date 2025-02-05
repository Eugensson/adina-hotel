import { StaticImageData } from "next/image";

export type RoomType = {
  id: string;
  name: string;
  description: string;
  facilities: Array<{
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }>;
  size: number;
  maxPerson: number;
  price: number;
  image: string | StaticImageData;
  imageLg: string | StaticImageData;
};
