# React + mobX starter

### Usage:

- development: npm run dev 
- testing: npm test
- production build: npm run prod

___If app is going to be served from subdirectory on server, before building for production it is necessary to set path to folder with app in following files:___
- src/.htaccess
- src/index.html (<base> tag)
- src/entry.jsx (where browserhistory is created)