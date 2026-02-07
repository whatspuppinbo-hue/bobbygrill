// =========
// Settings
// =========
const PHONE_E164 = "+494625187743";

// Öffnungszeiten (PLATZHALTER):
// 0=So, 1=Mo, 2=Di, 3=Mi, 4=Do, 5=Fr, 6=Sa
// null = geschlossen
const OPENING_HOURS = {
  0: [12, 22], // Sonntag
  1: null,     // Montag geschlossen
  2: [12, 22], // Dienstag
  3: [12, 22], // Mittwoch
  4: [12, 22], // Donnerstag
  5: [12, 22], // Freitag
  6: [12, 22]  // Samstag
};


// Menü-Daten (hier änderst du Items/Preise)
const MENU = [
  {
    title: "Döner",
    items: [
      { name: "Döner (Normal)", desc: "Fladenbrot mit Dönerfleisch, Salat & Soße", price: "7,50 €" },
      { name: "Döner mit Käse", desc: "mit Hirtenkäse", price: "8,30 €" },
      { name: "Döner vegetarisch mit Käse", desc: "Fladenbrot mit Salat & Soße", price: "7,50 €" },
      { name: "Döner nur Fleisch oder 2 Beilagen", desc: "Fladenbrot mit Dönerfleisch, Salat & Soße", price: "9,00 €" },
      { name: "Riesen Döner", desc: "Fladenbrot mit Dönerfleisch, Salat & Soße", price: "8,50 €" },
      { name: "Riesen Döner mit Käse", desc: "", price: "9,30 €" },
      { name: "Riesen Döner nur Fleisch oder 2 Beilagen", desc: "", price: "10,50 €" },
      { name: "XXL Döner", desc: "mit Dönerfleisch, Salat & Soße", price: "14,50 €" },
      { name: "Pommes-Döner", desc: "mit Dönerfleisch, Pommes & Soße", price: "7,50 €" },
      { name: "Dönerteller", desc: "mit Dönerfleisch, Pommes/Kroketten, Salat & Soße", price: "12,50 €" },
      { name: "Dönerteller Hollandaise", desc: "mit Hollandaise, überbacken, Salat + Pommes/Kroketten", price: "14,00 €" }
    ]
  },

  {
    title: "Dürüm",
    items: [
      { name: "Dürüm (Normal)", desc: "arabisches Fladenbrot mit Dönerfleisch, Salat & Soße", price: "8,00 €" },
      { name: "Dürüm mit Käse", desc: "mit Hirtenkäse", price: "9,00 €" },
      { name: "Dürüm (Vegetarisch, Käse)", desc: "arabisches Fladenbrot mit Salat & Soße", price: "8,00 €" },
      { name: "Dürüm à la Chef", desc: "mit Dönerfleisch, Tomaten, Soße & Käse überbacken", price: "9,50 €" },
      { name: "Dürüm nur Fleisch oder 2 Beilagen", desc: "mit extra Dönerfleisch", price: "9,30 €" },
      { name: "Bobby Dürüm", desc: "arabisches Fladenbrot mit Dönerfleisch, Salat, Pommes & Soße", price: "9,00 €" }
    ]
  },

  {
    title: "Lahmacun",
    items: [
      { name: "Lahmacun", desc: "mit Salat & Soße", price: "7,00 €" },
      { name: "Lahmacun", desc: "mit Dönerfleisch, Salat & Soße", price: "8,00 €" },
      { name: "Lahmacun", desc: "mit Dönerfleisch, Hirtenkäse, Salat & Soße", price: "9,00 €" },
      { name: "Lahmacun", desc: "mit nur Dönerfleisch oder 2 Beilagen", price: "9,50 €" }
    ]
  },

  {
    title: "Falafel",
    items: [
      { name: "Falafel mit Fladenbrot", desc: "veg. Kichererbsenpüree – mit Salat & Soße", price: "7,30 €" },
      { name: "Falafel Dürüm", desc: "veg. – mit Salat & Soße", price: "8,00 €" },
      { name: "Falafel Teller (8 Stk.)", desc: "mit Pommes, Salat & Soße", price: "12,00 €" }
    ]
  },

  {
    title: "Salate",
    items: [
      { name: "Gemischter Salat", desc: "mit gemischtem Salat & Hirtenkäse", price: "7,30 €" },
      { name: "Chef Salat", desc: "mit gemischtem Salat, Schinken & Ei", price: "8,50 €" },
      { name: "Salat Tonno", desc: "mit gemischtem Salat, Thunfisch & Ei", price: "9,30 €" },
      { name: "Bobby Special Salat", desc: "Dönerfleisch & Hirtenkäse", price: "9,90 €" },
      { name: "Hähnchencross Salat", desc: "mit gemischtem Salat", price: "9,90 €" },
      { name: "Mozzarella Salat", desc: "Eisbergsalat, Tomaten, Gurken, Zwiebeln, Mozzarella, Paprika & Dressing", price: "9,30 €" },
      { name: "Krautsalat", desc: "oder Essig/Knoblauch", price: "6,50 €" }
    ]
  },

  {
    title: "Imbissgerichte",
    items: [
      { name: "Currywurst mit Pommes", desc: "", price: "8,50 €" },
      { name: "Hähnchen Crossis (15 Stk.)", desc: "mit Pommes, Salat & Soße", price: "13,50 €" },
      { name: "Hähnchen Crossis (8 Stk.)", desc: "mit Pommes", price: "9,50 €" },
      { name: "Calamaris", desc: "mit Knoblauchsoße & Salatbeilage", price: "10,50 €" },
      { name: "Chicken Wings (10 Stk.)", desc: "mit Pommes, Salat & Soße", price: "11,50 €" },
      { name: "Chili Cheese Nuggets Teller (15 Stk.)", desc: "mit Pommes, Salat & Soße", price: "13,00 €" },
      { name: "Chili Cheese Nuggets (8 Stk.)", desc: "mit Pommes", price: "9,00 €" },
      { name: "Mozzarella Sticks (3 Stk.)", desc: "mit Soße nach Wahl", price: "6,00 €" }
    ]
  },

  {
    title: "Auflauf",
    items: [
      { name: "Broccoli Auflauf", desc: "mit Schinken-Sahnesoße & Käse überbacken", price: "10,50 €" },
      { name: "Döner Auflauf", desc: "mit Dönerfleisch, Champignons, Hollandaise/Tomaten/Sahnesoße & Käse", price: "10,50 €" },
      { name: "Spinatos", desc: "mit Spinat, Kartoffel, weißem Käse & Käse überbacken", price: "10,50 €" },
      { name: "Kartoffel Auflauf", desc: "mit Broccoli, Dönerfleisch, Hollandaise/Sahnesoße & Käse", price: "10,50 €" }
    ]
  },

  {
    title: "Burger (XL)",
    items: [
      { name: "Hamburger", desc: "mit Hacksteak, Salat, Tomaten, Gurken, Zwiebeln & Pommes", price: "10,50 €" },
      { name: "Cheeseburger", desc: "mit Hacksteak, Salat, Tomaten, Gurken, Zwiebeln, Käse & Pommes", price: "11,00 €" },
      { name: "Crispy Chicken Burger", desc: "mit Crispy Chicken, Salat, Tomaten, Gurken, Zwiebeln & Pommes", price: "9,00 €" }
    ]
  },

  {
    title: "Schnitzelgerichte",
    items: [
      { name: "Hähnchenschnitzel Wiener Art", desc: "mit gem. Salat & Pommes", price: "10,00 €" },
      { name: "Hähnchenschnitzel Broccoli", desc: "mit gem. Salat, Pommes & Soße Hollandaise", price: "11,50 €" },
      { name: "Hähnchenschnitzel Champignon", desc: "mit gem. Salat, Pommes & Sahnesoße", price: "11,50 €" },
      { name: "Hähnchenschnitzel Hollandaise", desc: "mit gem. Salat & Pommes", price: "11,50 €" },
      { name: "Hähnchenschnitzel Valdostana", desc: "mit Champignons, Schinken, Hollandaise, Käse überbacken + Salat & Pommes", price: "12,50 €" },
      { name: "Hähnchenschnitzel à la Chef", desc: "mit Champignons, Broccoli, Tomaten/Sahne/Hollandaise & Käse überbacken + Salat & Pommes", price: "13,00 €" }
    ]
  },

  {
    title: "Pasta",
    items: [
      { name: "Spaghetti Bolognese", desc: "", price: "9,00 €" },
      { name: "Spaghetti Carbonara", desc: "mit Schinken, Erbsen & Sahnesoße", price: "10,00 €" },
      { name: "Spaghetti Al forno", desc: "mit Bolognese, Schinken & Champignons", price: "10,00 €" },
      { name: "Spaghetti à la Chef", desc: "mit Bolognese & Champignons (laut Karte)", price: "10,00 €" },
      { name: "Penne Bolognese", desc: "", price: "9,00 €" },
      { name: "Penne Gorgonzola", desc: "mit Gorgonzola & Sahnesoße", price: "9,50 €" },
      { name: "Penne con Funghi", desc: "mit Champignons, Schinken & Sahnesoße", price: "10,00 €" },
      { name: "Penne Broccoli", desc: "mit Broccoli, Schinken & Sahnesoße", price: "10,50 €" },
      { name: "Penne à la Pana", desc: "mit Dönerfleisch, Champignons & Sahnesoße", price: "10,50 €" },
      { name: "Penne à la Chef", desc: "mit Hähnchenbruststreifen, Broccoli, Champignons & Hollandaise", price: "10,50 €" }
    ]
  },

  {
    title: "Beilagen",
    items: [
      { name: "Knoblauchbrot", desc: "mit Knoblauch- oder Cocktailsauce", price: "3,00 €" },
      { name: "Pizza Brot", desc: "mit Knoblauch- oder Cocktailsauce", price: "3,00 €" },
      { name: "Pommes", desc: "", price: "3,00 €" },
      { name: "Kartoffelecken", desc: "mit Knoblauch- oder Cocktailsauce", price: "4,00 €" },
      { name: "Kroketten (8 Stk.)", desc: "", price: "4,00 €" },
      { name: "Soße nach Wahl", desc: "", price: "2,50 €" }
    ]
  },

  {
    title: "Getränke",
    items: [
      { name: "Softdrink (0,33l)", desc: "Coca Cola/Coke Light/Fanta/Sprite/Mezzo Mix/Uludag/Tafelwasser/Apfelschorle", price: "2,30 €" },
      { name: "Softdrink (1,0l)", desc: "wie oben", price: "3,50 €" },
      { name: "Ayran (0,25l)", desc: "", price: "2,30 €" }
    ]
  },

  {
    title: "Indisch & Pakistanisch",
    items: [
      { name: "Pakora", desc: "Gemüse im Kichererbsenmehlteig mit Tzatziki", price: "4,00 €" },
      { name: "Samosa", desc: "Teigtasche mit Gemüse & Salatbeilage", price: "7,00 €" },

      { name: "Chicken (Gericht 132)", desc: "Name im Foto nicht klar lesbar – bitte prüfen", price: "13,90 €" },
      { name: "Chicken (Gericht 133)", desc: "Name im Foto nicht klar lesbar – bitte prüfen", price: "13,90 €" },

      { name: "Chicken Tikka Masala", desc: "", price: "13,50 €" },
      { name: "Chili Chicken", desc: "", price: "13,90 €" },
      { name: "Chicken Curry", desc: "mit Hähnchenbrustfilet in Currysoße & Reis", price: "12,90 €" },
      { name: "Palak Panir", desc: "mit Spinat & Hirtenkäse in Currysoße & Reis", price: "12,50 €" },
      { name: "Sabzi Plate", desc: "Gemüse in Currysoße & Reis", price: "11,50 €" },
      { name: "Panjabi Biryani", desc: "Gebratener Reis mit Hähnchenbrustfilet, Erbsen, Peperoni, Rosinen & Cashew Nüsse", price: "13,00 €" },
      { name: "Biryani Vegetarisch", desc: "Gebratener Reis mit frischen Champignons, Erbsen, Peperoni, Rosinen & Cashew Nüsse", price: "12,10 €" }
    ]
  }
];


