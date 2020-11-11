import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    customers: "",
    completed: 0
  }
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('api/v1/sales/getsales');
    const body = await response.json();
    return body;
  }

  progress  = () => {
    const {completed} = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
    const { classes } = this.props
    const { root, table } = classes;
    return (
      <Paper className={root}>
        <Table className={table}> 
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>매물명</TableCell>
              <TableCell>거래형태</TableCell>
              <TableCell>시세</TableCell>
              <TableCell>주소</TableCell>
              <TableCell>좋아요</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>{
            this.state.customers ? this.state.customers.map(c => {
              const {id, image, name, transaction_type, market_price, address, like} = c;
              return (
                <Customer
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  transaction_type={transaction_type}
                  market_price={market_price}
                  address={address}
                  like={like}
                />
              ); 
            }) : 
            <TableRow>
              <TableCell colSpan="7" align="center ">
                <CircularProgress className={classes.progress} varieant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    )}
  }

export default withStyles(styles)(App);
