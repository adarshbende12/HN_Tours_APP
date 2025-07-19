import { getGalleryImages, type ImageConfig } from './imageConfig';

export type GalleryImage = ImageConfig['gallery'][0];

// Get gallery images from centralized image config
export const galleryImages = getGalleryImages();