
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name={"Doe, Jane"} age={"45"} haircolor={"Black"} initialAge={45} />
      <Person name={"Smith, John"} age={"88"} haircolor={"Brown"} initialAge={88} />
      <Person name={"Fillmore, Millard"} age={"50"} haircolor={"Grey"} initialAge={50} />
      <Person name={"Smith, Maria"} age={"62"} haircolor={"Blonde"} initialAge={62} />
    </div>
  );
}

export default App;
