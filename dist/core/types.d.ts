/**
 * ASCII Art Toolkit - Core Types
 *
 * Type definitions for the ASCII art library system.
 * Designed around curated, high-quality ASCII art pieces that are
 * organized by theme and queryable by flexible tags.
 */
/**
 * A single piece of ASCII art with metadata.
 *
 * The id should follow the pattern: "theme:name" (e.g., "deep-sea:anglerfish")
 * to ensure global uniqueness across all themes.
 */
export interface AsciiArt {
    id: string;
    name: string;
    category: 'creature' | 'structure' | 'environment' | 'scene';
    theme: string;
    art: string;
    description: string;
    whyEffective: string;
    keyCharacters: string[];
    buildingBlocks: string[];
    techniques: string[];
    tags: {
        mood?: string[];
        movement?: 'static' | 'dynamic';
        density?: 'sparse' | 'medium' | 'dense';
        size?: 'small' | 'medium' | 'large';
        bioluminescence?: boolean;
        [key: string]: any;
    };
    zoom?: {
        far?: string;
        medium?: string;
        close?: string;
    };
}
/**
 * A collection of ASCII art pieces organized by theme.
 */
export interface Theme {
    name: string;
    description: string;
    pieces: AsciiArt[];
}
/**
 * Options for querying the library.
 */
export interface QueryOptions {
    theme?: string;
    category?: 'creature' | 'structure' | 'environment' | 'scene';
    tags?: Record<string, any>;
    limit?: number;
}
/**
 * Result of library validation.
 */
export interface ValidationResult {
    valid: boolean;
    errors: string[];
    warnings?: string[];
}
/**
 * Metadata about available tags in a theme.
 */
export interface TagMetadata {
    [key: string]: {
        type: 'string' | 'boolean' | 'string[]' | 'enum';
        values?: any[];
        description?: string;
    };
}
//# sourceMappingURL=types.d.ts.map