# Setup TypeScript for real projects

Now we already have `tsc -- TypeScript Compiler` installed in our system. We just have to open the directory in which we want to setup TypeScript for our project which means we just have to open our project directory in the terminal and run the command written below:-

    tsc --init

This will create `tsconfig.json` file in our folder.


## Initializing a Node project

To initialize a node project simply run `npm init -y` and a `package.json` file will be generated.

## Setting up Typescript in HTML

`1.` To do this just create an HTML file index.html or whichever name you want.

`2.` Then create a `src` and `dist` folder and in `src` create `index.ts`.

`3.` Now when you run the script the `index.js` file will be created and you have to specify the `index.js` file as script source in HTML file.

`4.` To tell the compiler that create an index.js file and place it in the `dist` folder we have to edit `tsconfig.json`.

`5.` In that you will find `outDir` and there you have to specify you output directory.

`6.` When we compile it, it will generate an `index.js` file in same folder. That's not what we wanted. So to generate that in separate folder which we specified into the `tsconfig.json` we have to run Typescript in `watch mode`. To do this we just simple have type `tsc -w` in terminal. Now whatever we change in Typescript file it will instantly reflect in `index.js` after saving.

`7.` Now to run html file we will use `lite-server` package. To install this simply run `npm i lite-server` in your terminal.

`8`. Now go to `package.json` and create a `start` key and add `lite-server` to it and then run `npm start` in terminal. This will run index.html file on browser.