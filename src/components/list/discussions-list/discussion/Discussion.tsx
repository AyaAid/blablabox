import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Discussion.css";

interface DiscussionUserProps {
  name: string;
}

const Discussion: React.FC<DiscussionUserProps> = ({ name }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="discussion" onClick={handleClick}>
      <div className="discussion-left">
        <div className="discussion-profil"></div>
        <div className="discussion-left-text">
          <p>{name}</p>
          <p className="discussion-left-text-date">il y a 2 heures</p>
        </div>
      </div>
      <FontAwesomeIcon icon={faHeart} className="discussion-heart" />
    </div>
  );
};

export default Discussion;
