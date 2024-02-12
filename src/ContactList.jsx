import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './AddModal';
// import { ref } from 'firebase/firestore';
import {db} from './firebase'
// import { doc, getDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs } from "firebase/firestore";

const ContactList = () => {
  
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [filterValue, setFilterValue] = useState('');
  
  const fetchDocuments = async () => {
    
    try {
      
      const q = query(collection(db, "contacts"), where("is_active", "==", 1));

      const snapshot = await getDocs(q);
      const documentsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDocuments(documentsData);
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  }

  const [showModal, setShowModal] = useState(false);

  

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const [contacts, setContacts] = useState([]);
  
  
  

  useEffect(() => {
    fetchDocuments();
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm.indexOf(doc.contactNo) > -1 ||
        doc.address.toLowerCase().includes(searchTerm.toLowerCase())


    // Object.values(doc).some(value =>
    //   typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    // )
  );


  return (
    <div className="container mt-5">
      <h2>Contact List</h2>
      <button className='btn btn-success' onClick={handleOpenModal}>
        Add Contact
      </button>
      
      
      <AddModal showModal={showModal} handleClose={handleCloseModal} />
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div>
      <ul>
        {searchTerm ? filteredDocuments : documents.map((doc, index) => (
          <li key={index}>
            {/* Render your document data here */}
            <p>{doc.name}</p>
            <p>{doc.address}</p>
            <p>{doc.contactNo}</p>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
};

export default ContactList;
