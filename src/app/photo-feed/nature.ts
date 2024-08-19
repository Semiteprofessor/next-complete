import { StaticImageData } from "next/image";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import photo4 from "./photos/photo4.jpg";
import photo5 from "./photos/photo5.jpg";
import photo6 from "./photos/photo6.jpg";
import photo7 from "./photos/photo7.jpg";
import photo8 from "./photos/photo8.jpg";

export type NatureImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const natureImages: NatureImage[] = [
  {
    id: "1",
    name: "Photo 1",
    src: photo1,
    photographer: "John Doe",
    location: "Mountain View, CA",
  },
  {
    id: "2",
    name: "Photo 2",
    src: photo2,
    photographer: "Jane Smith",
    location: "San Francisco, CA",
  },
  {
    id: "3",
    name: "Photo 3",
    src: photo3,
    photographer: "Mike Johnson",
    location: "London, UK",
  },
  {
    id: "4",
    name: "Photo 4",
    src: photo4,
    photographer: "Sarah Davis",
    location: "New York, NY",
  },
  {
    id: "5",
    name: "Photo 5",
    src: photo5,
    photographer: "Emily Brown",
    location: "Los Angeles, CA",
  },
  {
    id: "6",
    name: "Photo 6",
    src: photo6,
    photographer: "Alan Shanks",
    location: "Lisbon, PO",
  },
  {
    id: "7",
    name: "Photo 7",
    src: photo7,
    photographer: "Kate Green",
    location: "Tokyo, JP",
  },
  {
    id: "8",
    name: "Photo 8",
    src: photo8,
    photographer: "David Williams",
    location: "Paris, FR",
  },
];

export default natureImages;
