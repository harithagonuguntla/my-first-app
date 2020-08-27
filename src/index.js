//import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
    return <h1>Hi there!</h1>
}

//Take react component and show it on screen
ReactDOM.render(<App />, document.getElementById('root'));