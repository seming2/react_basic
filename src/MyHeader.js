import React, { Component } from 'react'

export default class MyHeader extends Component {
    render(){
        return(
            <header>
            <h1 className="logo"><a href="git">{this.props.title}</a></h1>
            <p>{this.props.desc}</p>
            </header>
        )
    }
}