// ============
// Helpers
// ============
function formatHour(h) {
  return `${String(h).padStart(2, "0")}:00`;
}

function updateYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function updateOpenNow() {
  const el = document.getElementById("openNow");
  if (!el) return;

  const now = new Date();
  const day = now.getDay(); // 0=So
  const h = now.getHours() + now.getMinutes() / 60;

  const slot = OPENING_HOURS[day];

  if (!slot) {
    el.textContent = "Heute geschlossen (Platzhalter).";
    return;
  }

  const [from, to] = slot;

  if (h >= from && h < to) {
    el.textContent = `Jetzt geöffnet (bis ${formatHour(to)}) – Platzhalter.`;
  } else {
    el.textContent = `Heute geöffnet ${formatHour(from)}–${formatHour(to)} – Platzhalter.`;
  }
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  grid.innerHTML = "";

  MENU.forEach(block => {
    const card = document.createElement("div");
    card.className = "card menu-block";

    const h3 = document.createElement("h3");
    h3.textContent = block.title;
    card.appendChild(h3);

    const ul = document.createElement("ul");

    block.items.forEach(it => {
      const li = document.createElement("li");
      li.className = "menu-row";

      const left = document.createElement("div");
      left.className = "menu-name";

      const name = document.createElement("b");
      name.textContent = it.name;

      left.appendChild(name);

      if (it.desc && it.desc.trim().length > 0) {
        const small = document.createElement("small");
        small.textContent = it.desc;
        left.appendChild(small);
      }

      const price = document.createElement("div");
      price.textContent = it.price;

      li.appendChild(left);
      li.appendChild(price);
      ul.appendChild(li);
    });

    card.appendChild(ul);
    grid.appendChild(card);
  });
}

// Modal für Speisekarte (menu.jpg)
function setupMenuModal() {
  const btn = document.getElementById("openMenuImage");
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalClose");
  const img = document.getElementById("modalImg");
  const hint = document.getElementById("modalHint");

  if (!btn || !modal || !backdrop || !closeBtn || !img || !hint) return;

  const imagePath = "assets/img/menu.jpg";

  function open() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    img.src = imagePath;

    hint.textContent = "Wenn kein Bild geladen wird: Lege assets/img/menu.jpg an.";
  }

  function close() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    img.removeAttribute("src");
  }

  btn.addEventListener("click", open);
  backdrop.addEventListener("click", close);
  closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

// =========
// Init
// =========
updateYear();
updateOpenNow();
renderMenu();
setupMenuModal();
