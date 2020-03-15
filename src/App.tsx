import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [state, setState] = React.useState({
    celsius: ''
  });
  const [result, setResult] = React.useState(0);

  const handleCelsius = (evt: any) => {
    setState({ celsius: evt.target.value });
  };

  const celsiusToFahrenheit = () => {
    const celsius = parseInt(state.celsius);
    setResult(celsius * 1.8 + 32);
  };

  return (
    <div className='container-fluid p-3 my-3'>
      <h1>Convert Celsius to Fahrenheit</h1>
      <form onSubmit={celsiusToFahrenheit}>
        <div className='form-group'>
          <label htmlFor='celsius'>Celsius:</label>
          <input
            type='number'
            className='form-control'
            value={state.celsius}
            name='celsius'
            onChange={handleCelsius}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <button type='reset' className='btn btn-default'>
          Clear
        </button>
      </form>
      <div className='container-fluid'>
        <div className='row'>
          <h5 id='result'>Fahrenheit: {result}</h5>
        </div>
      </div>
    </div>
  );
};

export default App;
