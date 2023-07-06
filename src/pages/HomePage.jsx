import React from "react";

function HomePage() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return <div onClick={handleLogout}>HomePage</div>;
}

export default HomePage;
