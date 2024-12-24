import SearchBar from './components/SearchBar';
function App() {

  const handleSubmit =(term)=>{
    console.log('Do a search with ',term);
    // searchImages(term);
    
  }

  return (
    <div className="App">
      <h1> App</h1>
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
