import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    if(event.metaKey || event.crtlKey) {
        return
    }

    event.preventDefault(); // prevents rendering the component when you click the navigation
    window.history.pushState({}, "", href); // changes the path to the one you're clicking

    const navEvent = new PopStateEvent("popstate"); //  a PopStateEvent which is an event that is triggered whenever the user navigates and changes the history object's state, in this case when the pushstate changes the URL
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
