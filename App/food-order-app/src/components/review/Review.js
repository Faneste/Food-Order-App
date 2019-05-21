import React from 'react';

// review module that containes(static for now) individual user comments and input for name, email and comment text
function Review() {
  return (
    <div className="review">

      {/* comment 1 */}
      <div className="review__fieldContainer">
        <div className="review__fieldContainer__review">
          {/* comment name and star rating */}
          <div className="review__fieldContainer__review__topContainer">
            <h3>Petar Petrović</h3>
            <span style={{color:'#ffef26'}}><i className="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i className="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i className="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i className="fas fa-star"></i></span>
            <i className="fas fa-star"></i>
          </div>
          {/* comment text 1 */}
          <div className="review__fieldContainer__review__bottomContainer">
            <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </div>
        </div>
      </div>

      {/* comment 2 */}
      <div className="review__fieldContainer">
        <div className="review__fieldContainer__review">
          {/* comment name and star rating 2 */}
          <div className="review__fieldContainer__review__topContainer">
            <h3>Petar Petrović</h3>
            <span style={{color:'#ffef26'}}><i className="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i className="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i className="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i className="fas fa-star"></i></span>
            <i className="fas fa-star"></i>
          </div>
          {/* comment text 2 */}
          <div className="review__fieldContainer__review__bottomContainer">
            <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </div>
        </div>
      </div>

      {/* comment submit button and input fields */}
      <hr/>
      <div className="review__inputContainer">
          <form action="review__inputContainer__form">
            <input className="review__inputContainer__form__name" type="text" name="name" placeholder="Ime:" />
            <input className="review__inputContainer__form__email" type="text" name="lastname" placeholder="E-mail:" />
            <input className="review__inputContainer__form__comment" type="text" name="comment" placeholder="Komentar" />
            <input className="review__inputContainer__form__button" type="button" value="Pošalji"/>
          </form>
      </div>

    </div>
  )
}

export default Review;
