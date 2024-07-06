import React, { Component } from 'react'

export default class Myarticcle extends Component {
    render(){
        console.log('Myarticcle.js 실행됨');
        return(
            <section>
                <article>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.desc}</p>
                </article>
            </section>
        )
    }
}
