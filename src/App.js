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
      subject: {title:'React', desc:'Single Page Application'},
      menus: [
        {id:1, title:"HTML", desc: "Hypertext Markup Language"},
        {id:2, title:"CSS", desc: "CSS is for design"},
        {id:3, title:"Javascript", desc: "Javascript is for interactive"}
        
      ]
    }

  }
  render() {
    return (
      <div className='App'>
        <MyHeader 
          title={this.state.subject.title}
          desc={this.state.subject.desc}
        />
        <MyNav data={this.state.menus}/>
        <MyArticle title="HTML" desc="Hypertext Markup Language"/>

      </div>
    )
  }
}
