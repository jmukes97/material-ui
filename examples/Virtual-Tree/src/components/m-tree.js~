import React from 'react';
import TreeView from '../TreeView.js';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '../TreeItem.js';

const data = {
    id: 'root',
    name: 'Parent',
    children: [
	{
	    id: '1',
	    name: 'Child - 1',
	},
	{
	    id: '3',
	    name: 'Child - 3',
	    children: [
		{
		    id: '4',
		    name: 'Child - 4',
		    children: [
			{
			    id: "4.5",
			    name: "Child - 4.5"
			}
		    ]
		},
	    ],
	},
	{
	    id: '5',
	    name: 'Child - 5',
	},
	{
	    id: '6',
	    name: 'Child - 6',
	    children: [
		{
		    id: '7',
		    name: 'Child - 7',
		},
	    ],
	},
	{
	    id: '8',
	    name: 'Child - 8',
	},
	{
	    id: '9',
	    name: 'Child - 9',
	    children: [
		{
		    id: '10',
		    name: 'Child - 10',
		},
	    ],
	},
	{
	    id: '11',
	    name: 'Child - 11',
	},
	{
	    id: '12',
	    name: 'Child - 12',
	    children: [
		{
		    id: '13',
		    name: 'Child - 13',
		},
	    ],
	},
	{
	    id: '14',
	    name: 'Child - 14',
	},
	{
	    id: '15',
	    name: 'Child - 15',
	    children: [
		{
		    id: '16',
		    name: 'Child - 16',
		},
	    ],
	},
	{
	    id: '17',
	    name: 'Child - 17',
	},
	{
	    id: '18',
	    name: 'Child - 18',
	    children: [
		{
		    id: '19',
		    name: 'Child - 19',
		},
	    ],
	},
	{
	    id: '20',
	    name: 'Child - 20',
	},
	{
	    id: '21',
	    name: 'Child - 21',
	    children: [
		{
		    id: '22',
		    name: 'Child - 22',
		},
	    ],
	},
	{
	    id: '23',
	    name: 'Child - 23',
	},
	{
	    id: '24',
	    name: 'Child - 24',
	    children: [
		{
		    id: '25',
		    name: 'Child - 25',
		},
	    ],
	},
    ],
};

const renderTree = ({data: { name, id, children, nestingLevel, isLeaf}, isOpen, style, toggle}) =>{
    const newStyle = Object.assign({}, style)
    newStyle.left = 20 * nestingLevel
    newStyle.width = "100%"
    return (
	<TreeItem onClick={toggle} key={id} nodeId={id} label={name} style={newStyle} >
	    {!isLeaf && (
		<div onClick={toggle}></div>
	    )}
	</TreeItem>
    )
}

const expanded = (event, nodeId)=> {
    console.log(`${nodeId} was expanded`)
    if(nodeId === "9") {
	return ([
	    {
	    id: "9.5",
	    name: "Child - 9.5",
	    },
	    {	
	    id: "9.6",
	     name: "Child - 9.6",
	     children: [
		 {
		     id: "9.7",
		     name: "Child - 9.7"
		 }
	    ]}
	])
    }else{
	if(nodeId === "4.5"){
	    return(
		// Wont work because 4.5 is a leaf
		[{
		    id: "4.6",
		    name: "Child - 4.6"
		}]
	    )
	}
    }
}

const collapsed = (event, nodeId) => {
    console.log(`${nodeId} was collapsed`)
}

export default function VirtualTreeView() {
    return (
	<TreeView
	    width="500px"
	    render={renderTree}
	    onNodeExpanded={expanded}
	    onNodeCollapsed={collapsed}
	    virtual={true}
	    data={data}
	    defaultCollapseIcon={<ExpandMoreIcon />}
	    defaultExpanded={['root']}
	    defaultExpandIcon={<ChevronRightIcon />}
	/>
    );
}
