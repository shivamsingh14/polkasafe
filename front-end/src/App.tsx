import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';

function App() {
	return (
		<BrowserRouter>
			<AppLayout/>
		</BrowserRouter>
	);
}

export default App;
