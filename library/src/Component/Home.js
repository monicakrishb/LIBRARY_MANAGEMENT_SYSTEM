import React, { Component } from 'react'
import { Navigate } from 'react-router';
import './Home.css'
import Nav from './Nav'



export default function Home() {
  const[goToList, setGoToList] = React.useState(false);
  if (goToList) {
    return <Navigate to="/booklist" />;
  }
  return (
    <div>
      <Nav />
      <div className='heading' id='banner'>
      </div>
      <div>
        <h4 className='best'>Popular Books</h4>
      </div>
      <div className='origin'>
        <div className='flix'>
          <img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/j4rc8sw0/book/3/0/3/yaarum-illadha-desam-original-imaevhpt286hvzrn.jpeg?q=70" />
          <p>யாரும் இல்லாத தேசம்</p>
        </div>
        <div className='flix'>
          <img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/xif0q/book/e/m/m/kathaignarkalin-kathaikal-original-imagkkyean2ekkrr.jpeg?q=70" />
          <p>கதைஞர்களின் கதைகள்</p>
        </div>
        <div className='flix'>
          <img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/xif0q/book/m/m/a/valvai-reading-25-25-original-imagkzd6hj23szpk.jpeg?q=70" />
          <p>வல்வை வாசிப்பகம்</p>
        </div>
        <div className='flix'>
          <img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/xif0q/book/b/x/y/akkaraipattu-thaai-short-stories-original-imaghhyqkfabbttx.jpeg?q=70" />
          <p>அக்கரைப்பற்று தாய் </p>
        </div>
        <div className='flix'>
          <img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/jxnksy80/book/4/9/5/ulagam-sutriya-thiruvalluvar-original-imafg2gpkynzpmzq.jpeg?q=70" />
          <p>உலகம் சுற்றிய திருவள்ளுவர்</p>
        </div>

      </div>{/* xsdcfvgbhnj */}
      <br />
      <h3 id="vairam">Vairamuthu Books</h3>
      <div className='origin'><div className='flix'><img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/jy65j0w0/regionalbooks/w/h/z/thamizh-atruppadai-original-imafgfvazm9t8nhz.jpeg?q=70" />
        <p>தமிழாற்றுப்படை</p></div><div className='flix'><img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/regionalbooks/q/r/e/moondram-ulaga-por-original-imadgxcgtsfbms4g.jpeg?q=70" /><p>மூன்றாம் உலகப்போர்</p></div>
        <div className='flix'><img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/km9ht3k0/regionalbooks/r/y/q/intha-kulathil-kallerinthavargal-original-imagf7hcxq6pzp6n.jpeg?q=70" /><p>இந்தக் குளத்தில் கல்லெறிந்தவர்கள்</p>
        </div><div className='flix'><img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/regionalbooks/s/3/7/paarkadal-original-imadgwecehnpx6wa.jpeg?q=70" /><p>பாற்கடல் </p></div>
        <div className='flix'><img alt="spare" src="https://rukminim1.flixcart.com/image/612/612/krdtlzk0/regionalbooks/h/v/v/thanneer-desam-original-imaetybucqyj56wu.jpeg?q=70" /><p>தண்ணீர் தேசம்</p></div></div>
      <br />
      <div>
        <button className='btn'
          onClick={() => {
            setGoToList(true);
          }}>
          see more
        </button>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  )
}
