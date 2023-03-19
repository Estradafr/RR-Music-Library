import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import {Link, useNavigate} from 'react-router-dom';

export function Nav(props) {
	let nav = useNavigate();

	function navigateBack() {
		nav(-1);
	}
	function navigateForward() {
		nav(+1);
	}

	return (
		<div>
			<Button
				variant="outline-primary"
				onClick={navigateBack}
			>
				Back
			</Button>{' '}
			<Link to="/">
				<Button variant="outline-primary">Home</Button>
			</Link>{' '}
			<Button
				variant="outline-primary"
				onClick={navigateForward}
			>
				Back
			</Button>{' '}
		</div>
	);
}
