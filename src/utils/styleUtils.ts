/**
 * Converts pixel values to rem units
 * @param pixels - The pixel value to convert
 * @param baseFontSize - The base font size in pixels (default: 16)
 * @returns The rem value as a string
 */
export const pixelsToRem = (pixels: number, baseFontSize = 16): string => {
	return `${pixels / baseFontSize}rem`;
};

/**
 * Generates consistent spacing values based on a scale
 * @param scale - The scale multiplier
 * @param baseSize - The base size in pixels (default: 4)
 * @returns The spacing value in rem
 */
export const spacing = (scale: number, baseSize = 4): string => {
	return pixelsToRem(scale * baseSize);
};

/**
 * Combines multiple CSS class names, filtering out falsy values
 * @param classes - Array of class names or conditional classes
 * @returns Combined class string
 */
export const combineClasses = (...classes: (string | undefined | null | false)[]): string => {
	return classes.filter(Boolean).join(' ');
};
