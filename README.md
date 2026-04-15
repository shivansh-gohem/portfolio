# Shivansh Sahu — Portfolio

A beautifully structured, premium, and highly creative personal portfolio application built with **React** and **Vite**.

## Features

*   **Component-Based Architecture:** Fully modular React components for easy maintenance and scaling.
*   **Centralized Data:** Skills and projects are managed in `src/data/`, keeping logic separate from UI.
*   **Advanced Aesthetics:**
    *   Glassmorphic pill-shaped navigation bar.
    *   Interactive particle field background that repels away from the mouse cursor.
    *   Infinite scrolling tech-stack marquee.
    *   Custom interactive floating cursor.
    *   Nested glass projection cards for projects.
    *   Terminal UI mockups built entirely with CSS.
*   **Premium Typography:** Utilizing *Syne* for display text, *Space Grotesk* for body text, and *JetBrains Mono* for structural text.

## Tech Stack

*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Styling:** Pure CSS with Custom Properties (CSS Tokens) and advanced animations

## Getting Started

To run this project locally, you need [Node.js](https://nodejs.org/) installed on your machine.

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/shivansh-gohem/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Customizing Data

To update the content of your portfolio, you don't need to touch any JSX. Simply edit the data files:

*   **`src/data/projects.js`**: Add, remove, or edit your projects here. Include the `terminal` array if you want the project to render with a terminal mockup visualization.
*   **`src/data/skills.js`**: Update your skill percentages, colors, and the infinite scrolling tech-stack marquee list.

## License

© 2025 Shivansh Sahu. Built with intention.
