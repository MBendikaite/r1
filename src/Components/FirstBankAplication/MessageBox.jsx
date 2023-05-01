export default function MessageBox({ messages }) {

    if (!messages.length) {
        return null
    }

    return (

        <div className="alert alert-primary" role="alert" style={{fontSize: '20px', width: '400px'}}>
            {
                messages.map(m => <div key={m.id} className={'msg' + m.type}>{m.text}</div>)
            }
        </div>

    )
}