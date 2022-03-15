# jest_with_es6
 This repository will explain how to integrate Jest with ES6
 
Steps:
1. Execute $npm install --save-dev jest babel-jest @babel/preset-env @babel/runtime @babel/plugin-transform-runtime
2. Create a new file named '.babelrc'
3. Add below content in .babelrc
   {
      "presets": ["@babel/preset-env"],
      "plugins": [
        ["@babel/transform-runtime"]
      ]
  }

