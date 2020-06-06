import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import firebase from 'firebase';
import ErrorPage from './Default'

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
// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// firebase.analytics();
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
}

export default class Details extends Component {
	state = {
		tag: '',
		title: '',
		details: '',
		img1: '',
		img2: '',
		test: true,
	};

	componentDidMount() {

		let path =this.props.match.params.id
		const details = firebase.database().ref(`deatail/${path}`);
		details.on('value', (a) => {

			if (a.exists()) {
				this.setState({
					tag: a.val().tag || null,
					title: a.val().title || null,
					details: a.val().detail || null,
					img1: a.val().img1 || null,
					img2: a.val().img2 || null
				});
			} else {
				this.setState({test:!this.state.test})
			}
			
		});
	}
	render() {
		return (
		<>
				{this.state.test ?
					<div id="project-view" className="container-fluid">
						<div className="row">
							<div className="pl-0 pr-0 col-sm-12 col-md-8">
								<div id="pac-loader" role="progressbar" aria-busy="true" aria-label="Loading the page">
							
									<div>
										<div className="pacman" />
										<div className="dots" />
										<div className="loading-text">L0AD1NG</div>
									</div>
								</div>
								<div>
									<div className="pswp-thumbnails">
										<a item="[object Object]" href="#start" className="pswp-thumbnail scroll ">
											<img src={this.state.img1} />
										</a>

										<a item="[object Object]" id="#contact" className="pswp-thumbnail">
											<img src={this.state.img2} />
										</a>
									</div>
									<div id="details" className="bd-sidebar col-sm-12 col-md-4">
										<div>
											<p className="mt-0 ">
												<Link
													to={'/'}
													href="#"
													title=""
													placement="bottom"
													className="goBack__button scroll"
													data-original-title="Go back home"
												>
													←
										</Link>{' '}
											</p>{' '}
											<small className="tags">
												{this.state.tag}
												{/* <!----> */}
											</small>
											<h2>{this.state.title} </h2>
											<div className="project-desc">
												<p>{this.state.details}</p>
											</div>
											{/* {' '} */}
											<button className="btn btn-primary">
												Visit<div className="btn2" />
											</button>
										</div>
										<div className="divider-line" />
									</div>
								</div>
							</div>{' '}
						</div>
					</div>
					: <ErrorPage /> }
					{/* {this.state.test ?	<ErrorPage /> : "" } */}
			</>
		);
		// });
	}
}
