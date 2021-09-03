import React from 'react';
import {postService} from './../../services/post';
import {withRouter} from 'react-router-dom';

class Edit extends React.Component{
    constructor(props){
        super(props)
        const queryString = window.location.search;
        const url =new URLSearchParams(queryString);
        this.state={
             id :url.get('id'),
             title:url.get('title'),
             content:url.get('content'),
             author:url.get('author'),
             keyword:url.get('keyword')
        }
    }

    submit(evt){
        evt.preventDefault();
        postService.edit(this.state).then(()=>{
            alert("Sửa thành công");
            this.setState({
                title:'',
                content:'',
                author:'',
                keyword:''
            })
        }).catch(()=>{
            alert("Sửa thất bại");
        });
    }

    render(){
      return <div>
           <form onSubmit={this.submit.bind(this)}>
               <input type="text" value={this.state.title} placeholder="Title" onChange={(evt)=>this.setState({'title':evt.target.value})}/>
               <input type="text" value={this.state.author} placeholder="Author" onChange={(evt)=>this.setState({'author':evt.target.value})}/>
               <input type="text" value={this.state.keyword} placeholde="Keyword" onChange={(evt)=>this.setState({'keyword':evt.target.value})}/>
               <textarea value={this.state.content} placeholder="Content" onChange={(evt)=>this.setState({'content':evt.target.value})}></textarea>
               <button>Submit</button>
           </form>
       </div>             
    }
}

export default withRouter(Edit);