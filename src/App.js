import React, { useEffect } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import ResultTable from "./components/ResultTable";
import { useState } from "react";
import ItemView from "./components/ItemView";
import Cover from "./components/Cover";

function App() {

  // View Item
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

 // useEffect(() => {setView(false);}, []);

  const viewItem = (item) => {
      setItem(item);
      setView(true);
      console.log(item);
  }

  // Form state
  const initialFormData = {
    itemName: '',
    department: '',
    brand: '',
    orderID: '',
    itemID: ''
  }
  const [formData, setForm] = useState(initialFormData);

  const updateForm = (e) => {
    setForm({...formData,[e.target.name]: e.target.value});
  };

  function onSearch(e) {
    e.preventDefault();
    console.log(formData);
    // API request
  }
  // End form state

  return (
    <div className="container m-auto mt-6">
      <Header />
      {view && <Cover />}
      {view && <ItemView item={item} onClick={() => setView(false)}/>}
      <form onSubmit={onSearch} className="mt-10 text-center flex justify-center items-center space-x-6">
          <SearchInput name='itemName' onChange={updateForm} placeholder='Item Name'/>
          <SearchInput name='department' onChange={updateForm} placeholder='Department'/>
          <SearchInput name='brand' onChange={updateForm} placeholder='Brand'/>
          <SearchInput name='orderID' onChange={updateForm} placeholder='OrderID'/>
          <SearchInput name='itemID' onChange={updateForm} placeholder='ItemID'/>
          <Button text='Search' bgColor='bg-blue-400' bgColorHover='hover:bg-blue-600'/>
      </form>
      <ResultTable onClick={viewItem} />
    </div>
  );
}

export default App;
