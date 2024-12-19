import {
  faCheck,
  faCommentDots,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Discussion.css";

interface DiscussionUserProps {
  name: string;
  mode: boolean;
}

const Discussion: React.FC<DiscussionUserProps> = ({ name, mode }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="discussion" onClick={handleClick}>
      <div className="discussion-left">
        <div className="discussion-profil"></div>
        <div className="discussion-left-text">
          <p>{name}</p>
          {!mode && (
            <p className="discussion-left-text-date">il y a 2 heures</p>
          )}
        </div>
      </div>

      {!mode && <FontAwesomeIcon icon={faHeart} className="discussion-heart" />}
      {mode && (
        <div className="discussion-choices">
          <FontAwesomeIcon
            icon={faXmark}
            className="discussion-choices-xmark"
          />
          <FontAwesomeIcon
            icon={faCheck}
            className="discussion-choices-check"
          />
        </div>
      )}
    </div>
  );
};

export default Discussion;
