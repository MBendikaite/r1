
export default function Delete({ deleteModalData, setDeleteModalData, setDeleteData }) {




    const destroy = _ => {
        setDeleteData(deleteModalData)
        setDeleteModalData(null)
    }

    if (null === deleteModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title">Confirm Delete Client</h6>
                        <button type="button" className="btn-close btn" onClick={_ => setDeleteModalData(null)} ></button>
                        </div>
                        <h6>Do you really want to delete this client?</h6>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success" onClick={destroy}>Yes</button>
                            <button type="button" className="btn btn-outline-warning" onClick={_ => setDeleteModalData(null)}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        

    );
}