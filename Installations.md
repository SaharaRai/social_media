### Installations:

npm i create-react-app
npm i firebase
npm i date-fns
npm i react-loading-skeletons
npm i react-router-dom
npm install -D tailwindcss
npm i -D prop-types
npm i -D postcss postcss-cli
npm install npm-run-all --save-dev
npm i -D autoprefixer
npm install @welldone-software/why-did-you-render --save-dev

Script changes for tailwind in package.json as follows:
FROM:
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

TO:
"scripts": {

"build:css": "postcss src/styles/tailwind.css -o src/styles/app.css",
"watch:css": "postcss src/styles/tailwind.css -o src/styles/app.css --watch",
"react-scripts:start": "sleep 5 && react-scripts start",
"react-scripts:dist": "react-scripts build",
"start": "run-p watch:css react-scripts:start",
"build": "run-s build:css react-scripts:dist",
"test": "react-scripts test",
"eject": "react-scripts eject"
},
