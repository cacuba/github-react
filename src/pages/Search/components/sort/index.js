import React from 'react';
import './sort.css';

class Sort extends React.Component {
  render() {
    const { actions, visible } = this.props;
    return (
        <div className="Sort">
            <div className="row">
                <div className={`column links ${!visible ? 'hide' : ''}`}>
                    Sort by: 
                
                    <a onClick={() => {actions.getRepositoryData('stars')}} href="javscript:void()">Stars</a> | 
                
                    <a onClick={() => {actions.getRepositoryData('forks')}} href="javscript:void()">Forks</a> | 
                
                    <a onClick={() => {actions.getRepositoryData('updated')}} href="javscript:void()">Updated</a>
                        
                </div>
            </div>
        </div>
    );
  }
}

export default Sort;
