import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Discussion.css'

const Discussion = () => {
    const handleClick = () => {
        console.log('click')
    }

    return (
        <div className="discussion" onClick={handleClick}>
            <div className="discussion-left">
                <div className="discussion-profil"></div>
                <div className="discussion-left-text">
                    <p>John Doe</p>
                    <p className="discussion-left-text-date">il y a 2 heures</p>
                </div>
            </div>
            <FontAwesomeIcon icon={faHeart} className="discussion-heart" />
        </div>
    )
}

export default Discussion
