import React, { useEffect } from "react";
import Header from "./components/Header";
import { useState } from "react";
import ItemView from "./components/ItemView";
import Cover from "./components/Cover";
import { Button, TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

function App() {

  const data = [
    {
      id: 1,
      image: 'https://target.scene7.com/is/image/Target/GUEST_d768bb00-04fe-44ae-a712-d2502c429f5e?wid=488&hei=488&fmt=pjpeg',
      product: 'Honey Nut Cherios',
      brand: 'General Mills',
      onHand: 49,
      perCase: 12,
      price: 3.49,
      salePrice: 1.70
    },
    {
      id: 2,
      image: 'https://target.scene7.com/is/image/Target/GUEST_d768bb00-04fe-44ae-a712-d2502c429f5e?wid=488&hei=488&fmt=pjpeg',
      product: 'Honey Nut Cherios',
      brand: 'General Mills',
      onHand: 49,
      perCase: 12,
      price: 3.49,
      salePrice: 1.99
    },
    {
      id: 3,
      image: 'https://target.scene7.com/is/image/Target/GUEST_d768bb00-04fe-44ae-a712-d2502c429f5e?wid=488&hei=488&fmt=pjpeg',
      product: 'Salmon',
      brand: 'Whole Foods',
      onHand: 49,
      perCase: 12,
      price: 3.49,
      salePrice: 1.99
    },
    {
      id: 4,
      image: 'https://target.scene7.com/is/image/Target/GUEST_d768bb00-04fe-44ae-a712-d2502c429f5e?wid=488&hei=488&fmt=pjpeg',
      product: 'Frosted Flakes',
      brand: 'Kellogs',
      onHand: 49,
      perCase: 12,
      price: 3.49,
      salePrice: 1.99
    }
]

  // View Item
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  //useEffect(() => {setView(!view);}, []);

  const viewItem = (item) => {
      setView(true);
      setItem(item);
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

  // Data Grid
  const rows = data;
  const columns = [
    {field: 'product', headerName: 'Name', width: 150},
    {field: 'brand', headerName: 'Brand', width: 150},
    {field: 'onHand', headerName: 'On Hand', width: 150},
    {field: 'perCase', headerName: 'Per Case', width: 150},
    {field: 'price', headerName: 'Price', width: 150},
    {field: 'salePrice', headerName: 'Sale Price', width: 150},
    {field: 'view', headerName: '', width: 150, renderCell: (params) => <Button onClick={(e) => {
      viewItem(params.row);
    }}>View</Button>}
  ]

  return (
    <div className="container m-auto mt-6">
      <Header />
      {view && <Cover />}
      {view && <ItemView item={item} onClick={() => setView(false)}/>}
      <form onSubmit={onSearch} className="mt-10 text-center flex justify-center items-center space-x-6">
          <TextField id="item-name" label='Item Name' variant="outlined" onChange={updateForm}></TextField>
          <TextField id="department" label='Department' variant="outlined" onChange={updateForm}></TextField>
          <TextField id="brand" label='Brand' variant="outlined" onChange={updateForm}></TextField>
          <TextField id="itemID" label='ItemID' variant="outlined" onChange={updateForm}></TextField>
          <Button>Search</Button>
      </form>
      <div className="container m-auto mt-6 h-screen">
        <DataGrid 
          rows={rows} 
          columns={columns} 
          sx={{
            overflow: 'hidden'
          }}
        />
      </div>
    </div>
  );
}

export default App;
