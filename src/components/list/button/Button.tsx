import './Button.css'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = () => {
    return (
        <div className="button">
            <FontAwesomeIcon icon={faUserGroup} className="button-icon" />{' '}
            <p>Amis</p>
        </div>
    )
}

export default Button
