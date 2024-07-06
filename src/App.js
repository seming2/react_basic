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
      mode:'welcome',
      selected_id:'',
      subject: {title:'React', desc:'Single Page Application'},
      welcome: {title:'Welcome', desc:'Welcome to React'},
      menus: [
        {id:1, title:"HTML", desc: "Hypertext Markup Language"},
        {id:2, title:"CSS", desc: "CSS is for design"},
        {id:3, title:"Javascript", desc: "Javascript is for interactive"}
        
      ]
    }

  }
  render() {
    console.log('App.js 실행됨');
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    }else if(this.state.mode === 'read'){
      /*
          반복분.. 클릭한 그 요소의 data-id의 값이 menus의 각 함목들에 있는지 없는지 확인 
      */ 
      var i = 0;
      
      while(i < this.state.menus.length ){
        let data = this.state.menus[i];
        if(data.id === this.state.selected_id){
          _title = data.title;
          _desc = data.desc;
          // break;
        }
        i++;
      }
    }
    

    return (
      <div className='App'>
        <MyHeader 
          title={this.state.subject.title}
          desc={this.state.subject.desc}
          onChangesPage = {
            function(){
              this.setState({
                mode:'welcome'
              })
            }.bind(this)
          }
        />
        <MyNav 
          data={this.state.menus}
          onChangesPage = {
            function(id){
              this.setState({
                mode:'read',
                selected_id:Number(id)
              })
            }.bind(this)
          }
        />
        <MyArticle 
          title = {_title}
          desc = {_desc}
        />

      </div>
    )
  }
}
