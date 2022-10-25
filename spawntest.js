elements.sand_spawn = {
  color: "#ffffff",
  behavior:
  [
    "CR:sand|XX|XX",
    "XX|DL|XX",
    "XX|XX|XX",
  ],
  category: "special",
  viscosity: 100000,
  state: "solid",
  density: 720,
}


elements.card_spawn = {
  color: "#ffffff",
  behavior:
  [
    "XX|CR:dig_spawn|XX",
    "CR:dig_spawn|DL|CR:dig_spawn",
    "XX|CR:dig_spawn|XX",
  ],
  category: "special",
  viscosity: 100000,
  state: "solid",
  density: 720,
}

elements.dig_spawn = {
  color: "#ffffff",
  behavior:
  [
    "CR:card_spawn|XX|CR:card_spawn",
    "XX|DL|XX",
    "CR:card_spawn|XX|CR:card_spawn",
  ],
  category: "special",
  viscosity: 100000,
  state: "solid",
  density: 720,
}
