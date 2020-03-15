import React from 'react';
import { Button, Col, Container, Form, FormGroup, Jumbotron, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	const [state, setState] = React.useState({
		celsius: ''
	});
	const [result, setResult] = React.useState('');

	const handleCelsius = (evt: any) => {
		setState({ celsius: evt.target.value });
	};

	const celsiusToFahrenheit = ($e: any) => {
    $e.preventDefault();
		const celsius = parseInt(state.celsius);
		setResult(`Fahrenheit: ${(celsius * 1.8 + 32).toString()}\xB0`);
	};

	return (
		<>
			<Jumbotron>
				<h1>Convert Celsius to Fahrenheit</h1>
				<p>This application takes a Celsius number and converts it to Fahrenheit</p>
			</Jumbotron>
			<Container fluid>
				<Row>
					<Col md={6}>
						<Form onSubmit={celsiusToFahrenheit}>
							<FormGroup>
								<Form.Label htmlFor='celsius'>Celsius:</Form.Label>
								<Form.Control
									type='number'
									value={state.celsius}
									name='celsius'
									onChange={handleCelsius}
								/>
							</FormGroup>
							<Button type='submit' className='primary'>
								Submit
							</Button>{' '}
							<Button
								type='reset'
								variant='outline-secondary'
								onClick={() => {
									setState({
										celsius: ''
									});
									setResult('');
								}}
							>
								Clear
							</Button>
						</Form>
					</Col>
				</Row>
        <p>&nbsp;</p>
				<Row>
          <Col>
            <h5 id='result'>{result}</h5>
          </Col>
        </Row>
			</Container>
		</>
	);
};

export default App;
