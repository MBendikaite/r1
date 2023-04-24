export default function MessagesBox({ messages }) {

    if (!messages.length) {
        return null
    }

    return (

        <div className="alert alert-success"role="alert">
            {
                messages.map(m => <div key={m.id} className={'msg' + m.type}>{m.text}</div>)
            }
          
        </div>
    )
}