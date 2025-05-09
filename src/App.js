import "./App.css";
import Blocks from "./components/Blocks";
import Select from "react-select";

function App() {
  const options = [
    { value: "3", label: "3X3" },
    { value: "4", label: "4X4" },
    { value: "5", label: "5X5" },
    { value: "6", label: "6x6" },
  ];


  // const handleChange = (option) => {
  // console.log("🚀 ~ handleChange ~ option:", option);

  // }
  return (
    <div className="App">
      <h2>TIC TAC TOE</h2>
      {/* <div className="select">
        
        <Select
           onChange={handleChange}
          defaultValue={options[0]}
          isSearchable={false}
          placeholder="Select grid"
          myFontSize="20px"
          options={options}
        />
      </div> */}

      <Blocks />
    </div>
  );
}

export default App;
