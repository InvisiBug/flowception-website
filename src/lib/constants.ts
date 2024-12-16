const local = process.env.NEXT_PUBLIC_LOCAL;
console.log("🚀 ~ local:", local);

// export const links = ["StudioFree", "Projects", "Experiments", "Plots"];
export const links = [
  { text: "About Us", url: "about" },
  { text: "Past Events", url: "pastevents" },
];

// if (local === "true") {
//   links.unshift("WIP");
// }
