/**
 * Deep Sea Theme - Creatures
 *
 * Living beings of the deep ocean.
 * Includes zoom variants (far/medium/close) for progressive detail levels.
 */

import { AsciiArt } from '../../core/types';

export const creatures: AsciiArt[] = [
  {
    id: 'deep-sea:anglerfish',
    name: 'Anglerfish',
    category: 'creature',
    theme: 'deep-sea',
    art: `        *
       /|
   _.--' :>
  {°>====<########}
   \`--.__.-'`,
    description: 'The iconic deep sea anglerfish with bioluminescent lure dangling above',
    whyEffective:
      'The asterisk (*) isolated at top creates the glowing lure through irradiation. Dense # characters for bulk, eye ° and mouth :> convey predatory menace. Dangling stem connects lure to head.',
    keyCharacters: ['*', '°', '#', '>', ':'],
    buildingBlocks: ['lure: * on stem', 'body: {====<####}', 'eye: °', 'mouth: :>'],
    techniques: ['line-drawing', 'density-shading', 'irradiation', 'negative-space'],
    tags: {
      mood: ['predatory', 'eerie'],
      movement: 'static',
      density: 'medium',
      size: 'medium',
      bioluminescence: true,
    },
    zoom: {
      far: `
        .  *  .
      ~  ><>  ~
        .  *  .
`,
      medium: `        *
       /|
   _.--' :>
  {°>====<###}
   \`--.__.-'`,
      close: `            *  )
           /| /
       _.-' :/
      /  °   :>
     {  >====<##########}
      \\_  __.-'
        \`'
         \\~~~`,
    },
  },
  {
    id: 'deep-sea:giant-squid',
    name: 'Giant Squid',
    category: 'creature',
    theme: 'deep-sea',
    art: `      .===.  _____  .===.
     /@ _ @\\|     |/@ _ @\\
    {_/\\_\\__|¤¤¤¤¤|__/_\\/\\_}
    //\\\\//\\\\|_|_|_|//\\\\//\\\\
   ~~~~~~~~~~~~~~~~~~^~^~^~~`,
    description: 'An imposing giant squid with large eyes and flowing tentacles',
    whyEffective:
      'Perfect bilateral symmetry for recognition. Large @ eyes convey power. Dense ¤ mantle. Alternating tentacle patterns splay outward with chaotic motion suggestion.',
    keyCharacters: ['@', '¤', '/', '\\', '~', '^'],
    buildingBlocks: ['eyes: @ _ @', 'mantle: |¤¤¤¤¤|', 'tentacles: //\\\\//\\\\', 'motion: ~~^~^~^~~'],
    techniques: ['symmetry', 'layering', 'motion-lines', 'density-shading'],
    tags: {
      mood: ['majestic', 'powerful'],
      movement: 'dynamic',
      density: 'dense',
      size: 'large',
      bioluminescence: false,
    },
    zoom: {
      far: `     ~><~
    ~~||~~`,
      medium: `      .===.  _____  .===.
     /@ _ @\\|     |/@ _ @\\
    {_/\\_\\__|¤¤¤¤¤|__/_\\/_}
    //\\\\//\\\\|_|_|_|//\\\\//\\\\`,
      close: `            .=======.
          .'  _   _  '.
         / .-' '-' '-. \\
        |  |  @ _ @  |  |
        |  | /     \\ |  |
       {   \\|  ¤¤¤  |/   }
       {____\\_______/____}
       //\\\\//\\ | | | /\\\\//\\\\
      // // // | | | \\\\ \\\\ \\\\
     ~~ ~~ ~~  ~ ~ ~  ~~ ~~ ~~`,
    },
  },
  {
    id: 'deep-sea:jellyfish',
    name: 'Jellyfish',
    category: 'creature',
    theme: 'deep-sea',
    art: `     ,--~~~--,
    (  *  *  )
     \`-._..-'
      |||||
      ': :'`,
    description: 'A translucent jellyfish with pulsing bell and trailing tentacles',
    whyEffective:
      'Wavy dome suggests undulating bell. Asterisks represent bioluminescent organs. Straight tentacles contrast with curved body. Delicate trailing filaments.',
    keyCharacters: ['~', '*', '|', ':', "'"],
    buildingBlocks: ['bell: ,--~~~--, dome', 'organs: * * inside', 'tentacles: |||||', 'filaments: \': :\''],
    techniques: ['line-drawing', 'symmetry', 'irradiation', 'negative-space'],
    tags: {
      mood: ['delicate', 'ethereal'],
      movement: 'dynamic',
      density: 'sparse',
      size: 'medium',
      bioluminescence: true,
    },
    zoom: {
      far: `      ( )
       |`,
      medium: `     ,--~~~--,
    (  *  *  )
     \`-._..-'
      |||||
      ': :'`,
      close: `        ,--~~~~~--,
      .'   * * *   '.
     (    * * * *    )
      '.  * * * *  .'
        \`-._____.-'
         | | | | |
         | | | | |
         ': : : :'
          ' ' ' '`,
    },
  },
  {
    id: 'deep-sea:octopus',
    name: 'Octopus',
    category: 'creature',
    theme: 'deep-sea',
    art: `     ,--{@ @}--,
    (  (  ^  )  )
   _|_\\/\\_/\\_/\\/_|_
  {~^/\\/\\/\\/\\/\\/\\^~}
   ~~/~~/~~/~~/~~\\~~`,
    description: 'An octopus with expressive eyes and eight sprawling tentacles',
    whyEffective:
      'Expressive {@ @} eyes create face. Multiple /\\/ layers create sense of eight tentacles. ~ characters throughout suggest fluid motion. Dense character mixing conveys complex texture.',
    keyCharacters: ['@', '^', '/', '\\', '~', '{', '}'],
    buildingBlocks: ['head: ,--{@ @}--,', 'beak: ^', 'tentacles: /\\/\\/\\/\\', 'motion: ~~ throughout'],
    techniques: ['symmetry', 'line-drawing', 'layering', 'motion-lines'],
    tags: {
      mood: ['curious', 'intelligent'],
      movement: 'dynamic',
      density: 'dense',
      size: 'large',
      bioluminescence: false,
    },
    zoom: {
      far: `     {~}
    /|||\\`,
      medium: `     ,--{@ @}--,
    (  (  ^  )  )
   _|_\\/\\_/\\_/\\/_|_
  {~^/\\/\\/\\/\\/\\/\\^~}`,
      close: `        ,---{@   @}---,
       /  (    ^    )  \\
      (    \\       /    )
     _|_/\\__\\_____/__/\\_|_
    {   /\\ /\\ /\\ /\\ /\\   }
    { ~/~~\\~~\\~~\\~~\\~~\\~ }
     ~~  ~~  ~~  ~~  ~~  ~~
          ~~    ~~    ~~`,
    },
  },
  {
    id: 'deep-sea:sea-turtle',
    name: 'Sea Turtle',
    category: 'creature',
    theme: 'deep-sea',
    art: `       _____
    .-'=====\`-.
 <=|  /#####\\  |=>
    \`-._____.-'
        \\_/`,
    description: 'A sea turtle swimming with flippers extended',
    whyEffective:
      'Nested patterns show shell texture: outer smooth curve, inner ##### for scutes. Flippers <= => point outward showing motion. Tail completes silhouette. Compact but recognizable.',
    keyCharacters: ['=', '#', '<', '>', '/', '\\'],
    buildingBlocks: ['shell: .-\'=====\'-. ', 'scutes: /#####\\', 'flippers: <= =>', 'tail: \\_/'],
    techniques: ['symmetry', 'density-shading', 'line-drawing'],
    tags: {
      mood: ['peaceful', 'ancient'],
      movement: 'static',
      density: 'medium',
      size: 'large',
      bioluminescence: false,
    },
    zoom: {
      far: `   .---.
  <|###|>
     \\_/`,
      medium: `       _____
    .-'=====\`-.
 <=|  /#####\\  |=>
    \`-.___.-'
        \\_/`,
      close: `            ___________
         .-'           \`-.
       .'  .=========.    '.
      /   /  # # # #  \\     \\
   <=|   |  # # # # #  |     |=>
     |   |  # # # # #  |     |
      \\   \\  # # # #  /     /
       '.  '========='    .'
         '-._________.-'
              \\     /
               \\___/`,
    },
  },
  {
    id: 'deep-sea:shark',
    name: 'Shark',
    category: 'creature',
    theme: 'deep-sea',
    art: `       |\\
  ___./ \\._____
 <°_____________)=====>
    \\         /
     \`~~~\\/~~'`,
    description: 'A predatory shark with distinctive dorsal fin',
    whyEffective:
      'Iconic dorsal fin |\\ immediately recognizable. Pointed snout < conveys speed and aggression. Body tapers to =====> suggesting powerful thrust. Trailing ~~~\\/ shows wake.',
    keyCharacters: ['<', '|', '\\', '=', '>', '~', '°'],
    buildingBlocks: ['dorsal fin: |\\', 'snout: <°', 'body: ________)', 'tail: =====>', 'wake: ~~~\\/~~'],
    techniques: ['line-drawing', 'negative-space', 'motion-lines'],
    tags: {
      mood: ['predatory', 'aggressive'],
      movement: 'dynamic',
      density: 'medium',
      size: 'large',
      bioluminescence: false,
    },
    zoom: {
      far: `     ><-->`,
      medium: `       |\\
  ___./ \\._____
 <°_____________)=====>
    \\         /
     \`~~~\\/~~'`,
      close: `            |\\
           / \\
      ___./   \\._______
     /                  \\
    <  °                 )======>
     \\___           ____/
         \\         /
          \`--\\_/--'
            ~~ ~~`,
    },
  },
  {
    id: 'deep-sea:hermit-crab',
    name: 'Hermit Crab',
    category: 'creature',
    theme: 'deep-sea',
    art: `    .oO
   /@@ )
   \\__/=,
    |S|  \\
    ~~~\`\`\``,
    description: 'A hermit crab with shell and eye stalks',
    whyEffective:
      'Eye stalks use size graduation to show depth. @@ creates beady crab eyes. Spiral S hints at snail shell home. Dense lower portion suggests shell weight. ~~~ grounds on sand.',
    keyCharacters: ['o', 'O', '@', 'S', '~', '`'],
    buildingBlocks: ['eye stalks: .oO', 'eyes: @@', 'shell: |S|', 'legs: \\, ```'],
    techniques: ['line-drawing', 'density-shading', 'layering'],
    tags: {
      mood: ['curious', 'armored'],
      movement: 'static',
      density: 'medium',
      size: 'small',
      bioluminescence: false,
    },
    zoom: {
      far: `   oO
  /@)
  |S|`,
      medium: `    .oO
   /@@ )
   \\__/=,
    |S|  \\
    ~~~\`\`\``,
      close: `        . o O
       /@ @   \\
      (  ___   )
       \\(   )/=._.
        \\___/     \\
        /   \\      \\
       | S S |=,    )
       | S S |  \\__/
       |_____|
       ~~~~~~~\`\`\`\`\`\``,
    },
  },
  {
    id: 'deep-sea:bioluminescent-fish',
    name: 'Bioluminescent Fish',
    category: 'creature',
    theme: 'deep-sea',
    art: `   *  .  *  .  *
  <°)))><{*}><(((°>
   *  .  *  .  *`,
    description: 'A school of glowing deep sea fish with light organs',
    whyEffective:
      'Scattered * and . create bioluminescent particle field - irradiation effect makes them appear to glow. Fish <°)))>< use classic ASCII pattern. {*} center fish has glowing organ. Symmetry creates balance.',
    keyCharacters: ['*', '.', '<', '>', '°', '{', '}'],
    buildingBlocks: ['particles: * . scattered', 'fish: <°)))><', 'glow organ: {*}', 'symmetry: mirrored layout'],
    techniques: ['irradiation', 'stippling', 'symmetry', 'negative-space'],
    tags: {
      mood: ['magical', 'alive'],
      movement: 'dynamic',
      density: 'medium',
      size: 'small',
      bioluminescence: true,
    },
    zoom: {
      far: `  * . * . *
   <*))><`,
      medium: `   *  .  *  .  *
  <°)))><{*}><(((°>
   *  .  *  .  *`,
      close: `    *    .    *    .    *    .
        . * .    . * .    . * .
       /°    \\  /°    \\  /°    \\
   <=={  {*}  ><  {*}  ><  {*}  }==>
       \\____/  \\____/  \\____/
        ' * '    ' * '    ' * '
    .    *    .    *    .    *`,
    },
  },
  {
    id: 'deep-sea:viperfish',
    name: 'Viperfish',
    category: 'creature',
    theme: 'deep-sea',
    art: `         *
        /
   {°|||||>--------->
    \\\\\\\\\\\\\\____________)
         ~~~~~~~~~~~~~`,
    description: 'A fearsome viperfish with needle teeth and bioluminescent lure',
    whyEffective:
      'Like anglerfish, isolated * creates glowing lure through irradiation. ||||| represents needle-like teeth. Elongated body -----> shows the fish\'s length. Trailing ~~~~~ suggests deep water. \\\\\\\\ adds lower jaw texture.',
    keyCharacters: ['*', '|', '>', '-', '~', '°'],
    buildingBlocks: ['lure: * on /', 'teeth: |||||', 'body: >--------->', 'tail: ____)', 'water: ~~~~~~~~~~~~~'],
    techniques: ['line-drawing', 'irradiation', 'motion-lines', 'negative-space'],
    tags: {
      mood: ['menacing', 'alien'],
      movement: 'dynamic',
      density: 'medium',
      size: 'medium',
      bioluminescence: true,
    },
    zoom: {
      far: `     *
  {|>--->`,
      medium: `         *
        /
   {°|||||>--------->
    \\\\\\\\\\\\\\____________)
         ~~~~~~~~~~~~~`,
      close: `              *
             /|
            / |
           *  |
   ______     |
  / °    \\    |
 {  |||||||||||>=====================>
  \\  ||||||  ____________________________)
   \\______/
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
    },
  },
];
