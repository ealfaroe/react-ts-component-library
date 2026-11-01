# UI Component Library

A React and TypeScript component library for building accessible and flexible applications. It combines reusable UI components, documentation through Storybook and markdown files for both AI agents and developers, alongside a testing suite tailored to each component.

Development focuses on consistent component APIs leveraging TypeScript for props and native DOM features, accessibility, responsive layouts, testing and the expected behavior of the components in an application (loading states, validations, configuration per layout, etc..).

## Current status

Development was halted due to other priority projects. The repository currently includes a Button, Image and Text components. Some additional tools have been configured such as Vite, Tailwind, Biome, Vitest and React Testing Library. Component tests and stories are placeholders for now.

## Planned improvements and features

- Accessible basic UI components and advanced components for forms, navigation, tables, modals, carousels, accordions and many more.
- Component documentation with configurable examples.
- A design system created in Figma which the application will base its tokens from (themes and UI appearance).
- Display of content backed by API calls (pagination, filters, validations, error handling and processing responses).
- Backend handled with Node.js and PostgreSQL for storing the information and persisting configurations (themes, layouts, preferences).
- Examples of websites using the components from the same library, such as dashboards or reporting interfaces.
- Automated testing using PlayWright and connecting to other MCP tools such as Confluence for documentation, GitHub for task management and CI/CD.
