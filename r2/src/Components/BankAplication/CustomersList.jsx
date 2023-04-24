import Buttons from './Buttons';
export default function CustomersList({ data, setCreateData, storageId }) {



    if (null === data) {
        return (
            <h2>LOADING...</h2>
        );
    }


    return (
        <div className="card mt-4">
            <h5 className="card-header">Sąskaitų sąrašas</h5>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        data.map(c => <li key={c.id} className="list-group-item">
                            <div className="client-line">
                                <div className="info">
                                    <div className="name">{c.name}</div>
                                    <div className="surname">{c.surName}</div>
                                    <div className="surname">{c.count}</div>
                                    {/* <div className="sum">{c.addSum}</div> */}
                                    {/* <div className="age">{c.age}</div> */}
                                </div>
                            </div>
                            <Buttons id={c.id} storageId={storageId} setCreateData={setCreateData} />
                        </li>)


                    }
                </ul>
            </div>


        </div>

    );


}

