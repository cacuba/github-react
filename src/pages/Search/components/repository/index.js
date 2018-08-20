import React from 'react';
import './repository.css';

class Repository extends React.Component {
  render() {
    const { data } = this.props;
    return (
        <div className="repository">
            {data.length > 1 && data.map((row, index) => (
                <div className="row" key={index}>
                    <div className="column">
                        <h2><a href={row.url} target="_blank">{row.name}</a></h2>
                        <p>{row.description}</p>
                        <div className="row">
                            <div className="column column-33">
                                <span className="repository-label">Watchers:</span> {row.watchers_count}
                            </div>
                            <div className="column column-33">
                                <span className="repository-label">Stars:</span> <a href={row.stargazers_url} target="_blank">{row.stargazers_count}</a>
                            </div>
                            <div className="column column-33">
                                <span className="repository-label">Forks:</span> <a href={row.forks_url} target="_blank">{row.forks_count}</a>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            )}
        </div>
    );
  }
}

export default Repository;
