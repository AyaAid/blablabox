import List from "@components/list/List";
import Message from "@components/message/Message";
import NotificationBar from "@components/notification-bar/NotificationBar";
import SendBar from "@components/send-bar/SendBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="page">
      <List />
      <div className="container">
        <div className="bg"></div>
        <NotificationBar />
        <div className="messages">
          <Message mind={false} />
          <Message mind={true} />
          <Message mind={false} />
          <Message mind={false} />
          <Message mind={true} />
          <Message mind={false} />
          <Message mind={true} />
        </div>
        <SendBar />
      </div>
    </div>
  );
};

export default Home;
