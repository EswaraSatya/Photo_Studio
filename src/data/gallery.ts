export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// Placeholder images (fixed seeds keep them stable across reloads) — swap in real work later.
export const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/seed/yvvr-wedding/800/1000", alt: "Wedding photography sample" },
  { id: 2, src: "https://picsum.photos/seed/yvvr-haldi/800/1000", alt: "Haldi function sample" },
  { id: 3, src: "https://picsum.photos/seed/yvvr-birthday/800/1000", alt: "Birthday celebration sample" },
  { id: 4, src: "https://picsum.photos/seed/yvvr-babyshower/800/1000", alt: "Baby shower sample" },
  { id: 5, src: "https://picsum.photos/seed/yvvr-preshoot/800/1000", alt: "Pre-wedding shoot sample" },
  { id: 6, src: "https://picsum.photos/seed/yvvr-housewarming/800/1000", alt: "House warming sample" },
  { id: 7, src: "https://picsum.photos/seed/yvvr-halfsaree/800/1000", alt: "Half saree function sample" },
  { id: 8, src: "https://picsum.photos/seed/yvvr-postshoot/800/1000", alt: "Post-wedding shoot sample" },
  { id: 9, src: "https://picsum.photos/seed/yvvr-naming/800/1000", alt: "Naming ceremony sample" },
];
