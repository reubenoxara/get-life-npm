
import { Calendar, Button, NumberInput , DropDown, SingleSelect, InsuranceCalendarBlock, AdditionalProtection } from 'get-life-ts-components';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NumberInput  isCurrency={true} />

        <AdditionalProtection />
        
        <Button label='hello' />

        <DropDown options={[ { value: '1', label: '1' } , { value: '2', label: '2' }]} />

        <SingleSelect options={[ 
          { label: 'label a', value: 'a' }, 
          { label: 'label b', value: 'b' },
        ]
        }/>

        <InsuranceCalendarBlock />

        <Calendar />

      </header>
    </div>
  ); 
}

export default App;
