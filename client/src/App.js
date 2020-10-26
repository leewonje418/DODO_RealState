import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
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
  }
})

const customer = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '962222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '이원제',
    'birthday' : '962222',
    'gender' : '남자',
    'job' : '고등학생'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '나동빈',
    'birthday' : '962222',
    'gender' : '남자',
    'job' : '대학생'
  },
]

class App extends Component {
  render() {
    const { root, table } = this.props.classes;
    return (
      <Paper className={root}>
        <Table className={table}> 
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>{
            customer.map(c => {
              const {id, image, name, birthday, gender, job} = c;
              return (
                <Customer
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  birthday={birthday}
                  gender={gender}
                  job={job}
                />
              )})
            }
          </TableBody>
        </Table>
      </Paper>
    )}
  }

export default withStyles(styles)(App);
