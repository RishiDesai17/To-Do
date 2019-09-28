import React,{Component} from 'react';
import Item from './Form/form';
import List from './List/list';
import './App.css';
var des;
var occ;
var deadline;
class App extends Component {
  state = {
    items: []
  }
  addItem = (event) => {
    const target = event.target;
    if(target.name==='des'){
      des=event.target.value;
    }
    else if(target.name==='occ'){
      occ=event.target.value;
    }
    else if(target.name==='deadline'){
      deadline=event.target.value;
    }
    else if(target.type==='submit'){
      let item = {occ:'', des:'', deadline:''};
      item.des = des;
      item.occ = occ;
      item.deadline = deadline;
      let items = [
        ...this.state.items
      ];
      items.push(item);
      this.setState({items: items});
    }
  }
  delItem = (des) => {
    const itemIndex = this.state.items.findIndex(x => {
      return x.des === des;
    });
    const items = [...this.state.items];
    items.splice(itemIndex, 1);
    this.setState({items: items});
  }
  render(){
    let items = (
        <div>
        {this.state.items.map(() => {
          return <List occ={this.state.items.occ} des={this.state.items.des} deadline={this.state.items.deadline}
            del={() => {this.delItem(this.state.items.des)}}/>
        })}
        </div>
      );
    return (
      <div className="App">
        <Item submit={(event) => {this.addItem(event)}}
         />
        {items}
      </div>
    );
  }
}
export default App;
