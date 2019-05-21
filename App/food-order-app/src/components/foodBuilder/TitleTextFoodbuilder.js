import React from 'react';

// simple text section of the food builder and order module, it containes section title and description
function TitleTextFoodbuilder() {
  return (
      <div className="foodBuilder__textContainer">
        {/* title */}
        <h2 className="foodBuilder__textContainer__title">Naručite hranu online na svoj način</h2>
        {/* description */}
        <h3 className="foodBuilder__textContainer__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h3>
      </div>
  )
}

export default TitleTextFoodbuilder;
