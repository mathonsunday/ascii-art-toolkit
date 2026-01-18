/**
 * ASCII Art Toolkit - Library
 *
 * Main library class for organizing, querying, and accessing ASCII art.
 * The library maintains a collection of themes, each containing curated pieces.
 */
import { AsciiArt, Theme, QueryOptions, ValidationResult, TagMetadata } from './types';
export declare class AsciiLibrary {
    private themes;
    private allPiecesById;
    /**
     * Register a theme in the library.
     */
    registerTheme(theme: Theme): void;
    /**
     * Add a single piece to an existing theme.
     */
    addPiece(theme: string, piece: AsciiArt): void;
    /**
     * Get a piece by its ID.
     */
    getById(id: string): AsciiArt | undefined;
    /**
     * Get all pieces from a theme.
     */
    getByTheme(theme: string): AsciiArt[];
    /**
     * Get pieces from a theme by category.
     */
    getByCategory(theme: string, category: string): AsciiArt[];
    /**
     * Query the library with flexible options.
     * Can filter by theme, category, and tags.
     */
    query(options: QueryOptions): AsciiArt[];
    /**
     * Get a random piece from a theme.
     */
    random(theme: string): AsciiArt | undefined;
    /**
     * Get a random piece matching query options.
     */
    randomFromQuery(options: QueryOptions): AsciiArt | undefined;
    /**
     * Get all available theme names.
     */
    getThemes(): string[];
    /**
     * Get all categories in a theme.
     */
    getCategories(theme: string): string[];
    /**
     * Get metadata about all tags in a theme.
     * Useful for understanding what query options are available.
     */
    getTagMetadata(theme: string): TagMetadata;
    /**
     * Validate the library for data integrity issues.
     */
    validate(): ValidationResult;
    /**
     * Get summary statistics about the library.
     */
    getStats(): {
        totalPieces: number;
        themes: Record<string, {
            pieces: number;
            categories: string[];
        }>;
    };
}
/**
 * Singleton instance of the library.
 * All themes should be registered on this instance.
 */
export declare const library: AsciiLibrary;
//# sourceMappingURL=library.d.ts.map