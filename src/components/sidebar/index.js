import useUser from "../../hooks/use-user";
import Suggestions from "./suggestions";
import User from "./user";

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser();
  // console.log("x", fullName, username, userId);
  return (
    <div>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
};

export default Sidebar;
