import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import ImageList from "./components/ImageList";



function App() {
  const handleSubmit = async(term) => {
    console.log("Do a search with ", term);
    const result = await SearchImages(term);
     console.log(result);
     
  };

  return (
    <div className="App">
      <h1> App</h1>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
