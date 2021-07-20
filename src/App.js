import Reviews from './components/Reviews/Reviews';

import DummyData from './components/Reviews/Data';

function App() {
  return (
    <div className="App">
      <Reviews reviews={JSON.parse(DummyData).reviews} />
    </div>
  );
}

export default App;
