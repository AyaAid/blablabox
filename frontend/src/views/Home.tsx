import List from "../components/list/List";
import Message from "../components/message/Message";
import NotificationBar from "../components/notification-bar/NotificationBar";
import SendBar from "../components/send-bar/SendBar";
import "./Home.css";

const Home = () => {
  const messages = [
    {
      id: "1",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "15 déc 18:58",
      mind: false,
    },
    {
      id: "2",
      message: "Lorem ipsum dolor sit m id est laborum.",
      date: "15 déc 21:58",
      mind: true,
    },
    {
      id: "3",
      message:
        "Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum",
      date: "16 déc 21:58",
      mind: true,
    },
    {
      id: "4",
      message:
        "Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum sit m id est laborum ",
      date: "17 déc 21:58",
      mind: false,
    },
    {
      id: "5",
      message:
        "Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum",
      date: "16 déc 21:58",
      mind: true,
    },
    {
      id: "6",
      message:
        "Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum sit m id est laborum Lorem ipsum dolor sit m id est laborum Lorem ipsum dolor sit m id est laborum",
      date: "17 déc 21:58",
      mind: false,
    },
  ];

  return (
    <div className="page">
      <List />
      <div className="container">
        <div className="bg"></div>
        <NotificationBar />
        <div className="messages">
          {messages.map((message) => (
            <Message message={message} />
          ))}
        </div>
        <SendBar />
      </div>
    </div>
  );
};

export default Home;
