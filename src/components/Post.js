import React, { Component } from 'react'
import axios from 'axios';

export default class Class extends Component {
  
constructor(props){
    super (props)
    this.state = {
        persons: []
      }
}

componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

incre(){
    this.setState({
        count : this.state.count + 1
    })
}


decre(){
   
    this.setState({
        count : this.state.count - 1
    })
    if (this.state.count < 1){
        this.setState({
            count : 0
        })  
    }
}


reset(){
    this.setState({
        count : 0
    })
}


    render() {

        return (
            <React.Fragment>
            <div>
    <h1>{this.state.count}</h1>
    <button onClick={() => this.incre()}>+</button>
    <button onClick={() => this.decre()}>-</button>
    <button onClick={() => this.reset()}>reset</button>
            </div>
               {/* <Grid item xs={12} md={8}>
               <Typography variant="h6" gutterBottom>
                 {title}
               </Typography>
               <Divider />
               {posts.map(post => (
                 <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                   {post}
                 </Markdown>
               ))}
             </Grid> */}
             </React.Fragment>
        )
    }
}