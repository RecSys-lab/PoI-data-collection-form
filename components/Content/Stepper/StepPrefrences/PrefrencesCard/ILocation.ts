interface Coordinate {
    lattitude: string;
    longitude: string;
}

export interface ILocation {
    title: string;
    thumbnail: string;
    description: string;
    pageAddress: string;
    coordinates: Coordinate;
    richTextDescription: string;
}