import { useState } from 'react';
import { crudUpdate, crudRead } from '../../Utils/bankasLocalStorage';

export default function Buttons ({ id, setCreateData, storageId }) {
    const [addSum, setCount] = useState('');

    const doCount = e => {
        const countNow = parseInt(e.target.value)
        setCount(countNow);
    }

    const addCount = id => {
        const account = crudRead(storageId).find(el => id === el.id);
        const data = crudUpdate(storageId, { count: account.count + addSum }, id);
        setCreateData(data);
    }

   
    return (
        <div className="buttons">
            <div className="info" style={{
                gap: '15px'
            }} >
                <button type="button" className="btn btn-outline-danger">Ištrinti</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => addCount(id)} >Pildyti</button>
                <button type="button" className="btn btn-outline-danger" >Nuskaičiuoti</button>
                <input style={{ width: '200px' }} placeholder="Įveskite sumą" type="number" min='1' className="form-control" value={addSum} onChange={doCount} />
            </div>
        </div>
    );
}