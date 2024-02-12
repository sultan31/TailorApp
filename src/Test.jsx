import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from './firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

const Test = () => {

    const [allDocs, setDocss] = useState([]);
  
    const fetchContacts = async () => {
    
        const postData = [];
        const q = query(collection(db, "contacts"), where("is_active", "==", 1));

        const querySnapshot = await getDocs(q);
        // 
        querySnapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
        console.log(postData);
        setDocss(postData);
    }


    useEffect(() => {
        fetchContacts();
      }, []);

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2>welcome to test</h2>
        <ul>
        {(allDocs).map((doc, index) => (
          <li key={index} className="list-group-item">
            <strong>Name:</strong> {doc.name}
            <br />
            <strong>Contact No:</strong> {doc.address}
            <br />
            <strong>Address:</strong> {doc.contactNo}
          </li>
        ))}
        </ul>
      </div>
    </div>
  </div>

    
  );
};

export default Test;
