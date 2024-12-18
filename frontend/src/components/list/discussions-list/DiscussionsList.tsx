import { useState } from "react";
import Discussion from "./discussion/Discussion";
import "./DiscussionsList.css";

interface DiscussionListProps {
  search: string;
  mode: boolean;
}

const DiscussionList: React.FC<DiscussionListProps> = ({ search, mode }) => {
  const [users] = useState([
    { id: 1, name: "john doe" },
    { id: 2, name: "patrick jean" },
    { id: 3, name: "esteban dardillac" },
  ]);

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="discussions-list">
      {mode && (
        <div className="addFriend">
          <button>ajouter un ami</button>
        </div>
      )}
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <Discussion key={user.id} name={user.name} mode={mode} />
        ))
      ) : (
        <p>Aucune discussion trouvée</p>
      )}
    </div>
  );
};

export default DiscussionList;
