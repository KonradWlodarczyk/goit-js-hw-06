const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const image = images.map(
  (el) =>
    `<li style="list-style-type: none" ><img height="50%" width="50%" src="${el.url}" alt="${el.alt} "style="box-shadow: 8px 8px 24px -16px rgba(66, 68, 90, 1); margin: 5px"/></li>`
);

gallery.insertAdjacentHTML("afterbegin", image);
