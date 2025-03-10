import { Children, createContext, useEffect, useState } from "react";

// Create a new context to hold and provide navigation data (e.g., current path)
const NavigationContext = createContext();

function NavigationProvider({ Children }) {
    // State to track the current path of the application (initialized with the current URL path)
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

   // useEffect runs once when the component is mounted and sets up an event listener to track browser history changes
  useEffect(() => {
    // The handler function updates the currentPath whenever the popstate event is triggered (e.g., user presses back/forward buttons)
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    // Add event listener for the 'popstate' event to listen for history changes
    window.addEventListener("popstate", handler);

    // Cleanup function to remove the event listener when the component is unmounted to avoid memory leaks
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    // Provide the currentPath value to all children components that consume the context
    <NavigationContext.Provider value={{}}>
        {/* Render the children components passed into this provider */}
      {Children}
      {currentPath}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
