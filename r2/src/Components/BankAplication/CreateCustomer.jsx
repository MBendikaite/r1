import { useState } from "react"
export default function CreateCustomer({ setCreateData }) {

    const [name, setName] = useState('');
    const [surName, setsurName] = useState('');
    const [count, setcount] = useState(0);

    const doName = e => {
        setName(e.target.value);
    }
    const dosurName = e => {
        setsurName(e.target.value);
    }


    const create = _ => {
        setCreateData({
            name,
            surName,
            count
        })
        setName('')
        setsurName('')
        setcount('')
    }




    return (
        <div className="card mt-4">
            <h5 className="card-header">Sukurti naują sąskaitą</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Vardas</label>
                    <input type="text" className="form-control" value={name} onChange={doName} />
                    <div className="form-text">Kliento vardas</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Pavardė</label>
                    <input type="text" className="form-control" value={surName} onChange={dosurName} />
                    <div className="form-text">Kliento pavardė</div>
                </div>
            </div>

            <div>
                <button type="button" className="btn btn-outline-warning" onClick={create}>Sukurti</button></div>
        </div>



    )

}