export interface AffirmationCategory {
    title: String;
    data: GalleryPreviewData[];
}

export interface GalleryPreviewData {
    id: number;
    text: String;
    image: any;
}