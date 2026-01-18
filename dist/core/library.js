/**
 * ASCII Art Toolkit - Library
 *
 * Main library class for organizing, querying, and accessing ASCII art.
 * The library maintains a collection of themes, each containing curated pieces.
 */
export class AsciiLibrary {
    constructor() {
        this.themes = new Map();
        this.allPiecesById = new Map();
    }
    /**
     * Register a theme in the library.
     */
    registerTheme(theme) {
        this.themes.set(theme.name, theme);
        // Index all pieces by ID for quick lookup
        theme.pieces.forEach((piece) => {
            this.allPiecesById.set(piece.id, piece);
        });
    }
    /**
     * Add a single piece to an existing theme.
     */
    addPiece(theme, piece) {
        const t = this.themes.get(theme);
        if (!t) {
            throw new Error(`Theme "${theme}" not registered`);
        }
        // Verify ID matches theme
        if (!piece.id.startsWith(`${theme}:`)) {
            throw new Error(`Piece ID "${piece.id}" should start with "${theme}:" for theme "${theme}"`);
        }
        if (this.allPiecesById.has(piece.id)) {
            throw new Error(`Piece with ID "${piece.id}" already exists`);
        }
        t.pieces.push(piece);
        this.allPiecesById.set(piece.id, piece);
    }
    /**
     * Get a piece by its ID.
     */
    getById(id) {
        return this.allPiecesById.get(id);
    }
    /**
     * Get all pieces from a theme.
     */
    getByTheme(theme) {
        const t = this.themes.get(theme);
        return t ? [...t.pieces] : [];
    }
    /**
     * Get pieces from a theme by category.
     */
    getByCategory(theme, category) {
        const pieces = this.getByTheme(theme);
        return pieces.filter((p) => p.category === category);
    }
    /**
     * Query the library with flexible options.
     * Can filter by theme, category, and tags.
     */
    query(options) {
        let results = [];
        // Filter by theme
        if (options.theme) {
            results = this.getByTheme(options.theme);
        }
        else {
            // If no theme specified, search across all themes
            results = Array.from(this.allPiecesById.values());
        }
        // Filter by category
        if (options.category) {
            results = results.filter((p) => p.category === options.category);
        }
        // Filter by tags
        if (options.tags) {
            results = results.filter((piece) => {
                return Object.entries(options.tags).every(([key, value]) => {
                    const pieceTag = piece.tags[key];
                    if (Array.isArray(value)) {
                        // If query value is array, check if piece tag includes any of those values
                        if (Array.isArray(pieceTag)) {
                            return value.some((v) => pieceTag.includes(v));
                        }
                        return value.includes(pieceTag);
                    }
                    else {
                        // Direct comparison
                        if (Array.isArray(pieceTag)) {
                            return pieceTag.includes(value);
                        }
                        return pieceTag === value;
                    }
                });
            });
        }
        // Apply limit if specified
        if (options.limit && options.limit > 0) {
            results = results.slice(0, options.limit);
        }
        return results;
    }
    /**
     * Get a random piece from a theme.
     */
    random(theme) {
        const pieces = this.getByTheme(theme);
        if (pieces.length === 0)
            return undefined;
        return pieces[Math.floor(Math.random() * pieces.length)];
    }
    /**
     * Get a random piece matching query options.
     */
    randomFromQuery(options) {
        const results = this.query(options);
        if (results.length === 0)
            return undefined;
        return results[Math.floor(Math.random() * results.length)];
    }
    /**
     * Get all available theme names.
     */
    getThemes() {
        return Array.from(this.themes.keys());
    }
    /**
     * Get all categories in a theme.
     */
    getCategories(theme) {
        const pieces = this.getByTheme(theme);
        const categories = new Set(pieces.map((p) => p.category));
        return Array.from(categories).sort();
    }
    /**
     * Get metadata about all tags in a theme.
     * Useful for understanding what query options are available.
     */
    getTagMetadata(theme) {
        const pieces = this.getByTheme(theme);
        const metadata = {};
        pieces.forEach((piece) => {
            Object.entries(piece.tags).forEach(([key, value]) => {
                if (!metadata[key]) {
                    let type = 'string';
                    if (Array.isArray(value)) {
                        type = 'string[]';
                    }
                    else if (typeof value === 'boolean') {
                        type = 'boolean';
                    }
                    metadata[key] = {
                        type,
                        values: [],
                    };
                }
                // Collect unique values
                if (Array.isArray(value)) {
                    value.forEach((v) => {
                        if (!metadata[key].values.includes(v) &&
                            !metadata[key].values.some((existing) => existing === v)) {
                            metadata[key].values.push(v);
                        }
                    });
                }
                else if (value !== undefined && value !== null) {
                    if (!metadata[key].values.includes(value) &&
                        !metadata[key].values.some((existing) => existing === value)) {
                        metadata[key].values.push(value);
                    }
                }
            });
        });
        return metadata;
    }
    /**
     * Validate the library for data integrity issues.
     */
    validate() {
        const errors = [];
        const warnings = [];
        // Check for duplicate IDs
        const seenIds = new Set();
        Array.from(this.allPiecesById.keys()).forEach((id) => {
            if (seenIds.has(id)) {
                errors.push(`Duplicate piece ID: "${id}"`);
            }
            seenIds.add(id);
        });
        // Check each piece for required fields
        this.allPiecesById.forEach((piece) => {
            if (!piece.id)
                errors.push(`Piece missing id`);
            if (!piece.name)
                errors.push(`Piece ${piece.id} missing name`);
            if (!piece.category)
                errors.push(`Piece ${piece.id} missing category`);
            if (!piece.theme)
                errors.push(`Piece ${piece.id} missing theme`);
            if (!piece.art)
                errors.push(`Piece ${piece.id} missing art`);
            if (!piece.description)
                warnings.push(`Piece ${piece.id} missing description`);
            if (!piece.whyEffective)
                warnings.push(`Piece ${piece.id} missing whyEffective`);
            // Verify ID matches theme
            if (!piece.id.startsWith(`${piece.theme}:`)) {
                errors.push(`Piece ${piece.id} ID doesn't match theme "${piece.theme}"`);
            }
            // Check if theme exists
            if (!this.themes.has(piece.theme)) {
                errors.push(`Piece ${piece.id} references unregistered theme "${piece.theme}"`);
            }
        });
        return {
            valid: errors.length === 0,
            errors,
            warnings,
        };
    }
    /**
     * Get summary statistics about the library.
     */
    getStats() {
        const stats = {};
        this.themes.forEach((theme) => {
            const categories = new Set(theme.pieces.map((p) => p.category));
            stats[theme.name] = {
                pieces: theme.pieces.length,
                categories: Array.from(categories).sort(),
            };
        });
        return {
            totalPieces: this.allPiecesById.size,
            themes: stats,
        };
    }
}
/**
 * Singleton instance of the library.
 * All themes should be registered on this instance.
 */
export const library = new AsciiLibrary();
//# sourceMappingURL=library.js.map