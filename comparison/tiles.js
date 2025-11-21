const tiles = [
    {
        id: "floor-1",
        name: "Marble Glossy White",
        size: "24 x 24 inch",
        material: "Porcelain",
        finish: "Glossy",
        water: "0.5%",
        price: "Rs 3,250 per box",
        img: "assets/tiles/floor1.jpg"
    },
    {
        id: "floor-2",
        name: "Stone Texture Grey",
        size: "24 x 24 inch",
        material: "Ceramic",
        finish: "Matt",
        water: "3%",
        price: "Rs 2,850 per box",
        img: "assets/tiles/floor2.jpg"
    },
    {
        id: "floor-3",
        name: "Carrara White Veins",
        size: "32 x 32 inch",
        material: "Porcelain",
        finish: "High Gloss",
        water: "0.3%",
        price: "Rs 4,200 per box",
        img: "assets/tiles/floor3.jpg"
    },
    {
        id: "floor-4",
        name: "Dark Stone",
        size: "24 x 48 inch",
        material: "Gres Porcellanato",
        finish: "Matt",
        water: "0.2%",
        price: "Rs 15,150 per box",
        img: "assets/tiles/floor4.jpg"
    },
    {
        id: "floor-5",
        name: " Stone ",
        size: "24 x 48 inch",
        material: "Gres Porcellanato",
        finish: "gloss",
        water: "0.5%",
        price: "Rs 10,150 per box",
        img: "assets/tiles/floor5.jpg"
    },
    {
        id: "floor-6",
        name: " Matt",
        size: "24 x 48 inch",
        material: "Gres Porcellanato",
        finish: "gloss",
        water: "0.5%",
        price: "Rs 3,150 per box",
        img: "assets/tiles/floor6.jpg"
    },
    {
        id: "floor-7",
        name: "Stone Matt",
        size: "24 x 48 inch",
        material: "Gres Porcellanato",
        finish: "gloss",
        water: "0.5%",
        price: "Rs 9,150 per box",
        img: "assets/tiles/floor7.jpg"
    },
    {
        id: "floor-8",
        name: "Dark Matt",
        size: "24 x 48 inch",
        material: "Gres Porcellanato",
        finish: "goss",
        water: "0.5%",
        price: "Rs 11,150 per box",
        img: "assets/tiles/floor8.jpg"
    },
    {
        id: "floor-9",
        name: "Carrara White Veins",
        size: "32 x 32 inch",
        material: "Porcelain",
        finish: "High Gloss",
        water: "0.3%",
        price: "Rs 9,500 per box",
        img: "assets/tiles/floor9.jpg"
    },
    {
        id: "floor-10",
        name: "Stone Texture Grey",
        size: "24 x 24 inch",
        material: "Ceramic",
        finish: "Matt",
        water: "3%",
        price: "Rs 7,800 per box",
        img: "assets/tiles/floor10.jpg"
    },
    {
        id: "floor-11",
        name: "Marble Glossy Beige",
        size: "24 x 36 inch",
        material: "Porcelain",
        finish: "Glossy",
        water: "0.4%",
        price: "Rs 10,200 per box",
        img: "assets/tiles/floor11.jpg"
    },
    {
        id: "floor-12",
        name: "Dark Slate",
        size: "18 x 18 inch",
        material: "Natural Stone",
        finish: "Matt",
        water: "2%",
        price: "Rs 8,600 per box",
        img: "assets/tiles/floor12.jpg"
    },
    {
        id: "floor-13",
        name: "Ivory Marble",
        size: "24 x 24 inch",
        material: "Marble",
        finish: "Glossy",
        water: "0.3%",
        price: "Rs 12,400 per box",
        img: "assets/tiles/floor13.jpeg"
    },
    {
        id: "floor-14",
        name: "Rustic Oak",
        size: "20 x 20 inch",
        material: "Porcelain",
        finish: "Textured",
        water: "1.5%",
        price: "Rs 9,200 per box",
        img: "assets/tiles/floor14.jpeg"
    },
    {
        id: "floor-15",
        name: "Ocean Blue",
        size: "16 x 16 inch",
        material: "Ceramic",
        finish: "Glossy",
        water: "0.8%",
        price: "Rs 7,500 per box",
        img: "assets/tiles/floor15.jpeg"
    },
    {
        id: "floor-16",
        name: "Sunset Terracotta",
        size: "12 x 24 inch",
        material: "Terracotta",
        finish: "Matte",
        water: "3%",
        price: "Rs 10,300 per box",
        img: "assets/tiles/floor16.jpeg"
    }
];

const container = document.getElementById("tile-container");

tiles.forEach(t => {
    container.innerHTML += `
    <div class="col-12 col-sm-6 col-md-3">
      <div class="tile-card" 
        data-id="${t.id}"
        data-name="${t.name}"
        data-size="${t.size}"
        data-material="${t.material}"
        data-finish="${t.finish}"
        data-water="${t.water}"
        data-price="${t.price}"
        data-img="${t.img}"
      >
        <div class="img-wrap">
          <img src="${t.img}" alt="">
        </div>

        <div class="tile-body">
          <div class="tile-title">${t.name}</div>
          <div class="tile-meta">${t.size} • ${t.material} • ${t.finish}</div>
        </div>

        <div class="compare-cta">
          <button class="btn-add-compare">Compare</button>
        </div>
      </div>
    </div>
  `;
});

