import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Pickup() {
  const history = useHistory();
  const isLogIn = localStorage.getItem("isLogIn") === "True";
  function handlePickup() {
    if (!isLogIn) {
      history.push("/login");
    } else {
      localStorage.setItem("Pickup", true);
      localStorage.setItem("Delivery", false);
      history.push("/");
    }
  }
  return (
    <>
      <div className="method-btn">
        <Button variant="danger" onClick={handlePickup}>
          Pickup
        </Button>
      </div>
    </>
  );
}

export default Pickup;
