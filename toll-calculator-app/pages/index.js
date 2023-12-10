// pages/index.js
import React from 'react';
import Header from '../components/Header';
import RouteVisualization from '../components/RouteVisualization';
import TollDetailsDisplay from '../components/TollDetailsDisplay';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function App() {
  return (
    <div>
      <Header />

      <section>
        {/* Additional content or components */}
        <h2>Additional Features</h2>
        {/* Include other components, features, or content as needed */}
      </section>

      <RouteVisualization />

      <section>
        {/* Additional content or components */}
        <h2>More Information</h2>
        {/* Include other components, features, or content as needed */}
      </section>

      <TollDetailsDisplay />

      {/* Other components or content */}
    </div>
  );
}

export default App;
