import "./friend.css";

interface FriendUserProps {
  name: string;
}

const Friend: React.FC<FriendUserProps> = ({ name }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div onClick={handleClick}>
      <div>
        <div></div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Friend;
