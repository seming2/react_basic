import React, { Component } from 'react'

export default class MyNav extends Component {
    render(){
        let lists = [];
        var data = this.props.data; //리팩토링
        var i =0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href="">{data[i].title}</a></li>)
            i++;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}
