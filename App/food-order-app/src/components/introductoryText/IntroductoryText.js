import React from 'react';

// simple text module that containes title and description
function IntroductoryText() {
  return (
    <div className="introductoryText">
      {/* title */}
      <h1 className="introductoryText__title">Napravite sami svoju pizzu</h1>
      {/* description */}
      <h3 className="introductoryText__text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </h3>
    </div>
  )
}

export default IntroductoryText;
