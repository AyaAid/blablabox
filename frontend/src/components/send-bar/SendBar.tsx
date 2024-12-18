import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SendBar.css'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SendBar = () => {
    const [nbOfCaract, SetNbOfCaract] = useState('0')
    const maxLength = 500

    const handleChange = (value: string) => {
        SetNbOfCaract(value)
    }

  return (
    <div className="sendBar">
      <div className="input">
        <input
          placeholder="Écrire un message ..."
          onChange={(e) => handleChange(e.target.value)}
          maxLength={maxLength}
        ></input>
        <p>
          {nbOfCaract.length} / {maxLength}
        </p>
      </div>
      <button>
        <FontAwesomeIcon icon={faArrowUp} className="sendBar-icon" />
      </button>
    </div>
  );
};

export default SendBar
