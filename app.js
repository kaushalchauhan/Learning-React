// React.createElement => object
//  root.render(object) => now we can say this is html element

// const heading = React.createElement('h3',
//  {
//     id: 'heading'
// }, 'Hello from React JS');

//! let's create this structure using React
/* <div id='parent'>
    <div id='children'>
        <h1>Sibling 1</h1>
        <h2>Sibling 2</h2>
    </div>
</div> */
// const div = React.createElement('div',{id:'parent'},
//     React.createElement('div',{id:'children'},
//         [React.createElement('h1',{},'sibling 1'),React.createElement('h1',{},'sibling 2)]));

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// const div = React.createElement('div',{id:'parent'},
//     React.createElement('div',{id:'children'},
//         [React.createElement('h1',{},'Sibling 1'),React.createElement('h1',{},'Sibling 2')]));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(div);
// console.log(heading);

/// Laying the Foundation - EP - 03;

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React element(JS Object) => render HTML

// React element
const heading = React.createElement(
  "h2",
  { id: "heading" },
  "created using React"
);

// JSX - is not HTML in JS, this is HTML-like syntax Or XML-like syntax
// JSX (transpiled before it reaches the JS engine) - By PARCEL - Babel

// JSX ==> React.createElement => React element(JS Object) => render HTML
// wrap with () to write JSX in multiline
const jsxHeading = (
  <h2 id="heading">Hello world using JSX, created using JSX syntax </h2>
); // this is React element

// console.log(heading);
// console.log(jsxHeading);

// React Component - 2 Types
// Class Based Component - OLD
// Functional Component - NEW
//! Name should be capitalise of a component

// React Functional Component - a normal JS function that returns JSX, that all is react Element

const HeadingComponet = () => {
  return <h1>Hey there</h1>;
};

const HeadingComponet2 = () => (
  <div id="container">
    {/* //! this is component composition - Component inside component.*/}
    <HeadingComponet />
    <Title />
    {Title()}
    <Title></Title> {/* these 3 are one in same */}
    <h1 className="heading">Hiii, created using Functional Component.</h1>
  </div>
);
const Title = function () {
  return <h1>Learning React</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet2 />);
