console.log("lol");

elements.cream = {
    color: "#f5f2e1",
    behavior: behaviors.LIQUID,
    category: "food",
    viscosity: 35,
    state: "liquid",
    density: 0,
};

// fruit

elements.apple = {
    color: "#ed2d40",
    behavior: [
                    "XX|ST:vine|XX",
                    "XX|XX|XX",
                    "M2|M1|M2",
                ],
    category: "food",
    viscosity: 0,
    state: "solid",
    density: 0,
    breakInto: "apple_juice"
};

elements.orange = {
    color: "#ed2d40",
    behavior: [
                    "XX|ST:vine|XX",
                    "XX|XX|XX",
                    "M2|M1|M2",
                ],
    category: "food",
    viscosity: 0,
    state: "solid",
    density: 0,
    breakInto: "orange_juice"
};

elements.apple_juice: {
    color: "#ffe46b",
    behavior: behaviors.LIQUID,
    tempHigh: 160,
    stateHigh: ["steam","sugar"],
    tempLow: -10,
    category: "liquids",
    state: "liquid",
    density: 1054   
    stain: 0.05,
};

elements.orange_juice: {
    color: "#fcb72b",
    behavior: behaviors.LIQUID,
    tempHigh: 160,
    stateHigh: ["steam"],
    tempLow: -10,
    category: "liquids",
    state: "liquid",
    density: 1054   
    stain: 0.05,
};
