import React from 'react'
import './Gsap.css'

const Gsap = () => {
  return (
    <main className='app'>

      <section className='hero'>
        <div className="hero_wrapper">
          <div className="hero_content">
            <div className="hero_content_title">
              <h1>We</h1> 
            </div>
            <div className="hero_content_description">
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dicta, tempora est molestiae odio numquam.</span>
            </div>
            <div className="hero_content_title">
              <h1>Are</h1>
            </div>
            <div className="hero_content_title">
              <h1>Digital</h1>
            </div>
            <div className="hero_content_title">
              <h1>Makers</h1>
            </div>
            <div className="hero_bg">
              <img src="https://empirics.asia/storage/2018/09/itsgreatoutthere-unsplash-03.jpg" alt="hero_background" />
            </div>
          </div>
        </div>
      </section>

      <section className='caption'>
        <div className="caption_wrapper">
          <div className="caption_content">
            <div className="caption_content_title">
              <span className="caption_content_title_text">"Unlock</span>
              <span className="caption_content_title_text">Brand</span>
              <span className="caption_content_title_text">Sucess</span>
              <span className="caption_content_title_text">Through</span>
              <span className="caption_content_title_text">Coming</span>
              <span className="caption_content_title_text">Your</span>
              <span className="caption_content_title_text">Life</span>
            </div>
          </div>
          <div className="caption_background">

          </div>
        </div>
      </section>

      <section className='grid'>
        <div className="grid_wrapper">
          <div className="grid_medias">
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
            <img src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" alt="" className="grid_medias_image" />
          </div>
        </div>
      </section>

      <section className="ending">
        <h1>+0123456789</h1>
      </section>
    </main>
  )
}

export default Gsap