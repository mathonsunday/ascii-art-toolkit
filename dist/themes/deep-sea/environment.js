/**
 * Deep Sea Theme - Environment
 *
 * Background elements, scenes, and environmental features.
 */
export const environment = [
    {
        id: 'deep-sea:coral-reef',
        name: 'Coral Reef',
        category: 'environment',
        theme: 'deep-sea',
        art: `  \\|/_.~._\\|/_.~._\\|/
  {*}={@}={*}={@}={*}
  /|\\~'~'/|\\~'~'/|\\
  ~~~~~~~~~~~~~~~~~~~~`,
        description: 'A vibrant coral reef with various formations',
        whyEffective: 'The \\|/ pattern creates branching coral reaching upward. The {*} and {@} represent different coral polyp types. The repeating pattern suggests a dense reef ecosystem. The ~~~ seabed provides grounding. Layered complexity mimics real reef diversity.',
        keyCharacters: ['\\', '|', '/', '*', '@', '~', '{', '}'],
        buildingBlocks: ['branches: \\|/', 'polyps: {*} {@}', 'texture: _.~._', 'seabed: ~~~~'],
        techniques: ['layering', 'stippling', 'motion-lines', 'symmetry'],
        tags: {
            mood: ['alive', 'diverse'],
            movement: 'static',
            density: 'dense',
            size: 'large',
            bioluminescence: true,
        },
    },
    {
        id: 'deep-sea:school-of-fish',
        name: 'School of Fish',
        category: 'environment',
        theme: 'deep-sea',
        art: `  ><(°>  <°)><   ><((°>
     ><°>    <°><  ><(°>
  <°)><  ><((°>  <°°)><`,
        description: 'A scattered school of small fish swimming in formation',
        whyEffective: 'The classic ><(°> fish pattern is universally recognized. Varying sizes (single vs double parentheses) create depth. The scattered, non-grid placement mimics natural schooling behavior. Mixing left <°)>< and right ><(°> facing fish shows movement.',
        keyCharacters: ['<', '>', '(', ')', '°'],
        buildingBlocks: ['fish right: ><(°>', 'fish left: <°)><', 'big fish: ><((°>', 'spacing: irregular'],
        techniques: ['stippling', 'motion-lines', 'negative-space', 'layering'],
        tags: {
            mood: ['peaceful', 'social'],
            movement: 'dynamic',
            density: 'medium',
            size: 'small',
            bioluminescence: false,
        },
    },
    {
        id: 'deep-sea:scene',
        name: 'Deep Sea Scene',
        category: 'environment',
        theme: 'deep-sea',
        art: `  ~*~><>~*~~*~><>~*~~*~><>~*~
   \\|/  ,--{@ @}--,    \\|/
  {*}= (  (  ^  )  ) ={@}
  ><>~^/\\/\\/\\/\\/\\^~><>~><>
  ~~~~~~~~~~~~~~~~~~~~~~~~~~`,
        description: 'A complete deep sea scene with octopus, coral, and fish',
        whyEffective: 'Combines multiple elements: fish ><>, octopus {@ @}, coral \\|/{*}, and water ~~~. The * characters create bioluminescent atmosphere. Layered composition gives depth. Shows how individual elements combine into a complete ecosystem scene.',
        keyCharacters: ['~', '*', '><>', '@', '^', '/', '\\', '{', '}'],
        buildingBlocks: ['water/glow: ~*~', 'fish: ><>', 'octopus: {@ @} with tentacles', 'coral: \\|/ {*}'],
        techniques: ['layering', 'irradiation', 'motion-lines', 'stippling'],
        tags: {
            mood: ['bioluminescent', 'alive'],
            movement: 'dynamic',
            density: 'dense',
            size: 'large',
            bioluminescence: true,
        },
    },
];
//# sourceMappingURL=environment.js.map