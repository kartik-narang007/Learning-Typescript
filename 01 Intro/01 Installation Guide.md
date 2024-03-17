# TypeScript Installation and First Program

## Introduction
TypeScript is a powerful superset of JavaScript that adds static typing and other features to help build robust and scalable applications. Learning TypeScript is essential for modern web development, especially in frameworks like React. In this guide, we'll cover how to install TypeScript globally on your system and create your first TypeScript program.

## Installation
There are two primary ways to install TypeScript: globally or within a project.

### Global Install
A global installation is beneficial for understanding TypeScript concepts without the need for project-specific configurations.

1. Navigate to the TypeScript documentation's global installation section.
2. Execute the following command in your terminal to install TypeScript globally:
    ```bash 
    npm install -g typescript
3. Verify the TypeScript version installed:
Example output: `5.4.2`

    tsc-v
## First Program
Let's create a simple TypeScript program.

1. Create a file named `intro.ts`.
2. Note: If you're using TypeScript with React or similar frameworks, you can use `.tsx` extension for components.
3. TypeScript code cannot be executed directly. Instead, compile it to JavaScript using the TypeScript compiler (`tsc`).
4. Execute the following command in the terminal to compile your TypeScript file:

        tsc filename.ts