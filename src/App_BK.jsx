// import logo from './logo.svg';
import {useEffect} from 'react';
import {getDatabase, set, ref} from "firebase/database";
import {app} from "./firebase";
import './App.css';

const db = getDatabase(app);

function App() {

  const getData = () => {
    console.log('get called');
    // get(child(db, "users")).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot);
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });
  }

  const putData = () => {
    set(ref(db, "users/azhar"), {
      id:1,
      name:'azhar khan',
      salary:45000
    });
  }

  useEffect(() => {
    getData();
}, []);

  return (
    <div className="App">
      <h1>Firebase React App</h1>

      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
