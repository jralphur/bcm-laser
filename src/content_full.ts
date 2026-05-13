import content from "./content";

const rootFolder = "/assets/scaled/1280x860/"
const full = content.map((item, i) => ({...item, id: i + 1, imgSrc: rootFolder + item.imgSrc}));

export default full;