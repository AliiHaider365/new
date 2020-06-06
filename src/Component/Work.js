import React, { Component } from 'react';
import Products from './product'
import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyBhQ6oMG64paIj7SyQFQAG5-N3Z07EQ2mY',
	authDomain: 'yasiodb.firebaseapp.com',
	databaseURL: 'https://yasiodb.firebaseio.com',
	projectId: 'yasiodb',
	storageBucket: 'yasiodb.appspot.com',
	messagingSenderId: '683401320788',
	appId: '1:683401320788:web:a5983a1352e109537550c1',
	measurementId: 'G-SEJ2298Q6Y'
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
export default class Work extends Component {
    
  state = {
    information: null,
    check: false,
    right: "  mx-auto pt-0 offseted justify-content-center d-flex workboxcol col-sm-10 col-md-5",
    left: " leftproduct  mx-auto pt-0 offseted justify-content-center d-flex workboxcol col-sm-10 col-md-5",

  }
  componentDidMount() {
    // super()

    const details = firebase.database().ref(`deatail/`);

		details.on('value', (querySnapshot) => {
      if (querySnapshot.exists()) {
        console.log(querySnapshot.val());
        const boards =[]
        querySnapshot.forEach((doc) => {
          boards.push({
           detail:doc.val().detail || null,
            img1:doc.val().img1 || null,
            img2:doc.val().img2 || null ,
            tag:doc.val().tag || null,
            title:doc.val().title || null, 
            thumbnail: doc.val().thumbnail || null,
            path: Object.keys(querySnapshot.val()) || null
          });
        });
        this.setState({
          information: boards,
          check: true,
        })
 
      }
		})
  }
  
