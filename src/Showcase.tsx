import { useEffect, useState, useRef } from "react";
import content from "./content_full";

import "./showcase.css"

const next = (length: number, current: number): number => {
    if (current + 1 >= length) {
        return 0;
    }

    return current + 1;
};

const prev = (length: number, current: number): number => {
    if (current - 1 < 0) {
        return length - 1;
    }

    return current - 1;
}

const animatingFromRightClass = "sliding-right";
const animatingFromLeftClass = "sliding-left";
const hiddenClass = "hidden";

const enum TransitionState {
    NONE,
    LEFT,
    RIGHT
};

// content[index].imgSrc
const Showcase = () => {
    const [index, setIndex] = useState<number>(0);
    const [transition, setTransition] = useState<TransitionState>(TransitionState.NONE);
    const [wantsTransition, toggleWantTransition] = useState<boolean>(false);
    const showcaseRef = useRef<HTMLDivElement>(null);

    const handleSwapPage = (direction: TransitionState) => {
        toggleWantTransition(true);
        setTransition(direction);
    };

    useEffect(() => {
        let startTransition = setTimeout(() => {
            setTransition(TransitionState.RIGHT);
        }, 5000);

        let swapImage = setTimeout(() => {
            setIndex(next(content.length, index));
            setTransition(TransitionState.NONE);
        }, 6000);

        return () => {
            clearInterval(startTransition);
            clearInterval(swapImage);
        };
    }, [index]);

    useEffect(() => {
        let timeout: number | null;
        if (wantsTransition) {
            timeout = setTimeout(() => {
                if (transition === TransitionState.LEFT) {
                    setIndex(prev(content.length, index));
                } else if (transition === TransitionState.RIGHT) {
                    setIndex(next(content.length, index));
                }
                setTransition(TransitionState.NONE)
                toggleWantTransition(false);
            }, 1000);
        }
        return () => {
            if (timeout) {
                clearInterval(timeout);
            }
        }
    }, [wantsTransition])
    

    return (
        <div id="showcase" ref={showcaseRef}>
            <div className={"showcase-image " + (transition === TransitionState.LEFT ? animatingFromLeftClass : hiddenClass)}
            >
                <img
                    src={content[prev(content.length, index)].imgSrc}
                />
            </div>
            <div className="showcase-image"
            >
                <img
                    src={content[index].imgSrc}
                />
            </div>
            <div className={"showcase-image " + (transition === TransitionState.RIGHT ? animatingFromRightClass : hiddenClass)}
            >
                <img
                    src={content[next(content.length, index)].imgSrc}
                />
            </div>
            <button className="showcase-left-button" onClick={() => handleSwapPage(TransitionState.LEFT)}>
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {/* <button className="expand-button" onClick={() => handleShowcaseHeight()}>
                    <span className="material-symbols-outlined">expand_more</span>
                </button> */}
            <button className="showcase-right-button" onClick={() => handleSwapPage(TransitionState.RIGHT)}>
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    );
};

export default Showcase;