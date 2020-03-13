import React, { useState } from 'react';
import userdata from '../../userdata/data.json';
import './User.css';
import Accounts from '../Accounts/Accounts';
import Userlist from '../Userlist/Userlist';

const User = () => {
    const [employees, setEmployees] = useState(userdata);
    const [accounts, setAccounts] = useState([]);

    const addToAccounts = (newData) => {
        const newAccounts = [...accounts,newData];
        setAccounts(newAccounts);
    }
    return (
        <div className="user">
            <div className="employee-container">
                {
                    employees.map(employee => <Userlist addToAccounts={addToAccounts} employee={employee}></Userlist>)
                }
            </div>
            <div className="accounts-container">
                <Accounts accounts={accounts}></Accounts>
            </div>
        </div>
    );
};

export default User;