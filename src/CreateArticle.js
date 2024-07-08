import React, { Component } from 'react'

export default class CreateArticle extends Component {
    render(){
        console.log('CreateArticle.js 실행됨');
        return(
            <section>
                <article>
                    <h2>Create Article</h2>
                    <form action='/create_process' method='post' 
                        onSubmit={function(e){
                            e.preventDefault();
                            // alert('전송됨')
                            debugger;
                            this.props.onSubmit();
                        }.bind(this)}
                    >
                        <p>
                            <input type="text" name="title" placeholder='Title'/>
                        </p>
                        <p>
                            <textarea name="desc" placeholder='description'/>
                        </p>
                        <p>
                            <input type='submit' value='전송'/>
                        </p>
                    </form>
                </article>
            </section>
        )
    }
}
