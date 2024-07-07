import React, { Component } from 'react'

export default class Controls extends Component {
  render() {
    return (
      <div>
        <ul>
        <li>
            <a 
                href="/create"
                className='btn'
                onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangesPage('create');
                    }.bind(this)
                }
            >create</a></li>
        <li>
            <a 
                href="/update"
                className='btn'
                onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangesPage('update');
                    }.bind(this)
                }
            >update</a></li>
        <li>
            <input 
                type="button"
                value="delete" 
                onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangesPage('delete');
                    }.bind(this)
                }
                /></li>
      </ul>
      </div>
    )
  }
}
