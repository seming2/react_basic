import React, { Component } from 'react';
import MyHeader from './MyHeader';
import MyNav from './MyNav';
import MyArticle from './Myarticcle';

/* ES5 문법
function MyHeader({title}){
  return (
    <h1>hello, {title}</h1>
  )
}
*/

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title:'React', desc:'Single Page Application'}
    }

  }
  render() {
    return (
      <div className='App'>
        <MyHeader 
          title={this.state.subject.title}
          desc={this.state.subject.desc}
        />
        <MyNav/>
        <MyArticle title="HTML" desc="Hypertext Markup Language"/>

      </div>
    )
  }
}
