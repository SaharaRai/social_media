import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  //   console.log(result);

  return result.docs.map((user) => user.data().length > 0);
}

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();
  // console.log("for suggested profiles", result);
  // return result;

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}

// updateLoggedInUserFollowing, updateFollowedUserFollowers

export async function updateLoggedInUserFollowing(
  loggedInUser_docId,
  sp_userId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUser_docId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(sp_userId)
        : FieldValue.arrayUnion(sp_userId),
    });
}

export async function updateFollowedUserFollowers(
  sp_docId,
  loggedInUser_userId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(sp_docId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUser_userId)
        : FieldValue.arrayUnion(loggedInUser_userId),
    });
}

export async function getPhotos(userId, following) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  // console.log("userFollowedPhotos", userFollowedPhotos);

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }

      // photo.userId =2
      const user = await getUserByUserId(photo.userId);
      // raphael
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );

  // console.log("photosWithUserDetails", photosWithUserDetails);

  return photosWithUserDetails;
}
