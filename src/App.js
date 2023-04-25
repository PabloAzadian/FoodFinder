import logo from './logo.svg';
import './App.css';
import Business from "./Business"
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

function App() {
  return (
    <div >
      <header>
        <SearchBar/>
        <BusinessList/>
      </header>
    </div>
  );
}


export default App;
