import { ShowcaseItemProps } from "./types";

const ShowcaseItem = ({imgSrc, description, flip = false}: ShowcaseItemProps) => {
    let left = <img src={imgSrc} height="300" width="400" />;
    let right = <p>{description}</p>;

    if (flip) {
        let swap = left;
        left = right;
        right = swap;
    }

    return (
        <div className="showcase">
            {left}
            {right}
        </div>
    )
};

export default ShowcaseItem;