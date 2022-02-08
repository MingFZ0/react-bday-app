// import the data from the data.js file
import './App.css';
import data from './data';
import ListComponent from './components/ListComponent'
import MonthsDropDown from './components/MonthsDropDown'

function App() {
  return (
    <main className="App">
      <section>
        <h1>Bday calendar app</h1>
        {/* create a component called MonthsDropDown.js and add the code below */}
        {/* create an arry of strings iwth 12 months of the year */}
        {/* show all months of the year, inside the <select> html elment */}
        <MonthsDropDown />
        <h3>There are XX birthday the month of XX</h3>
        <ListComponent people={data} />
      </section>
    </main>
  );
}


export default App;
