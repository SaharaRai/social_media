import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "./suggested-profile";

const Suggestions = ({ userId, following, loggedInUser_docId }) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    // console.log("userId", userId);

    if (userId) {
      // only call this functionif userId exists/found
      suggestedProfiles();
      console.log("profiles", profiles);
    }
  }, [userId]);

  // get the suggested profiles
  // use the firebase service (call using userId)
  // call the async function from firebase within useEffect
  // store it in state
  // render (wait on the profiels as in "skeleton")

  // Below lies nested ternary operation
  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-4" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>

      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => {
          return (
            <SuggestedProfile
              key={profile.docId}
              sp_docId={profile.docId}
              sp_username={profile.username}
              sp_userId={profile.userId}
              loggedInUser_userId={userId}
              loggedInUser_docId={loggedInUser_docId}
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default Suggestions;

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUser_docId: PropTypes.string,
};
