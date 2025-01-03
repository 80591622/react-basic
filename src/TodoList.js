import React, { Component, Fragment } from "react"; 
import "./style.css";

class TodoList extends Component {
  
  constructor(props) {  
    super(props) 
    
    this.state = { 
      
      inputValue: "", 
      list: [] 
    }
  }
  
  render() {
    return(

      <Fragment>
        <div>
      
          <input className="input" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>  
      
          <button className="button" onClick={this.handleBtn.bind(this)}>提交</button>
        </div>
        <ul>

          {this.state.list.map((item, index) => {
            return (
              <li key={index} onClick={this.handleItemDel.bind(this, index)}>{item}</li>
            )
          })}
        </ul>
      </Fragment>
    )
  }

  handleInputChange = (e) => {
    console.log(e.target.value, "输出值")

    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtn = () => {
    console.log(this.state.inputValue, "输出值")

    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
      }
    )


  }

  handleItemDel = (index) => {
    console.log(index, "index")
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList;
