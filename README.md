# jest_with_es6
 This repository will explain how to integrate Jest with ES6
 
Steps:
1. Execute ```$npm install --save-dev jest babel-jest @babel/preset-env @babel/runtime @babel/plugin-transform-runtime```
2. Create a new file named '**.babelrc**'
3. Add below content in **.babelrc**
```
   {
      "presets": ["@babel/preset-env"],
      "plugins": [
        ["@babel/transform-runtime"]
      ]
  }
```
Reference:
https://www.youtube.com/watch?v=kA9Pdu-IblI
https://linkstraffic.net/using-jest-with-es6-modules/
https://itnext.io/writing-scripts-as-frontend-with-es6-and-jest-bb53d32da8b5
