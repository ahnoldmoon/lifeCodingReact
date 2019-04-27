import React, { Component } from 'react'; // react 라이브러이에서 component를 가져다 쓰겠다는 뜻

class Subject extends Component{
    render(){
      return(
        <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
        </header>
      )
    }
  }

  export default Subject;