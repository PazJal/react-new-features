import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const App = ( props ) => {

  const [ count, setCount ] = useState(props.count);

  return (
    <div>
      <p>The current count is { count }</p>
      <button onClick={ () => setCount( count - 1) }> -1 </button>
      <button onClick={ () => setCount( props.count ) }> Reset </button>
      <button onClick={ () => setCount( count + 1) }> +1 </button>
    </div>
);
}

App.defaultProps = {
  count: 0
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App count={-12}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
