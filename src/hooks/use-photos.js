import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId, getPhotos } from "../services/firebase";

function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];
      // console.log("following", following);

      //does the user follow anyone?
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }

      // sort array to be newest photos first by dateCreated
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    // console.log("This is", userId);
    getTimelinePhotos();
  }, [userId]);

  return { photos };
}

export default usePhotos;
