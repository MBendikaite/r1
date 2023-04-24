
export default function ClientDelete({data, deleteModalData, setDeleteModalData, setDeleteData }) {

    const destroy = _ => {
        setDeleteData(deleteModalData)
        setDeleteModalData(null)
    }


    if (null === deleteModalData) {
        return null;
    }

    return (
        <div  className="modal">
            <div  className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div  className="modal-header">
                        <button type="button" className="btn-close btn" onClick={_ => setDeleteModalData(null)} ></button>
                    </div>
                    <div style={{border: 'none', textAlign: 'center'}}  className="alert alert-danger" role="alert">
                       <h5>Remove this client?</h5> 
                    </div>
                    <div style={{border: 'none'}} className="modal-footer">
                        <button type="button" className="btn btn-outline-success" onClick={destroy}>Yes</button>
                        <button type="button" className="btn btn-outline-danger" onClick={_ => setDeleteModalData(null)}>No</button>
                    </div>
                </div>
            </div>
        </div>


    );
}