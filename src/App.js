// This file merges our main components in one big component
// for more organization

// Import css files
import Search from './components/search';
import './styles/globals.css';


function App() {
  return (
    <main>
      
      <h1>هذا هو التطبيق</h1>
      {/* Here will be the search input field */}
      <Search/>

      {/* Here will be the output of search results components */}
    </main>
  );
}

export default App;
