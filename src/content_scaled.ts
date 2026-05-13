import content from "./content"
const rootFolder = "/assets/scaled/640x430/"

const scaled = content.map((item, i) => ({...item, id: i + 1, imgSrc: rootFolder + item.imgSrc}));
export default scaled;
