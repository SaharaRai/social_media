import React from "react";
import useUser from "../../hooks/use-user";
import Suggestions from "./suggestions";
import User from "./user";

function Sidebar() {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();
  // console.log("x", fullName, username, userId);
  // console.log("following", following);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUser_docId={docId}
      />
    </div>
  );
}

export default Sidebar;

Sidebar.whyDidYouRender = true;
