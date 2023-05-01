import { useEffect, useState } from 'react';
import { eurSmall } from '../Icons/icons';
export default function ClientEdit({ editModalData, setEditModalData, setEditData }) {

    const [count, setCount] = useState(0);


    useEffect(() => {
        if (null === editModalData) {
            return;
        }
        setCount(editModalData.count);
    }, [editModalData]);


    const save = _ => {
        setEditData({
            count,
            id: editModalData.id
        });
        setEditModalData(null);
    }

    const doCount = e => {
        const countNow = parseInt(e.target.value);
        setCount(countNow);
    }

    if (null === editModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Deposit</h5>
                        <button type="button" className="btn-close btn" onClick={_ => setEditModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mt-4">
                            <div className="card-body p-3">
                                <div className="mb-4">
                                    <label className="form-label">Please enter amount</label>
                                    <label className="form-label"><span><span style={{ fontSize: "20px" }}> {count}{eurSmall}</span></span></label>
                                    <input type='number' placeholder='Enter amount' id="form1" className="form-control form-icon-trailing" min="1" value={count} onChange={doCount} /><label className="form-label" htmlFor="form1"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-success" onClick={save}>Deposit</button>
                        <button type="button" className="btn btn-outline-warning" onClick={_ => setEditModalData(null)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}