# ASCII Art Toolkit

A curated library for organizing and accessing high-quality ASCII art across projects.

## Philosophy

ASCII art is fundamentally **copy-pastable content**. This library's job is organization, not generation.

- Commission art from v0 or other design tools
- Add it to the library with clean TypeScript exports
- Apps query the library by theme, category, or random selection
- Over time, the library grows organically as you work on projects

## Installation

```bash
npm install @veronica/ascii-art-toolkit
```

## Quick Start

```typescript
import { library } from '@veronica/ascii-art-toolkit';

// Get a random creature from deep-sea theme
const creature = library.random('deep-sea');
console.log(creature.art);

// Get all creatures in a category
const allFish = library.getByCategory('deep-sea', 'creature');

// Query with filters
const glowing = library.query({
  theme: 'deep-sea',
  category: 'creature',
  tags: { bioluminescence: true },
});

// Get a specific piece by ID
const anglerfish = library.getById('deep-sea:anglerfish');
console.log(anglerfish?.zoom?.close); // Get the close-up version
```

## API

### Library Methods

#### `random(theme: string): AsciiArt | undefined`

Get a random piece from a theme.

```typescript
const creature = library.random('deep-sea');
```

#### `randomFromQuery(options: QueryOptions): AsciiArt | undefined`

Get a random piece that matches query options.

```typescript
const menacing = library.randomFromQuery({
  theme: 'deep-sea',
  tags: { mood: ['menacing'] },
});
```

#### `getById(id: string): AsciiArt | undefined`

Get a piece by its ID.

```typescript
const piece = library.getById('deep-sea:anglerfish');
```

#### `getByTheme(theme: string): AsciiArt[]`

Get all pieces from a theme.

```typescript
const allDeepSea = library.getByTheme('deep-sea');
```

#### `getByCategory(theme: string, category: string): AsciiArt[]`

Get all pieces in a specific category.

```typescript
const creatures = library.getByCategory('deep-sea', 'creature');
const environments = library.getByCategory('deep-sea', 'environment');
```

#### `query(options: QueryOptions): AsciiArt[]`

Advanced query with multiple filters.

```typescript
const results = library.query({
  theme: 'deep-sea',
  category: 'creature',
  tags: {
    bioluminescence: true,
    mood: ['ethereal'],
  },
  limit: 5,
});
```

#### `getThemes(): string[]`

List all registered themes.

```typescript
const themes = library.getThemes(); // ['deep-sea']
```

#### `getCategories(theme: string): string[]`

List all categories in a theme.

```typescript
const cats = library.getCategories('deep-sea');
// ['creature', 'environment', 'structure']
```

#### `getTagMetadata(theme: string): TagMetadata`

Get information about available tags in a theme.

```typescript
const tags = library.getTagMetadata('deep-sea');
// {
//   mood: { type: 'string[]', values: ['predatory', 'ethereal', ...] },
//   bioluminescence: { type: 'boolean', values: [true, false] },
//   ...
// }
```

#### `getStats(): { totalPieces: number; themes: ... }`

Get summary statistics about the library.

```typescript
const stats = library.getStats();
console.log(stats.totalPieces); // 15 (for deep-sea theme)
```

### Data Types

#### `AsciiArt`

```typescript
interface AsciiArt {
  id: string;                    // e.g., "deep-sea:anglerfish"
  name: string;                  // Human-readable name
  category: string;              // 'creature' | 'structure' | 'environment' | 'scene'
  theme: string;                 // Theme identifier
  art: string;                   // The ASCII art string

  description: string;           // What it depicts
  whyEffective: string;          // Why this art works aesthetically
  keyCharacters: string[];       // Important characters used
  buildingBlocks: string[];      // Reusable patterns
  techniques: string[];          // Techniques used

  tags: {
    mood?: string[];            // e.g., ['predatory', 'ethereal']
    movement?: 'static' | 'dynamic';
    density?: 'sparse' | 'medium' | 'dense';
    size?: 'small' | 'medium' | 'large';
    bioluminescence?: boolean;
    [key: string]: any;
  };

  zoom?: {
    far?: string;               // Simplified version
    medium?: string;            // Standard detail level
    close?: string;             // Detailed version
  };
}
```

## Adding New Themes

1. Create a new folder in `themes/` with your theme name
2. Structure it like the `deep-sea/` theme:
   ```
   themes/my-theme/
   ├── creatures.ts
   ├── structures.ts
   ├── environment.ts
   ├── index.ts
   └── README.md
   ```

3. Define your pieces with the `AsciiArt` interface

4. Register in `index.ts`:
   ```typescript
   import { myTheme } from './themes/my-theme/index';
   library.registerTheme(myTheme);
   ```

## Workflow for Adding Pieces

1. Commission ASCII art from v0
2. Export as clean TypeScript (like `deep-sea-ascii-library.ts`)
3. Copy into appropriate theme file (creatures/structures/environment)
4. Add additional tags based on aesthetic judgment
5. Validate with `validateLibrary()`

## Validation

```typescript
import { validateLibrary, validateThemePieces } from '@veronica/ascii-art-toolkit';

// Validate entire library
const result = validateLibrary();
if (!result.valid) {
  console.error('Library errors:', result.errors);
  console.warn('Warnings:', result.warnings);
}

// Validate specific theme
const themeResult = validateThemePieces('deep-sea');
```

## Integration with Projects

### agentic-ui-lab

Replace static ASCII imports with library queries:

```typescript
import { library } from '@veronica/ascii-art-toolkit';

// Instead of: import { anglerfish } from './rovAsciiVariants'
const creature = library.random('deep-sea');

// Display with zoom support
const displayArt = creature.zoom?.medium || creature.art;
```

## Themes

### deep-sea

Bioluminescent creatures and structures of the deep ocean.

15 pieces across 3 categories:
- **Creatures** (8): Anglerfish, Giant Squid, Jellyfish, Octopus, Sea Turtle, Shark, Hermit Crab, Viperfish
- **Structures** (3): Treasure Chest, Deep Sea Diver, Submarine
- **Environment** (3): Coral Reef, School of Fish, Deep Sea Scene

See [Deep Sea Theme Guide](./themes/deep-sea/README.md) for details.

## Design Philosophy

### Why Copy-Paste Over Generation?

ASCII art requires aesthetic taste at every level. Unlike code generation, which can be algorithmically sound but visually boring, ASCII art succeeds entirely on visual appeal.

Trying to algorithmically generate good ASCII art fails because:
1. **Aesthetic judgment is hard** - What makes something look good involves style, proportion, character choice
2. **Context matters** - The same creature looks different in different themes
3. **Composition is crucial** - How elements are arranged and spaced determines impact

Instead, we:
1. Commission beautiful art from skilled designers (v0, Vizio, etc.)
2. Curate and organize pieces in themes
3. Let code handle organization, querying, and composition
4. Let humans handle aesthetic judgment

### Building Blocks

"Building blocks" in this library are **complete, proven pieces** - not fragments.

A building block is a full creature like the Anglerfish, not "head" or "tentacle". You can safely compose scenes using complete pieces, but composing from sub-pieces risks breaking the aesthetic quality.

## License

Personal use library - use as you see fit in your projects.
