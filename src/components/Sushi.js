import React from "react";

function Sushi( { sushi, handleSushiClick } ) {
  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick(sushi.id)}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
