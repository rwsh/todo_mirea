import { useState, useEffect } from "react";
import AddItem from "./components/AddItem";
import Items from "./components/Items";
import axios from "axios"

export default function App() {
  let AllItems = [];
  const [items, setItems] = useState([]);
  
  async function Load() {
    let AllItems = [];
    const host = axios.create({baseURL: "http://localhost:3001/"});
    await host.get("api/load").then((res)=> {
        AllItems = res.data;
    });
    setItems(AllItems.data);
  }

  useEffect(() => {
    Load();
  }, []);

  async function Add(body) {
    if(body.length >= 1) {
          let id = -1;
          const host = axios.create({baseURL: "http://localhost:3001/"});
          await host.get("api/maxid").then((res) => {
              const {max}  = res.data
              id = max + 1;
          });
          
          setItems([...items, {id: id, body: body, done: 0}])

          const hostpost = axios.create({baseURL: "http://localhost:3001/"});
          await hostpost.post("api/add", {id: id, body: body, done: 0});
    }
  }

  async function Check(id, done) {
    if (done === 0) {
      done = 1;
    } else {
      done = 0;
    }

    AllItems = [];
    items.map((el)=>{
      if(el['id'] === id) {
        AllItems.push({id: id, body: el.body, done: done});
      } else {
        AllItems.push({id: el.id, body: el.body, done: el.done});
      } return null;
    });
    setItems(AllItems);

    const host = axios.create({baseURL: "http://localhost:3001/"});
    await host.get("api/check/"+id+"/"+done);
}

async function Delete() {
  AllItems = [];
  items.map((el)=>{
    if(el['done'] === 0) {
      AllItems.push({id: el.id, body: el.body, done: el.done});
    } return null;
  });
  setItems(AllItems);

  const host = axios.create({baseURL: "http://localhost:3001/"});
  await host.get("api/deletedone");
}
  
  return (
    <div>
      <h2>Поток оперативных дел</h2>
      <AddItem Add={Add}/>
      <Items items={items} onCheck={Check} onDelete={Delete}/>
    </div>
  );
}

