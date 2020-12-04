import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden : {
        display: 'none'
    }
})

class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            name: '',
            transaction_type: '',
            market_price: '',
            area: '',
            address: '',
            like: '',
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer();
            // .then((response) => {
            //     console.log(response);
            //     this.props.stateRefresh();
            // })
        this.setState({
            file: null,
            name: '',
            transaction_type: '',
            market_price: '',
            area: '',
            address: '',
            like: ''
        })
    }
 
    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};

        nextState = {
            ...this.state,
            [e.target.name]: e.target.value,
        };
        
        this.setState(nextState);
    }

    addCustomer = async () => {
        
        const url = 'http://localhost:8080/api/v1/sales/postsales';
            const formData = new FormData();

            const { file, name, transaction_type, market_price, area, address, like } = this.state;

            const request = {
                file,
                name,
                transaction_type,
                market_price,
                area,
                address,
                like
            };

            await axios.post(url, request)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    alert('추가 성공.');
                    window.location.reload();
                }
            });
            // return post(url, formData, config);

        }   

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            file: null,
            name: '',
            transaction_type: '',
            market_price: '',
            area: '',
            address: '',
            like: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        // let { file, name, transaction_type, market_price, area, address, like, fileName } = this.state;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    고객 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        {/* <input className={classes.hidden} accept="public/*" id="raised-button-file" type="file" file={file} value={fileName} onChange={this.handleFileChange}/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component="span" name="file">
                                {fileName === '' || fileName === undefined ? "프로필 이미지 선택" : fileName}
                            </Button>
                        </label><br/> */}
                        {/* 프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/> */}
                        <TextField label="이미지 주소" type="text" name="file" value={this.state.file} onChange={this.handleValueChange}></TextField><br/>
                        <TextField label="이름" type="text" name="name" value={this.state.name} onChange={this.handleValueChange}></TextField><br/>
                        <TextField label="거래형태" type="text" name="transaction_type" value={this.state.transaction_type} onChange={this.handleValueChange}></TextField><br/>
                        <TextField label="시세" ype="text" name="market_price" value={this.state.market_price} onChange={this.handleValueChange}></TextField><br/>
                        <TextField label="면적" type="text" name="area" value={this.state.area} onChange={this.handleValueChange}></TextField><br/>
                        <TextField label="주소" type="text" name="address" value={this.state.address} onChange={this.handleValueChange}></TextField><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerAdd);