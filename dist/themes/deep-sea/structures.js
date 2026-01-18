/**
 * Deep Sea Theme - Structures
 *
 * Man-made and artificial structures in the deep ocean.
 */
export const structures = [
    {
        id: 'deep-sea:treasure-chest',
        name: 'Treasure Chest',
        category: 'structure',
        theme: 'deep-sea',
        art: `    .=======.
   [| $ $ $ |]
   [|_coins_|]
   ~~~~~~~~~~`,
        description: 'A sunken treasure chest overflowing with gold',
        whyEffective: 'The $ symbols are universally recognized as money/treasure. The box structure [| |] is clearly a container. The word \'coins\' adds clarity. The ~~~ seabed grounds it underwater. Simple and immediately readable.',
        keyCharacters: ['$', '[', ']', '|', '=', '~'],
        buildingBlocks: ['lid: .======= .', 'treasure: $ $ $', 'body: [|___|]', 'seabed: ~~~~~~~~~~'],
        techniques: ['box-drawing', 'density-shading', 'stippling'],
        tags: {
            mood: ['valuable', 'mysterious'],
            movement: 'static',
            density: 'medium',
            size: 'small',
            bioluminescence: false,
        },
    },
    {
        id: 'deep-sea:diver',
        name: 'Deep Sea Diver',
        category: 'structure',
        theme: 'deep-sea',
        art: `    [¤¤¤]
   /{o o}\\
  |=|===|=|
   \\|_|_|/
    O   O`,
        description: 'A classic deep sea diver in old-school brass helmet',
        whyEffective: 'The [¤¤¤] helmet top with decorative characters suggests the brass construction. The {o o} viewport shows a face peering out. The |=|===|=| represents the bulky suit with air hoses. Weighted boots O O at bottom complete the iconic silhouette.',
        keyCharacters: ['¤', 'o', '=', '|', 'O', '{', '}'],
        buildingBlocks: ['helmet: [¤¤¤]', 'viewport: {o o}', 'suit: |=|===|=|', 'boots: O   O'],
        techniques: ['box-drawing', 'symmetry', 'line-drawing'],
        tags: {
            mood: ['vintage', 'brave'],
            movement: 'static',
            density: 'dense',
            size: 'medium',
            bioluminescence: false,
        },
    },
    {
        id: 'deep-sea:submarine',
        name: 'Submarine',
        category: 'structure',
        theme: 'deep-sea',
        art: `      _______________
    =/  [°] [°] [°]  \\
   |---=============---|>
    \\______@@@______/`,
        description: 'A submarine exploring the deep with portholes illuminated',
        whyEffective: 'The elongated shape uses extended underscores for the hull. Portholes [°] in a row suggest the interior and crew. The propeller |> at rear shows direction. The @@@ at bottom could be ballast tanks. Clean lines convey engineered precision.',
        keyCharacters: ['[', ']', '°', '=', '-', '>', '@'],
        buildingBlocks: ['hull: _______________', 'portholes: [°] [°] [°]', 'body: |---===---|', 'propeller: |>'],
        techniques: ['box-drawing', 'symmetry', 'line-drawing'],
        tags: {
            mood: ['technological', 'exploratory'],
            movement: 'dynamic',
            density: 'medium',
            size: 'large',
            bioluminescence: false,
        },
    },
];
//# sourceMappingURL=structures.js.map