import { useEffect, useState } from "react";

//with the pushState from the Link component the path was updated, when the user clicks any of the nav bar links 
// the path changes so this component needs to update the component it shows, with useEffect it listens for the popstate event and
// renders the correct component based on the window.location.path

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    onLocationChange()
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
    console.log(window.location.pathname)

  return currentPath === path ? children : null;
};

export default Route;
