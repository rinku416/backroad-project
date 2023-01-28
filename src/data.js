import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Services", href: "#services" },
  { id: 4, text: "Tours", href: "#tours" },
];

export const socialLinks = [
  { id: 1, icon: "fab fa-facebook", href: "https://www.facebook.com" },
  { id: 2, icon: "fab fa-twitter", href: "https://www.twitter.com" },
  { id: 3, icon: "fab fa-squarespace", href: "https://www.squarespace.com" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 1,
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 1,
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    tourDate: "august 26th, 2020",
    tourTitle: "Tibet Adventure",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration: 6,
    price: 2100,
    location: "China",
  },
  {
    id: 2,
    image: tour2,
    tourDate: "august 26th, 2020",
    tourTitle: "best of java",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration: 6,
    price: 2100,
    location: "indonesia",
  },
  {
    id: 3,
    image: tour3,
    tourDate: "august 26th, 2020",
    tourTitle: "explore hong kong",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration: 6,
    price: 2100,
    location: "hong kong",
  },
  {
    id: 4,
    image: tour4,
    tourDate: "august 26th, 2020",
    tourTitle: "kenya highlights",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration: 6,
    price: 2100,
    location: "kenya",
  },
];
