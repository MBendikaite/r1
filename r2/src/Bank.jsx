import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import List from './Components/List';
import Message from './Components/Message';
import { crudCreate, crudDelete, crudRead, crudUpdate } from './Utils/localStorage';
import { v4 as uuidv4 } from 'uuid';

const key = 'ClientsDb'


function App() {

  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [data, setData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    setData(crudRead(key))

  }, [lastUpdateTime])

  useEffect(() => {
    if (null === createData) {
      return;
    }
    crudCreate(key, createData);
    setLastUpdateTime(Date.now());
    msg ('New client was created', 'ok');
  }, [createData]);


  useEffect(() => {
    if (null === editData) {
      return;
    }

    crudUpdate(key, editData, editData.id)
    setLastUpdateTime(Date.now());
    msg ('Client was edited', 'ok');
  }, [editData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }

    crudDelete(key, deleteData.id)
    setLastUpdateTime(Date.now());
    msg ('Client was removed' , 'info');
  }, [deleteData]);


  const msg = (text, type) => {
    const id = uuidv4();
    setMessages(m => [...m, { text, type, id }])
    setTimeout(() => {
      setMessages(m => m.filter(m => m.id !== id));
    }, 4000);

  }

  



  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Klientai</span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col -4">
            <Create setCreateData={setCreateData} />
          </div>
          <div className="col-8">
            <List data={data} setEditModalData={setEditModalData} setDeleteModalData={setDeleteModalData} />
          </div>
        </div>
        <Edit editModalData={editModalData} setEditModalData={setEditModalData} setEditData={setEditData} />
        <Delete deleteModalData={deleteModalData} setDeleteModalData={setDeleteModalData} setDeleteData={setDeleteData} />
        <Message messages={messages} />
      </div>
    </>
  );
}

export default App;
