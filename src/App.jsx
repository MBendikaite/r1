import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
// import { crudCreate, crudDelete, crudRead, crudUpdate } from './Components/Utils/localStorage';
import { v4 as uuidv4 } from 'uuid';
import ClientDelete from './Components/FirstBankAplication/ClientDelete';
import ClientsList from './Components/FirstBankAplication/ClientList';
import ClientEdit from './Components/FirstBankAplication/ClientEdit';
import { bank } from './Components/Icons/icons';
import MessageBox from './Components/FirstBankAplication/MessageBox';
import axios from 'axios';
import Animation from './Components/FirstBankAplication/Animation';
// import { Button } from 'bootstrap';
// import EditWithdrawal from './Components/FirstBankAplication/EditWithdrawal';


// const key = 'ClientsDb';
const url = 'http://localhost:3003/clients';

function App() {

    const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
    const [data, setData] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [editModalData, setEditModalData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [deleteModalData, setDeleteModalData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [stat, setStat] = useState(null);
    const [sortBalance, setSortBalance] = useState('')


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data.clients)?.map(c => ({ ...c, name: c.name, lastName: c.lastName, count: c.count, id: c.id }))
            })
        //    setData(crudRead(key))

    }, [lastUpdateTime])

    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post(url, { client: createData })
            .then(res => {
                msg(...res.data.messages);
                setLastUpdateTime(Date.now());
            })

    }, [createData]);


    useEffect(() => {
        if (null === editData) {
            return;
        }

        axios.put(url + '/' + editData.id, { client: editData })
            .then(res => {
                msg(...res.data.messages);
                setLastUpdateTime(Date.now());
            })
    }, [editData]);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }

        axios.delete(url + '/' + deleteData.id)
            .then(res => {
                msg(...res.data.messages);
                setLastUpdateTime(Date.now());
            })

    }, [deleteData]);


    useEffect(() => {
        if (null === data) {
            return;
        }
        setStat(
            data.reduce((clients, client) => ({
                usersAmount: clients.usersAmount + 1,
                count: clients.count + client.count

            }), { usersAmount: 0, count: 0 }
            )
        );
    }, [data]);




    const msg = (text, type) => {
        const id = uuidv4();
        setMessages(m => [...m, { text, type, id }])
        setTimeout(() => {
            setMessages(m => m.filter(m => m.id !== id));
        }, 4000);

    }

    const countSort = _ => {

        switch (sortBalance) {
            case '':
                setSortBalance('up');
                setData(d => [...d].sort((a, b) => a.count - b.count))
                break;
            case 'up':
                setSortBalance('down');
                setData(d => [...d].sort((a, b) => b.count - a.count))
                break;
            default:
                setSortBalance('');
                setData(d => [...d].sort((a, b) => a.row - b.row))
        }
    }






    return (
        <>
       
            <nav className="navbar navbar-light bg-light">
                <strong><span style={{ display: 'flex', gap: '20px', paddingLeft: '20px', fontSize: '25px' }}>{bank} My Bank  </span></strong>
            </nav>
            <div>
        <Animation/>
        </div>
            <main>
                <div style={{ padding: '10px' }}>
                    <MessageBox messages={messages} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-15" style={{ paddingTop: '25px' }}>
                            <ClientsList
                            setEditData={setEditData} 
                            editModalData={editModalData}
                                setDeleteData={setDeleteData}
                                sortBalance={sortBalance}
                                countSort={countSort}
                                stat={stat}
                                createData={createData} 
                                setCreateData={setCreateData}
                                data={data}
                                setEditModalData={setEditModalData}
                                setDeleteModalData={setDeleteModalData}
                                />
                        </div>
                    </div>
                    <ClientEdit
                        editModalData={editModalData}
                        setEditModalData={setEditModalData}
                        setEditData={setEditData} />

                    <ClientDelete
                        deleteModalData={deleteModalData}
                        setDeleteModalData={setDeleteModalData}
                        setDeleteData={setDeleteData} />

                </div>
            </main>

        </>

    );
}

export default App;