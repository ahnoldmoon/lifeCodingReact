import React, { Component } from 'react';


class TOC extends Component{
    render(){
      console.log(this.props.data);
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
        i = i + 1;
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

  export default TOC; //외부에서 TCO를 가져다 쓸수 있게 하는 코드