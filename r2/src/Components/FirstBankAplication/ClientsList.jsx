import { useState } from "react";
import { userBig, userSmall, eurSmall, eurBig, bank } from "../Social/Icons";

export default function ClientsList({ stat, data, setEditModalData, setDeleteModalData, setCreateData, editData, setEditData }) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [count, setcount] = useState(0);

    const doName = e => {
        setName(e.target.value);
    }

    const doLastName = e => {
        setLastName(e.target.value);
    }

    const create = _ => {
        setCreateData({
            name,
            lastName,
            count
        });
    
    }

    const doEdit = client => {
        setEditModalData(client);
    }
    const doDelete = client => {
        setDeleteModalData(client);
    }

    const doDeleteBalance = c => {

        console.log(c);
    }


   

    if (null === data) {
        return (
            <h2>LOADING...</h2>
        );
    }

    return (
        <>
            {
                stat ?

                    <div className="stats">
                        <span>Total amount: {stat.count}{eurBig} </span>
                        <span>Total  Clients: {stat.usersAmount} {userBig}</span>

                    </div> : null}

            <div className="table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(c => <tr key={c.id}>
                                <td className="name">{c.name}</td>
                                <td className="lastName">{c.lastName}</td>
                                <td className="count">{c.count}{eurSmall}</td>
                                <td className="buttons">

                                    <button className="btn btn-outline-success" onClick={_ => doEdit(c)}>Deposit</button>
                                    <button className="btn btn-outline-primary" onClick={_=> editData({ count: 0 })} >Withdrawal</button>
                                    <button className="btn btn-outline-danger" onClick={_ => doDelete(c)}>Delete</button>
                                </td>

                            </tr>)
                        }
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card mt-4" style={{ backgroundColor: 'transparent', border: '1px solid white', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 15px 29px 0px' }}>
                <h5 style={{ color: 'white' }} className="card-header"><span style={{ padding: '10px' }}>{bank}</span><strong> Add New Client</strong></h5>
                <div className="card-body">
                    <div className="mb-4">
                        <label style={{ color: 'white' }} className="form-label">Client Name</label>
                        <input type="text" placeholder="Please enter client name" className="form-control" value={name} onChange={doName} />

                    </div>
                    <div className="mb-4">
                        <label style={{ color: 'white' }} className="form-label">Client Lastname</label>
                        <input type="text" placeholder="Please enter client lastname" required className="form-control" value={lastName} onChange={doLastName} />
                    </div>
                    <button style={{ color: 'white' }} type="button" className="btn btn-outline-primary" onClick={create}>ADD{userSmall}</button>
                </div>
            </div>


        </>


    )


}