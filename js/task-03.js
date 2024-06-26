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

const gallery = document.getElementsByClassName("gallery")[0];

gallery.style.display = "flex";
gallery.style.flexDirection = "row";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "10px";
gallery.style.padding = "10px";

images.forEach((image) => {
  const img = `<img src="${image.url}" alt="${image.alt}" style="width: 300px; height: auto;">`;
  gallery.insertAdjacentHTML("beforeend", img);
});
