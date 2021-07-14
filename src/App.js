import './App.css';
import Button from './lib/components/Button';

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('Hello')} name="Click Me" />
    </div>
  );
}

export default App;
