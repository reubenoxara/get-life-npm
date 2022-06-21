
import { Button, NumberInput , DropDownInput} from 'get-life-ts-components';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NumberInput  isCurrency={true} />
        
        <Button label='hello' />

        <DropDownInput optionList={[ { value: '1', label: '1' } , { value: '2', label: '2' }]} />

      </header>
    </div>
  );
}

export default App;
