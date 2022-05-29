import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  updateFollowedUserFollowers,
  updateLoggedInUserFollowing,
} from "../../services/firebase";

const SuggestedProfile = ({
  sp_docId,
  sp_username,
  sp_userId,
  loggedInUser_userId,
  loggedInUser_docId,
}) => {
  const [followed, setFollowed] = useState(false);

  async function handleFollowerUser() {
    setFollowed(true);

    //firebase: create 2 services (functions)
    //update the following array of the logged in user (here, me)
    // update the followers array of the user who has been followed

    await updateLoggedInUserFollowing(loggedInUser_docId, sp_userId, false);
    await updateFollowedUserFollowers(sp_docId, loggedInUser_userId, false);
  }

  return !followed ? (
    <div className="flex felx-row items-center align-items justify-between">
      <Link
        to={`p/${sp_username}`}
        className="flex flex-row items-center justify-between"
      >
        <img
          className="rounded-full w-8 h-8 flex mr-3"
          src={`images/avatars/${sp_username}.jpg`}
          alt=""
        />
        <p className="font-bold text-sm">{sp_username}</p>
      </Link>

      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowerUser}
      >
        Follow
      </button>
    </div>
  ) : null;
};

export default SuggestedProfile;

SuggestedProfile.propTypes = {
  sp_docId: PropTypes.string.isRequired,
  sp_username: PropTypes.string.isRequired,
  sp_userId: PropTypes.string.isRequired,
  loggedInUser_userId: PropTypes.string.isRequired,
  loggedInUser_docId: PropTypes.string.isRequired,
};
