import React from 'react'
import{AiFillGoogleCircle,
AiFillAmazonCircle,
AiFillYoutube,
AiFillInstagram,} from "react-icons/ai";
const Home = () => {
  return (
    <>
    <div className='home' id="home">Home
      <main>
        <h1>TechStar.</h1>
        <p>solution to all your problems providing all technical solutions</p>
      </main>
    </div>

    <div className ="home2">
    <img src="https://raw.githubusercontent.com/meabhisingh/react-techystar/master/src/assets/2.webp " alt="Graphics"  />
    <div>
        <p>
        We are your one and only solution to the tech problems you face
        every day. We are leading tech company whose aim is to increase the
        problem solving ability in children.
        </p>
    </div>
    </div>
    

    <div className="home3" id="about">
        <div>
            <h1>who we are?</h1>
            <p>
            Our global solution approach delivers advanced analytics, application modernization, cloud platforms, cybersecurity, digital infrastructure, and digital workplace offerings to clients across various industries.We support these solutions with advisory, implementation, and managed services expertise across all major IT partners in the marketplace.
            </p>
        </div>
    </div>
  
    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    
    </>
  )
}

export default Home
