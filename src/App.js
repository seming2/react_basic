import React, { Component } from 'react';
class MyNav extends Component{
  render(){
    return(
        <nav>
          <ul>
            <li><a href=''>HTML</a> </li>
            <li><a href=''>CSS</a> </li>
            <li><a href=''>Javascript</a> </li>
          </ul>
        </nav>
    )
  }
}

class Myarticcle extends Component{
  render(){
    return(
        <section>
          <article>
            <h2>HTML</h2>
            <p>Hypertext Markup Language</p>
          </article>
        </section>
    )
  }
}


/* ES5 문법
function MyHeader({title}){
  return (
    <h1>hello, {title}</h1>
  )
}
*/
class MyHeader extends Component{
  render(){
    return(
        <header>
          <h1 className="logo">{this.props.title}</h1>
          <p>{this.props.desc}</p>
        </header>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyHeader title="React" desc="Single Page Application"/>
        <MyNav/>
        <Myarticcle/>

      </div>
    )
  }
}