  render() {
    return (        
        <div id="work" className="min100vh work container-fluid">
        <div className="row align-self-top w-100 align-items-start justify-content-center">
          <div className="mx-auto pt-0 offseted col-sm-7 col-md-7 col-9">
                      <div className="timeline alt"></div> <small className="section-title bullet-title alt">Work />
                          </small>
            <h4>Selected web, mobile, video projects...</h4>
          </div>
        </div>
        <section id="web" className="mb-3">
          <div className="row align-self-top w-100 pt-3 mt-3 mb-3 projects-row">
            {this.state.check ?
              this.state.information.map((item, index) => {
              console.log(item.path);
              
              let className=(index % 2 == 0) ?  this.state.right :this.state.left
              return <Products
                key={index}
                path={item.path[index]}
                thumbnail={item.thumbnail}
                styles={className}
                Info={item.title} 
                index={index}
              />
    }):""}
            
          </div>
        </section>
        <div className="mt-3 mb-3"> </div>
        <section id="showreel">
          <div className="row align-self-top mt-3 mb-3 align-items-start justify-content-center">
            <div className="mx-auto pt-0 offseted col-sm-9 col-12">
              <div  className="video-player-box"></div>
            </div>
          </div>
        </section>
        <section id="lab">
          <div className="row align-self-top w-100 align-items-start justify-content-center">
            <div className="mx-auto pt-0 offseted col-sm-7 col-md-7 col-9 offset-2">
              <div className="timeline alt"></div> <small className="section-title bullet-title alt">Lab /></small>
              <h2 className="mt-3 mb-3">Check out my other projects like IoT, open source projects, animations, video,
                experiments, minigames, archived stuff and more.</h2>
              <div className="lab-grid">
                <div className="grid-item">
                  <p className="cat-name">Codepen</p>
                  <p><a href="https://codepen.io/Yasio/full/vYYNWxB"
                      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fraingame.webp?alt=media&amp;token=03865371-eca9-4d4a-b8e1-43160c4f9efc"
                      aria-label="🌧️ Rain Game 🔥 (Opposites challenge)" rel="noopener noreferrer" target="_blank"
                      data-fx="1">
                      🌧️ Rain Game 🔥 (Opposites challenge)
                    </a></p>
                  <p><a href="https://codepen.io/Yasio/details/eXBRYP"
                      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fheroes.webp?alt=media&amp;token=2410b122-68f3-401b-a2cc-56c441c4df39"
                      aria-label="Select Your Coding Hero!" rel="noopener noreferrer" target="_blank" data-fx="1">
                      Select Your Coding Hero!
                    </a></p>
                  <p><a href="https://codepen.io/Yasio/details/GYqVPO"
                      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fghosts.webp?alt=media&amp;token=4b9057bb-fe04-49f2-a385-b5b211352752"
                      aria-label="Ghost Boo-sters 👻 - the game 🎮" rel="noopener noreferrer" target="_blank" data-fx="1">
                      Ghost Boo-sters 👻 - the game 🎮
                    </a></p>
                  <p><a href="https://codepen.io/Yasio/details/mzdNYV"
                      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fklepsydra.webp?alt=media&amp;token=9c953420-63c7-4ebf-adb0-a85db860c8a3"
                      aria-label="408 Request Timeout - Physics Game 🎮" rel="noopener noreferrer" target="_blank"
                      data-fx="1">
                      408 Request Timeout - Physics Game 🎮
                    </a></p>
                  <p><a href="https://codepen.io/Yasio/details/MPmvJb"
                      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fmaskapp.webp?alt=media&amp;token=8f34525f-6353-47b3-a8e4-1ea6500a2bbd"
                      aria-label="FaceDetection Mask App 🤳" rel="noopener noreferrer" target="_blank" data-fx="1">
                      FaceDetection Mask App 🤳
                    </a></p>
                  <p><a href="https://codepen.io/Yasio/details/oPBybQ"
                      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Frocket.webp?alt=media&amp;token=41eaec2a-3a4f-4168-8063-5748f5968e89"
                      aria-label="Rocket Lauch Game 🎮" rel="noopener noreferrer" target="_blank" data-fx="1">
                      Rocket Lauch Game 🎮
                    </a></p>
                  <p><a href="https://codepen.io/Yasio/full/xamBVV"
                      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fhodor.webp?alt=media&amp;token=df1b88fc-2e70-4be6-b7d5-d7d27684d7e9"
                      aria-label="HODOR 403 ✋ 🚪⚔️" rel="noopener noreferrer" target="_blank" data-fx="1">
                      HODOR 403 ✋ 🚪⚔️
                    </a></p>
                  <p><a href="https://codepen.io/Yasio/pen/wEWyLE"
                      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fbacktoschool.webp?alt=media&amp;token=dac87aff-da6b-4725-bc7a-edb53a13df1d"
                      aria-label="Back2School SVG - anime.js" rel="noopener noreferrer" target="_blank" data-fx="1">
                      Back2School SVG - anime.js
                    </a></p>
                </div>
                <div className="grid-item">
  <p className="cat-name">Archive</p>
  <p>
    <a
      href="http://old.yasio.pl/"
      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fportfolio2.webp?alt=media&token=85027539-fd4f-4555-81aa-7cecc3a820e9"
      aria-label="Portfolio v2"
      rel="noopener noreferrer"
      target="_blank"
      data-fx={1}
    >
      Portfolio v2
    </a>
  </p>
  <p>
    <a
      href="http://old.yasio.pl/portfolio1/"
      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fportfolio1.webp?alt=media&token=1a046716-cdbc-4f22-ab20-6642675ae60a"
      aria-label="Portfolio v1 (flash)"
      rel="noopener noreferrer"
      target="_blank"
      data-fx={1}
    >
      Portfolio v1 (flash)
    </a>
  </p>
  <p>
    <a
      href="http://old.yasio.pl/tmp/thegame.html"
      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2F8bit.webp?alt=media&token=e8c58d4c-402c-46ed-9327-29901ff43a50"
      aria-label="4kb invaders - Game (flash)"
      rel="noopener noreferrer"
      target="_blank"
      data-fx={1}
    >
      4kb invaders - Game (flash)
    </a>
  </p>
  <p>
    <a
      href="http://old.yasio.pl/stuff/blueprint.app.exe"
      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fblueprint.webp?alt=media&token=eadeb1d0-8dd4-476c-8a56-e57ed1116fad"
      aria-label="BluePrint The Game (open blueprint.exe)"
      rel="noopener noreferrer"
      target="_blank"
      data-fx={1}
    >
      BluePrint The Game (open blueprint.exe)
    </a>
  </p>
  <p>
    <a
      href="http://old.yasio.pl/test_chamber.html"
      data-img="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Ftestchamber.webp?alt=media&token=e9b3ca99-1fb4-4997-b6ae-8724b15cd7e4"
      aria-label="More archived stuff"
      rel="noopener noreferrer"
      target="_blank"
      data-fx={1}
    >
      More archived stuff
    </a>
  </p>
</div>;

              </div>
            </div>
          </div>
        </section> <a href="#about" className="cp down-arrow"><span>→</span></a>

        { 
          // this.check()
      
      }
      </div>
    );
  }
}
