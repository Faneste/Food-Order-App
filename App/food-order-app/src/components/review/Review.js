import React from 'react';

function Review() {
  return (
    <div className="review">
      {/* review name and star rating */}
      <div className="review__fieldContainer">
        <div className="review__fieldContainer__review">
          <div className="review__fieldContainer__review__topContainer">
            <h3>Petar Petrović</h3>
            <span style={{color:'#ffef26'}}><i class="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i class="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i class="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i class="fas fa-star"></i></span>
            <i class="fas fa-star"></i>
          </div>
          {/* review comment */}
          <div className="review__fieldContainer__review__bottomContainer">
            <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </div>
        </div>
      </div>
      {/* review name and star rating 2 */}
      <div className="review__fieldContainer">
        <div className="review__fieldContainer__review">
          <div className="review__fieldContainer__review__topContainer">
            <h3>Petar Petrović</h3>
            <span style={{color:'#ffef26'}}><i class="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i class="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i class="fas fa-star"></i></span>
            <span style={{color:'#ffef26'}}><i class="fas fa-star"></i></span>
            <i class="fas fa-star"></i>
          </div>
          {/* review comment */}
          <div className="review__fieldContainer__review__bottomContainer">
            <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </div>
        </div>
      </div>
      {/* review submit button and input */}
      <div className="review__inputContainer">

          <form action="review__inputContainer__form">
            <input className="review__inputContainer__form__name" type="text" name="name" placeholder="Name:" />

            <input className="review__inputContainer__form__email" type="text" name="lastname" placeholder="E-mail:" />

            <input className="review__inputContainer__form__comment" type="text" name="comment" placeholder="Comment" />

            <input className="review__inputContainer__form__button" type="button" value="Submit"/>
          </form>

      </div>
    </div>
  )
}

export default Review;
