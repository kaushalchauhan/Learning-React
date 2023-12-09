

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

import React from 'react';
import ReactDOM from 'react-dom/client';
const div = React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'children'},
        [React.createElement('h1',{},'Sibling 1'),React.createElement('h1',{},'Sibling 2')])); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
// console.log(heading);
