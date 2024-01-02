### Learning React From Akshay Saini

## Parcel - is such a Beast acr to Akshay

- Dev Build,
- Local Server,
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++,
- Caching - Faster Build,
- Image Optimization,
- Minification,
- Bundling,
- Compress,
- Consistence Hashing,
- Code Splitting,
- Differential Bundling - support older Browsers,
- Diagnostic,
- Error Handling,
- HTTPs
- Tree Shaking - remove unused code
- Different dev & prod build
- Read More - https://parceljs.org/docs/

## Food App

/\*\*

- Header
- - Logo
- - Nav Items
- Body
  - Search
  - Restaurant Container
  - Restraunt Card
  - Img
  - Name of Res, star rating, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

### Two types of import/export

1. Default import/export
   export default variable name

- import variable name from path.extensions // extension is optional

2. Named import/export
   export const variable

- import {Variable} from path.extensions // extension is optional

# React Hooks

(Normal JS Functions)

- useState() - superpowerful state variable in react
- useEffect()

## 2 types of web app Routing

- Client side routing
- Server side routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create (cartSlice)
- dispatch(action)
- Selector(subscribe)

# Types of Testing (Developer Proscpective)

- Unit Testing - u test ur component in isolation
- Integration Testing
- End to end Testing (e2e)

# Testing Setup in our App

- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel config file To disable default Babel transpilation in Parcel
- Jest configuration - npx jest --init
- Install js dom library
- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my babel config - add this to arr - ["@babel/preset-react", { runtime: "automatic" }],
- Install @testing-library/jest-dom
