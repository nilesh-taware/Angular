import React, { Suspense, lazy, useState, useEffect } from "react";

// Lazy load the component
const Mycomponent = lazy(() => import("./Mycomponent"));

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Set a 3-second delay before showing (and loading) LazyComponent
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Lazy Load With Delay Example</h1>
      {show ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Mycomponent />
        </Suspense>
      ) : (
        <div>Component will load after 3 seconds...</div>
      )}
    </div>
  );
}

export default App;
