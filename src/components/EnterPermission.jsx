export default function EnterPermission({ counter }) {
    return (
        <div className='challenge-block'>
            <button className="card" disabled>Can you enter here?</button>
            <p className="card">You only clicked {counter} times.</p>
        </div>
    )
  }
  