import * as React from 'react';
import { StandardProps } from '@material-ui/core';

export interface TreeViewPropsBase
  extends StandardProps<React.HTMLAttributes<HTMLUListElement>, TreeViewClassKey> {
  /**
   * The default icon used to collapse the node.
   */
  defaultCollapseIcon?: React.ReactNode;
  /**
   * The default icon displayed next to a end node. This is applied to all
   * tree nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultEndIcon?: React.ReactNode;
  /**
   * Expanded node ids. (Uncontrolled)
   */
  defaultExpanded?: string[];
  /**
   * The default icon used to expand the node.
   */
  defaultExpandIcon?: React.ReactNode;
  /**
   * The default icon displayed next to a parent node. This is applied to all
   * parent nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultParentIcon?: React.ReactNode;
  /**
   * If `true` selection is disabled.
   */
  disableSelection?: boolean;
  /**
   * Expanded node ids. (Controlled)
   */
  expanded?: string[];
  /**
   * Callback fired when tree items are expanded/collapsed.
   *
   * @param {object} event The event source of the callback.
   * @param {array} nodeIds The ids of the expanded nodes.
   */
  onNodeToggle?: (event: React.ChangeEvent<{}>, nodeIds: string[]) => void;
      /**
     * Optional custom logic to lazy load tree items
     */
    addNode?: () => void;
   /**
   * Function that renders each tree item. This function will have nodes yeilded to it by the tree walker
   *
   * @param {object} data can be used to get current node
   * @param {object} style default css properties. These can be edited
   * @param {function} toggle the function that handles expanding or closing
   * @param {boolean} isOpen determines the open state of a node
   */
    render?: (data: Object, isOpen: boolean, style: object, toggle: function) => void;
    
    /**
     * Used for react vtree to control how large a node item is   
     */
    itemSize?: number;
    
    /**
     * height of the tree
     */
    height?: number;

    /**
     * Width of the tree
     */
    width?: number;

    /**
     * A custom tree walker only needed if youre tree structure isnt {children: array, id, name: string}
     * The treewalker needs to be a generator function that will yeild each node on the tree in order.
     * It will be used to pass each node to render
     * @param {boolean} refresh check if tree needs to be refreshed 
     */
    walker?:(refresh: boolean) => void;

    /**
     * The base tree data needed if the tree is virtual
     */
    data?: object

    /**
     * Determins whether or not the tree should be virtual
     */
    virtual?: boolean;

    /**
     * Callback that is run everytime a node is expanded
     * if nodes are returned they will be children to the expanded node
     * @param {object} event 
     * @param {string} nodeId the id of a node that was expanded
     */
    onNodeExpanded?:(event: object, nodeId: string) => void;

    /**
     * callback that is called when a node colapses
     * This wont lazy load anything.
     * @param {object} event
     * @param {string} nodeId
     */
    onNodeCollapsed?:(event: object, nodeId: string) => void;
  }

export interface MultiSelectTreeViewProps extends TreeViewPropsBase {
  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  defaultSelected?: string[];
  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  selected?: string[];
  /**
   * If true `ctrl` and `shift` will trigger multiselect.
   */
  multiSelect?: true;
  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {object} event The event source of the callback
   * @param {(array|string)} value of the selected nodes. When `multiSelect` is true
   * this is an array of strings; when false (default) a string.
   */
    onNodeSelect?: (event: React.ChangeEvent<{}>, nodeIds: string[]) => void;

}

export interface SingleSelectTreeViewProps extends TreeViewPropsBase {
  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  defaultSelected?: string;
  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  selected?: string;
  /**
   * If true `ctrl` and `shift` will trigger multiselect.
   */
  multiSelect?: false;
  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {object} event The event source of the callback
   * @param {(array|string)} value of the selected nodes. When `multiSelect` is true
   * this is an array of strings; when false (default) a string.
   */
  onNodeSelect?: (event: React.ChangeEvent<{}>, nodeIds: string) => void;
}

export type TreeViewProps = SingleSelectTreeViewProps | MultiSelectTreeViewProps;

export type TreeViewClassKey = 'root';

/**
 *
 * Demos:
 *
 * - [Tree View](https://material-ui.com/components/tree-view/)
 *
 * API:
 *
 * - [TreeView API](https://material-ui.com/api/tree-view/)
 */
export default function TreeView(props: TreeViewProps): JSX.Element;
