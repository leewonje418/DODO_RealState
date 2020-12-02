import React from 'react';
import { post } from 'axios';

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
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
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
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = 'api/v1/sales/getsales'
        const formData = new FormData();
        const { file, name, transaction_type, market_price, area, address, like } = this.state;
        formData.append('image', file);
        formData.append('name', name);
        formData.append('transaction_type', transaction_type);
        formData.append('market_price', market_price);
        formData.append('area', area);
        formData.append('address', address);
        formData.append('like', like);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }   

    render() {
        const { file, name, transaction_type, market_price, area, address, like, fileName } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name="file" file={file} value={fileName} onChange={this.handleFileChange}></input><br/>
                이름: <input type="text" name="name" value={name} onChange={this.handleValueChange}></input><br/>
                거래형태: <input type="text" name="transaction_type" value={transaction_type} onChange={this.handleValueChange}></input><br/>
                시세: <input type="text" name="market_price" value={market_price} onChange={this.handleValueChange}></input><br/>
                면적: <input type="text" name="area" value={area} onChange={this.handleValueChange}></input><br/>
                주소: <input type="text" name="address" value={address} onChange={this.handleValueChange}></input><br/>
                좋아요: <input type="text" name="like" value={like} onChange={this.handleValueChange}></input><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;