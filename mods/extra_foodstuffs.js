console.log("lol");

elements.cream = {
    color: "#f5f2e1",
    behavior: behaviors.LIQUID,
    category: "food",
    viscosity: 35,
    state: "liquid",
    density: 0,
};

// juice

elements.apple_juice: {
    color: "#ffe46b",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1054,
};

elements.orange_juice: {
    color: "#fcb72b",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1054
};

// fruit

elements.apple = {
    color: "#ed2d40",
    behavior: behaviors.POWDER,
    category: "food",
    viscosity: 0,
    state: "solid",
    density: 0,
    //breakInto: "apple_juice",
};

elements.orange = {
    color: "#ed2d40",
    behavior: behaviors.POWDER,
    category: "food",
    viscosity: 0,
    state: "solid",
    density: 0,
    //breakInto: "orange_juice",
};
