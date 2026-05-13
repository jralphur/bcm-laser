import scaled from "./content_scaled";
const Gallery = () => { 
    return (
        <div id="gallery">
            {scaled.map(item => <img id={item.id.toString()} width="640" height="430" src={item.imgSrc} />)}
        </div>
    )
    };

export default Gallery;