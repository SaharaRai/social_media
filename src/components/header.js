import { useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <div>
      <header className="h-16 bg-white border-b border-gray-primary mb-8">
        <div className="container mx-auto max-w-screen-lg h-full">
          <div className="flex justify-between h-full">
            <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
              <h1 className="flex justify-center w-full">
                <Link to={ROUTES.DASHBOARD} aria-label="Social Media logo">
                  <img
                    src="images/logo.svg"
                    alt="Social Media"
                    className="mt-2 w-6/12"
                  />
                </Link>
              </h1>
            </div>
            <div className="text-gray-700 text-center flex items-center align-items">
              Hey!
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
