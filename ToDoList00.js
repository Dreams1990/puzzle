import React, {
  Component
} from 'react';
import ToDoItem from "./ToDoItem";
import store from './store'
import ToDoListUI from './AppUI'
import {connect} from 'react-redux'


import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getToDoList } from './store/actionCreators'
// import axios from 'axios';
import './style.css';


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class ToDoList extends Component {
  constructor(props) {
    super(props);
    //当组件state或props发生改变，render就重新执行
    // this.state = store.getState();
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleStoreChange = this.handleStoreChange.bind(this);
    // this.handleBtnClick = this.handleBtnClick .bind(this);
    // this.handleItemDelete = this.handleItemDelete .bind(this);
    // store.subscribe(this.handleStoreChange)//组件订阅store
  }

  // handleStoreChange(){
  //   this.setState(store.getState())
  // }
  handleInputChange(e) {
    const value = e.target.value;
    const action = getInputChangeAction(value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    const action = getDeleteItemAction(index)
    store.dispatch(action);


  }

  // getToDoList(){
  //   return this.state.list.map((item,index) =>{
  //     return (
  //       <ToDoItem
  //       key ={index}
  //       content = {item}
  //       index={index}
  //       handleItemDelete = {this.handleItemDelete.bind(this)}
  //       />
  //     )
  //   })
  // }

  componentWillMount(){

  }

  componentDidMount(){
    const action = getToDoList();
    store.dispatch(action)
  }

  render(){
    return (
        <ToDoListUI
          inputValue ={this.props.inputValue}
          handleInputChange = {this.props.handleInputChange}
          // handleBtnClick = {this.handleBtnClick}
          // list = {this.state.list}
          // handleItemDelete = {this.handleItemDelete}
          />

    );
  }

}

const mapDispatchToProps = (dispatch) =>{
  return{
    handleInputChange(e) {
      const value = e.target.value;
      const action = getInputChangeAction(value);
      dispatch(action);
    }
  }
}

const mapStateToProps = (state) =>{
  return{
    inputValue:state.inputValue
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
