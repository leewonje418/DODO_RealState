import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends React.Component {
    render() {
        const {id, image, name, transaction_type, market_price, address, like} = this.props;
        return (
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell><img src={image} alt="profile" width='64' height='64'/></TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{transaction_type}</TableCell>
                <TableCell>{market_price}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{like}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;