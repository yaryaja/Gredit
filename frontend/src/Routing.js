import Header from "./Header";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import RoutingSwitch from "./RoutingSwitch";
import PostFormModal from "./PostFormModal";
import AuthModal from "./AuthModal";
import {useContext, useEffect} from "react";
import RedirectContext from "./RedirectContext";
import {CommunityFormModal} from "./CommunityFormModal";


function Routing() {
  const {redirect,setRedirect} = useContext(RedirectContext);
  useEffect(() => {
    if (redirect) {
      setRedirect(false);
    }
  }, [redirect]);
  return (
    <Router>
      {redirect && (
        <Redirect to={redirect} />
      )}
      {!redirect && (
        <>
          <Header />
          <RoutingSwitch />
          <PostFormModal />
          <CommunityFormModal />
          <AuthModal />
        </>
      )}
    </Router>
  );
}

export default Routing;