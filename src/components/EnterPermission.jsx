export default function EnterPermission({ counter }) {
    return (
        <div className='challenge-block'> 
            <span className="card" disabled><p>Can you guess?</p> <input type="text" name="guess" />
                <p>You only clicked { counter } times.</p>
                {counter == 32? <><h1>OMG!! YOU GUESSED!!</h1><a href='https://github.com/bizzome/react-project/'>Give me a star!</a></>:null }
            </span>
        </div>
    )
  }
  