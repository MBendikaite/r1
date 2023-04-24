import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import { crudCreate, crudDelete, crudRead, crudUpdate } from './Utils/localStorage';
import { v4 as uuidv4 } from 'uuid';
import MessagesBox from './Components/FirstBankAplication/MessagesBox';
import ClientDelete from './Components/FirstBankAplication/ClientDelete';
import ClientsList from './Components/FirstBankAplication/ClientsList';
import ClientEdit from './Components/FirstBankAplication/ClientEdit';
import { bank } from './Components/Social/Icons';
import DeleteBalance from './Components/FirstBankAplication/DeleteBalance';

const key = 'ClientsDb'


function App() {

    const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
    const [data, setData] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [editModalData, setEditModalData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [deleteBalance, setDeleteBalance] = useState(0)
    const [deleteModalData, setDeleteModalData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [stat, setStat] = useState(null);


    useEffect(() => {
        setData(crudRead(key))

    }, [lastUpdateTime])

    useEffect(() => {
        if (null === createData) {
            return;
        }
        crudCreate(key, createData);
        setLastUpdateTime(Date.now());
        msg('New client was created', 'ok');
    }, [createData]);


    useEffect(() => {
        if (null === editData) {
            return;
        }

        crudUpdate(key, editData, editData.id)
        setLastUpdateTime(Date.now());
        msg('Client balance was edited', 'ok');
    }, [editData]);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }

        crudDelete(key, deleteData.id)
        setLastUpdateTime(Date.now());
        msg('Client was removed', 'info');
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

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <strong><span style={{ display: 'flex', gap: '20px', paddingLeft: '20px', fontSize: '25px' }}>{bank} My Bank </span></strong>
            </nav>
            <main>
                <div style={{ padding: '10px' }}>
                    <MessagesBox messages={messages} />
                </div>
                <div className="container">
                    <div className="row">
                        sddsd
                        <div className="col-15" style={{ paddingTop: '25px' }}>
                            <ClientsList stat={stat} createData={createData} setCreateData={setCreateData} data={data} setEditModalData={setEditModalData} setDeleteModalData={setDeleteModalData} />
                        </div>
                    </div>
                    <ClientEdit editModalData={editModalData} setEditModalData={setEditModalData} setEditData={setEditData} />
                    <ClientDelete deleteModalData={deleteModalData} setDeleteModalData={setDeleteModalData} setDeleteData={setDeleteData} />
                    <DeleteBalance  deleteBalance={{deleteBalance}} setDeleteBalance={setDeleteBalance} />
                </div>
            </main>

        </>

    );
}

export default App;
