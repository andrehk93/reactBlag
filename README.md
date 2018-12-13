# reactBlag

## Installing (Yarn)

If you dont have Yarn installed already, download Chocolatey (https://chocolatey.org/). Then run
```choco install yarn``` from a shell with admin rights.

Then cd to this folder and run the command: yarn

## Scripts

All scripts available can be seen in package.json.

Start local development server (need to add support for mock data):
```yarn run dev```

Build Dist folder from project, Dist-folder goes into the blag environment at NTNU webedit
```yarn run build```

Linting is not supported right now.

## Basics

### WebPack & other stuff
This is a webpack project. All configuration for the bundling of this project is in the webpack.config.js file.
The Yarn.lock file tells us exactly which packages that are installed, which is used for version-control.
Babelrc is the compiler from react and ES6 to js. The tsconfig.json is a configuration file for Typescript (which most likely won't be used)
Typescript is kinda messy together with Material UI.

### Git
Please don't work on the master branch. When you have done some work, send a pull request to master, which I will handle.

### React, React-router, SASS

#### React
This is a basic react project with .jsx files (with support for .tsx and .ts files).

#### React-router
React-router is a way of managing page-loading which enables content-specific switching.
This enables only switching out parts of the site while the rest remains unchanged, which offers a significant boost to performance.
A basic setup of this is added at index.jsx in the src-folder. Long story short, read the react-router docs, they are really short and easily understandable.

#### SASS
Just a way of handling some extra styling in addition to Material UI. Entry point is src/_manifest.scss, which tells WebPack exactly which .scss files to load.
