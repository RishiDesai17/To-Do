import React,{Component} from 'react';
import Item from './Form/form';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
let des;
let occ;
let deadline;

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
      let item = {id:'', occ:'', des:'', deadline:''};
      if(occ!==undefined && des!==undefined && deadline!==undefined) {
        let id = Math.random()*100+1;
        item.id = id;
        item.des = des;
        item.occ = occ;
        item.deadline = deadline;
        let items = [
          ...this.state.items
        ];
        items.push(item);
        this.setState({items: items});
      }
      else{
        alert("Pls fill in all fields!");
      }
    }
  }
  delItem = (id) => {
    const itemIndex = this.state.items.findIndex(x => {
      return x.id === id;
    });
    const items = [...this.state.items];
    items.splice(itemIndex, 1);
    this.setState({items: items});
  }
  render(){
    return (
      <div className="App">
        <Item submit={(event) => {this.addItem(event)}}
         />
        <Paper className={{ width: '100%', overflowX: 'auto'}}>
      <Table className={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Occasion</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell>X</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.items.map((item) => (
            <TableRow >
              <TableCell component="th" scope="row">
                {item.occ}
              </TableCell>
              <TableCell>{item.des}</TableCell>
              <TableCell>{item.deadline}</TableCell>
              <TableCell><Button color="secondary" onClick={() => this.delItem(item.id)}>DELETE!</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      </div>
    );
  }
}
export default App;
