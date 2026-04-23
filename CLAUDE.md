This project provides a list of fully configurable components to be used for creating User Interfaces and to provide a consistent graphical design between pages.

# Code Style

## General Guidelines

- JavaScript/TypeScript strings: Use single quotes (`'string'`).
- JSX attributes and expressions: Use double quotes (`className="example"`).
- Semicolons and trailing commas are always required.
- When working with objects, add spacing inside the braces for readability (`{ key: value }`).
- When working with arrays, do not add spaces inside the brackets (`[item1, item2]`).

## Styling Guidelines

- Each component has its own `.css` file, it is expected that all custom style rules will be placed under this file (assigned to their respective custom class) and all Tailwind utility classes will bet set at its own `.tsx` file.
- BEM naming convention: For custom classes, the format to be used is BEM.
- Variables: Avoid hardcoded colors and prefer the usage of variables to assign them.
- All CSS properties within a selector must be ordered alphabetically.

# Commenting

Add JSDoc comments to functions, methods, classes, fields and enums with proper annotations:

- Use `@param` for parameters.
- Use `@returns` for return values.
- Use `@throws` for exceptions.
- Keep descriptions concise but informative.

# Miscellaneous

Do not create any assets or media files, nor read any image files. For placeholder content use the following as the source:

- Images: https://placehold.co/600x400
- Video: https://lorem.video/720p
