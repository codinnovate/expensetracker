'use client';

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";


export default function Home() {
  const [items, setItems] = useState([
    { name: 'Coffe', price:65.65},
    { name: 'Data', price:40.},
    { name: 'Food', price:9.657},
    { name: 'kettle', price:200.57},
  ]);
  const [total, setTotal] = useState(0); 
  const [newItem, setNewItem] = useState({ name: '', price: '' })
  


  // add item to database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.price !== '') {
      // setItems([...items, newItem]);
      await addDoc(collection(db, 'myitems'), {
        name: newItem.name.trim(),
        price: newItem.price,
      });
      setNewItem({ name: '', price: '' });
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
      <div className='bg-slate-800 p-4 rounded-lg'>
      <form className='grid grid-cols-6 items-center text-black '>
            <input
              value={newItem.name}
              onChange={(e) =>
                 setNewItem({ ...newItem, name: e.target.value })}
              className='col-span-3 p-3 border' 
              type='text'
              placeholder='Enter Item' />
        <input 
        className='col-span-2 p-3 border mx-3' 
              type='text'
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })}
         placeholder='Enter $' />
            <button
              className='text-white bg-slate-500 hover:bg-slate-900 p-3 text-xl'
              type='submit'
            > +
            </button>
          </form>
          
          <ul>
            {items.map((item, id) => (
              <li key={item.id} className="my-4 flex justify-between w-full">
                <div className="p-4 w-full flex justify-between">
                  <span className="capitalize">{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button className="ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16">X</button>
              </li>
            ))}
      </ul>
          {items.length < 1 ? "" : (
            <div className="flex justify-between p-3 ">
              <span>Total</span>
              <span>${total}</span>
              </div>
       )}
      </div>
      </div>
    </main>
  )
}
