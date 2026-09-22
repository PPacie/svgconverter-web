/** TrueSVG landing-page content.
 * Product copy and asset paths stay centralized here so future updates remain simple.
 */
export const app = {
  name: "TrueSVG",
  siteUrl: "https://svgconverter.org/",
  labels: {
    explore: "See how it works",
    preview: "TrueSVG app preview",
    floatingNote: "Crisp at every size",
    featureEyebrow: "IMAGE TO VECTOR",
    gallery: "TrueSVG App Store screenshots",
    socialProof: "AI-powered image vectorization"
  },
  icon: "/truesvg/icon.webp",
  appStoreUrl: "https://apps.apple.com/us/app/svg-converter-truesvg/id6751818935" as string | null,
  colors: {
    accent: "#3d84ed",
    accentSoft: "#dcecff",
    background: "#f7f9fc",
    text: "#111827",
    muted: "#5f6877",
    border: "#dce3ec",
    surface: "#ffffff",
    dark: "#101827",
    onDark: "#ffffff"
  },
  meta: {
    title: "Image to SVG Converter — Vectorize PNG & JPG | TrueSVG",
    description: "Convert PNG, JPG, and WEBP images to clean, scalable SVG vectors with AI. Create editable paths for logos, icons, print, web, Figma, and Illustrator.",
    keywords: "image to vector, image to SVG, PNG to SVG, JPG to SVG, WEBP to SVG, vectorize image, SVG converter, AI vectorizer"
  },
  navigation: { features: "How it works", screens: "Inside the app", reviews: "Reviews", download: "Get TrueSVG" },
  hero: {
    eyebrow: "VECTORIZE WITH AI",
    title: "Turn pixels\ninto vectors.",
    description: "Convert PNG, JPG, and WEBP images into clean, scalable SVG graphics—ready for your next design, print, or web project.",
    note: "One free conversion included. No subscription required.",
    artwork: [
      { src: "/truesvg/hero-raster.png", alt: "Original raster illustration before SVG vectorization" },
      { src: "/truesvg/hero-vector.png", alt: "Vectorized SVG illustration with editable anchor points" }
    ]
  },
  cta: { label: "Download on the App Store", unavailable: "App Store link coming soon", shortUnavailable: "Coming soon" },
  benefits: ["Convert in seconds", "Clean vector paths", "Crisp at every size", "Ready for design tools"],
  intro: {
    eyebrow: "FROM RASTER TO READY",
    title: "A sharper way\nto work with images.",
    description: "TrueSVG turns flat image files into editable vector graphics, so logos, icons, and illustrations stay clear wherever you use them."
  },
  features: [
    { title: "Choose an image.\nStart in a tap.", description: "Bring in a PNG, JPG, or WEBP file and let TrueSVG prepare it for conversion.", detail: "Supports files up to 5 MB and 16 megapixels.", screenshot: "picker", secondaryScreenshot: "import", tone: "peach" },
    { title: "Clean paths.\nTrue vector output.", description: "A specialized AI model preserves the visual intent of your image while creating optimized, editable vector curves.", detail: "Made for logos, icons, illustrations, and graphics.", screenshot: "vectorize", secondaryScreenshot: null, tone: "sage" },
    { title: "Export once.\nScale anywhere.", description: "Save a high-quality SVG that stays crisp from small interface icons to large-format print.", detail: "Works with Illustrator, Figma, Sketch, and other design tools.", screenshot: "library", secondaryScreenshot: "export", tone: "lavender" }
  ],
  screenshots: [
    { id: "picker", src: "/truesvg/photo-picker.png", alt: "iOS Photos picker showing colorful illustrations ready to select for SVG conversion", caption: "Choose from Photos", showInGallery: true },
    { id: "import", src: "/truesvg/import.png", alt: "TrueSVG image selection screen with a Convert to SVG button", caption: "Import an image", showInGallery: true },
    { id: "vectorize", src: "/truesvg/vectorize.png", alt: "TrueSVG vectorization progress screen converting an image into a true SVG", caption: "Vectorize with AI", showInGallery: true },
    { id: "export", src: "/truesvg/export.png", alt: "TrueSVG exported file preview with a Share button", caption: "Export and share", showInGallery: true },
    { id: "library", src: "/truesvg/library.png", alt: "TrueSVG library showing saved SVG files", caption: "Browse saved SVGs", showInGallery: false }
  ],
  showcase: {
    eyebrow: "INSIDE TRUESVG",
    title: "From image to SVG. Simple.",
    description: "A focused workflow that gets you from a raster source to a scalable vector without a desktop setup.",
    note: "",
    previous: "Previous screenshot",
    next: "Next screenshot"
  },
  reviews: {
    eyebrow: "APP STORE REVIEWS",
    title: "What TrueSVG users say.",
    description: "Real feedback from people using TrueSVG.",
    items: [
      {
        rating: 5,
        title: "Easier than breathing",
        quote: "Great app that does what it says and even offers a FREE conversion!",
        name: "jvazcones",
        role: "Verified App Store review"
      }
    ],
    note: ""
  },
  faq: {
    eyebrow: "IMAGE TO VECTOR FAQ",
    title: "Everything you need to know.",
    description: "Quick answers about converting raster images into editable, scalable SVG vector files.",
    items: [
      { question: "How do I convert an image to a vector SVG?", answer: "Open TrueSVG, choose a PNG, JPG, or WEBP image, start the AI vector conversion, then preview and export the finished SVG file. The result uses scalable vector paths instead of fixed pixels." },
      { question: "Can TrueSVG convert PNG to SVG?", answer: "Yes. TrueSVG converts PNG images into clean SVG vector graphics. It is useful for vectorizing logos, icons, illustrations, and other artwork that needs to stay sharp at different sizes." },
      { question: "Can I convert JPG or WEBP images to SVG?", answer: "Yes. TrueSVG supports JPG, JPEG, PNG, and WEBP source images, so you can turn common raster image formats into scalable SVG files from your iPhone or iPad." },
      { question: "What is the difference between a raster image and a vector image?", answer: "Raster images are made from pixels and can look blurry when enlarged. Vector images use mathematical paths and curves, allowing an SVG to scale up or down while remaining crisp." },
      { question: "Can I edit the converted SVG in Figma or Illustrator?", answer: "Yes. TrueSVG creates SVG files with editable vector paths that can be opened in Adobe Illustrator, Figma, Sketch, and other tools that support SVG." },
      { question: "What image sizes does TrueSVG support?", answer: "Source files can be up to 5 MB and 16 megapixels, with a maximum dimension of 4096 pixels and a minimum dimension of 256 pixels." }
    ]
  },
  differentiator: {
    eyebrow: "MADE FOR CREATIVE WORK",
    title: "One file.\nEvery size you need.",
    description: "Create vector assets that remain sharp, editable, and ready to move into the tools you already use.",
    points: ["Logos and branding", "Icons and design systems", "Print and digital graphics"]
  },
  final: { title: "Make your next image\ninfinitely scalable.", description: "Download TrueSVG and create your first vector conversion." },
  footer: { text: "AI-powered image to SVG conversion.", backToTop: "Back to top", legal: "© 2026 TrueSVG" }
};
