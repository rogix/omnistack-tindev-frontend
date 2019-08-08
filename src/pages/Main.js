import React from 'react';

import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
	return (
		<div className="main-container">
			<img src={logo} alt="Tindev" />
			<ul>
				<li>
					<img src="https://avatars3.githubusercontent.com/u/12768403?v=4" alt="" />
					<footer>
						<strong>Rogerio</strong>
						<p>Programador front end</p>
					</footer>

					<div className="buttons">
						<button type="button">
							<img src={like} alt="Like" />
						</button>
						<button type="button">
							<img src={dislike} alt="Dislike" />
						</button>
					</div>
				</li>
				<li>
					<img src="https://avatars3.githubusercontent.com/u/12768403?v=4" alt="" />
					<footer>
						<strong>Rogerio</strong>
						<p>Programador front end</p>
					</footer>

					<div className="buttons">
						<button type="button">
							<img src={like} alt="Like" />
						</button>
						<button type="button">
							<img src={dislike} alt="Dislike" />
						</button>
					</div>
				</li>
				<li>
					<img src="https://avatars3.githubusercontent.com/u/12768403?v=4" alt="" />
					<footer>
						<strong>Rogerio</strong>
						<p>Programador front end</p>
					</footer>

					<div className="buttons">
						<button type="button">
							<img src={like} alt="Like" />
						</button>
						<button type="button">
							<img src={dislike} alt="Dislike" />
						</button>
					</div>
				</li>
				<li>
					<img src="https://avatars3.githubusercontent.com/u/12768403?v=4" alt="" />
					<footer>
						<strong>Rogerio</strong>
						<p>Programador front end</p>
					</footer>

					<div className="buttons">
						<button type="button">
							<img src={like} alt="Like" />
						</button>
						<button type="button">
							<img src={dislike} alt="Dislike" />
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
}
