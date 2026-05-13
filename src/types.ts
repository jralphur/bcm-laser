interface ShowcaseItem {
    imgSrc: string,
    description: string,
    id: number;
}

interface ShowcaseProps {
    content: ShowcaseItem[]
}

interface ShowcaseItemProps extends Omit<ShowcaseItem, "id"> {
    flip: boolean
}

export type { ShowcaseItemProps, ShowcaseProps, ShowcaseItem }