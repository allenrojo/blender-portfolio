const projects = [
  {
    cover: { type: "video", src: "/projects/water-station-vid-1.mp4" },
    title: "[title] Water Station Concept",
    tags: ["[tags] archviz,", "animation"],
    description:
      "A comissioned project for a water station concept design. The client wanted a modern, sleek design that would stand out and be functional to be integrated to an existing real-world residence. I used Blender to create the 3D model and rendered it using Cycles. The project included creating a short animation to showcase the design from different angles and perspectives.",
    images: [
      "/projects/water-station-img-1.png",
      "/projects/water-station-img-2.png",
      "/projects/water-station-img-3.png",
      "/projects/water-station-img-4.png",
    ],
    videos: ["/projects/water-station-vid-1.mp4"],
  },
  {
    cover: { type: "image", src: "/projects/room-update-img-1.png" },
    title: "[title] Room Tour Project - V2",
    tags: ["[tags] archviz,", "interior design"],
    description:
      "This project is a continuation of my previous Room Tour Project, where I redesigned and updated the scene to reflect my current apartment. I focused on improving the lighting, materials, and overall composition to create a more cohesive and visually appealing space. The project also included adding new furniture and decor elements to enhance the overall aesthetic.",
    images: [
      "/projects/room-update-img-1.png",
      "/projects/room-update-img-2.png",
      "/projects/room-update-img-3.png",
    ],
    videos: [],
  },
  {
    cover: { type: "image", src: "/projects/bathroom-img-1.png" },
    title: "[title] Bathroom Render",
    tags: ["[tags] archviz,", "interior design"],
    description:
      "A personal project to practice interior design and archviz rendering. I recreated a modern bathroom layout and focused on creating realistic materials and lighting to showcase the space effectively. The project helped me improve my skills in modeling, texturing, and rendering in Blender.",
    images: [
      "/projects/bathroom-img-1.png",
      "/projects/bathroom-img-2.png",
      "/projects/bathroom-img-3.png",
    ],
    videos: [],
  },
  {
    cover: { type: "video", src: "/projects/4d-chess-vid-1.mp4" },
    title: "[title] 4D Chess",
    tags: ["[tags] hard-surface,", "booleans,", "animation"],
    description:
      "This project is a fun little study using Blender to play around with Booleans and material transfer. It’s all about combining shapes and using different perspectives to achieve cool effects. Original concept from Polyfjord.",
    images: [
      "/projects/4d-chess-img-1.png",
      "/projects/4d-chess-img-2.png",
      "/projects/4d-chess-img-3.png",
    ],
    videos: ["/projects/4d-chess-vid-1.mp4"],
  },
  {
    cover: { type: "image", src: "/projects/room-tour-img-1.jpg" },
    title: "[title] Room Tour Project",
    tags: ["[tags] archviz,", "interior design"],
    description:
      "A personal design project inspired by Room Tour Project series on YouTube, this scene showcases a modern workspace and living area. I modeled and combined several 3D assets including furniture, decor, and pc components to create a realistic arch viz scene. The room is also rendered a 360° view to immerse the viewer in the space, posted on my personal Facebook page.",
    images: [
      "/projects/room-tour-img-1.jpg",
      "/projects/room-tour-img-2.jpg",
      "/projects/room-tour-img-3.jpg",
      "/projects/room-tour-img-4.jpg",
    ],
    videos: [],
    span: 2,
  },
  {
    cover: { type: "video", src: "/projects/nud-intro-vid-1.mp4" },
    title: "[title] NUD TV Intro",
    tags: ["[tags] animation,", "uv-mapping"],
    description:
      "This project was a special commission for a school organization, where I was asked to create a lively, news-inspired logo animation. Using Blender, I brought their brand to life by experimenting with camera movements and projection mapping to get the look and feel just right. It was a rewarding experience to turn their ideas into a professional intro that gives their news segments a fresh, dynamic energy.",
    images: [
      "/projects/nud-intro-img-1.png",
      "/projects/nud-intro-img-2.png",
      "/projects/nud-intro-img-3.png",
    ],
    videos: ["/projects/nud-intro-vid-1.mp4"],
    span: 3,
  },
  {
    cover: { type: "image", src: "/projects/gulikit-controller-img-1.png" },
    title: "[title] GuliKit Controller",
    tags: ["[tags] hard-surface,", "quad-based modeling,","data transfer"],
    description:
      "A quick exploration of quad-based modeling and the subdivision workflow, created as part of my weekly challenge to model random objects from my desk as quickly as possible. This was also my first time experimenting with Blender’s data transfer modifier, adding a new tool to my collection. It was a fun, fast-paced exercise in both technique and creativity.",
    images: [
      "/projects/gulikit-controller-img-1.png",
      "/projects/gulikit-controller-img-2.png",
      "/projects/gulikit-controller-img-3.png",
      "/projects/gulikit-controller-img-4.png",
    ],
    videos: [],
  },
  {
    cover: { type: "image", src: "/projects/jbecp-img-1.png" },
    title: "[title] JBECP NUD Key Visual",
    tags: ["[tags] geo-nodes"],
    description:
      "As head of the creative department at JBECP-NUD, I designed the key visuals for our Blockchain Basics event. I played around with Blender’s geometry nodes to get that block effect, and used to Illustrator and Photoshop to create the textures and make some adjustments for the final output. It was a fun mix of creative ideas and technical problem-solving, and I’m really happy with how the visuals brought the event to life.",
    images: [
      "/projects/jbecp-img-1.png",
      "/projects/jbecp-img-2.png",
      "/projects/jbecp-img-3.png",
    ],
    videos: [],
  },

  {
    cover: { type: "image", src: "/projects/benchmade-img-1.png" },
    title: "[title] Benchmade Pocket Knife",
    tags: ["[tags] hard-surface,", "quad-based modeling"],
    description:
      "Continuing my weekly challenge, I chose to model a pocket knife as an exercise in mastering bevel techniques, alongside quad-based modeling and subdivision for clean topology and detailed geometry. This project helped me refine my speed and efficiency while experimenting with different approaches to bevels, making the workflow both engaging and instructive as I balanced technique with creativity in a fast-paced environment.",
    images: [
      "/projects/benchmade-img-1.png",
      "/projects/benchmade-img-2.png",
      "/projects/benchmade-img-3.png",
    ],
    videos: [],
  },
  {
    cover: { type: "video", src: "/projects/nbs-vid-1.mp4" },
    title: "[title] NBS Concept Branch",
    tags: ["[tags] animation,", "interior design"],
    description:
      "I was commissioned by a third party to design a new branch concept of National Book Store based on a 2D floor plan. The main requirement was a dedicated, inviting reading space to foster a culture of learning and relaxation within the store. The project included developing a quick walkthrough animation that visually guides viewers through the layout, highlighting the seamless flow between the book displays, checkout, storage, and reading nook. To enhance efficiency I had to implement scripting to automatically generate textures for the books and other items, and a lot of streamlining to the rendering process to meet the tight deadline.",
    images: [
      "/projects/nbs-img-1.png",
      "/projects/nbs-img-2.png",
      "/projects/nbs-img-3.png",
    ],
    videos: ["/projects/nbs-vid-1.mp4"],
    span: 3,
  },
  {
    cover: { type: "video", src: "/projects/zarks-vid-1.mp4" },
    title: "[title] Zarks Concept Branch",
    tags: ["[tags] hanimation,", "interior design"],
    description:
      "Similarly, I was commissioned by a third party to design a new branch concept for Zark's Burger based on a crude 2D floor plan. The main requirement was a vibrant, dedicated play space to create an enjoyable environment for families and young customers. The project also included developing a quick walkthrough animation that visually guides viewers through the layout, emphasizing the seamless flow between the dining area, counter, kitchen, and play zone.",
    images: [
      "/projects/zarks-img-1.png",
      "/projects/zarks-img-2.png",
      "/projects/zarks-img-3.png",
    ],
    videos: ["/projects/zarks-vid-1.mp4"],
    span: 2,
  },
  {
    cover: { type: "image", src: "/projects/living-room-img-1.png" },
    title: "[title] Living Room Renovation",
    tags: ["[tags] archviz,", "interior design"],
    description:
      "Continuing my weekly challenge, I chose to model a pocket knife as an exercise in mastering bevel techniques, alongside quad-based modeling and subdivision for clean topology and detailed geometry. This project helped me refine my speed and efficiency while experimenting with different approaches to bevels, making the workflow both engaging and instructive as I balanced technique with creativity in a fast-paced environment.",
    images: [
      "/projects/living-room-img-1.png",
      "/projects/living-room-img-2.png",
      "/projects/living-room-img-3.png",
    ],
    videos: [],
    span: 1,
  },
  {
    cover: { type: "image", src: "/projects/map-img-3.png" },
    title: "[title] 3D Elevation Maps",
    tags: ["[tags] qgis,", "photoshop"],
    description:
      "A collection of 3D maps made using Digital Elevation Maps (DEMs). I used QGIS and Photoshop to prepare the textures, and rendered everything in Blender.",
    images: [
      "/projects/map-img-1.png",
      "/projects/map-img-2.png",
      "/projects/map-img-3.png",
    ],
    videos: [],
    span: 1,
  },
  {
    cover: { type: "image", src: "/projects/chiron-img-1.png" },
    title: "[title] Bugatti Chiron",
    tags: ["[tags] hard-surface,", "quad-based modeling"],
    description:
      "Work in progress: a 3D model of the Bugatti Chiron. This is a revisit of my very first Blender creation outside of tutorials, undertaken five years ago. I’m now recreating the car from scratch, applying what I’ve learned since to enhance the detail, geometry, and overall realism.",
    images: [
      "/projects/chiron-img-1.png",
      "/projects/chiron-img-2.webp",
      "/projects/chiron-img-3.jpg",
      "/projects/chiron-img-4.jpg",
    ],
    videos: [],
    span: 1,
  },
  {
    cover: { type: "video", src: "/projects/google-vid-1.mp4" },
    title: "[title] Google 26th Anniversary",
    tags: ["[tags] animation,"],
    description:
      "Designed a commemorative publication material for GDSC-NUD to celebrate Google’s 26th anniversary.",
    images: ["/projects/google-img-1.png"],
    videos: ["/projects/google-vid-1.mp4"],
    span: 1,
  },
];

export { projects };
