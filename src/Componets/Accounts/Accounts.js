import React, { useState } from 'react';
import './Accounts.css'
const Accounts = (props) => {
    const totalPaidAmount = props.accounts.reduce((acc,curr) => {
        return acc + parseInt(curr.salary);
    },0)
    return (
        <div className="accounts">
            <h4>User Payment System</h4>
            <p>Paid User Number: {props.accounts.length}</p>
            <p>Total Paid Amount: {totalPaidAmount} BDT</p>
        </div>
    );
};

export default Accounts;