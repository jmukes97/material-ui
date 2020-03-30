import React from 'react';
import RecursiveTreeView from './components/normal-tree'
import VirtualTreeView from './components/m-tree'

function App() {
    return (
	<div>
	    <h1>Tree goes here</h1>
	    <VirtualTreeView /><br /><br /><br /><br />
	    <RecursiveTreeView />
	</div>
    );
}
export default App;
