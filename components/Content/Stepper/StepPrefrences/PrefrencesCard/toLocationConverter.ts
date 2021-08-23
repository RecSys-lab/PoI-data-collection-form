import { ILocation } from "./ILocation";

// Converts a wikipedia summary JSON to ILocation to be shown in Cards
export const toLocationConverter = (item: any): ILocation => {
    return {
        title: item.displaytitle,
        description: item.description,
        thumbnail: item.thumbnail.source,
        richTextDescription: item.extract,
        pageAddress: item.content_urls.desktop.page,
        coordinates: {
            lattitude: item.coordinates.lat,
            longitude: item.coordinates.lon,
        }
    }
}