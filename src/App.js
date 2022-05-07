import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path={ROUTES.DASHBOARD} element={<Login />} /> */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          {/* Not found  changed. */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
