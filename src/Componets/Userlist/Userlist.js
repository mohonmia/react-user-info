import React, {useState} from 'react';
import './Userlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faCheckCircle } from '@fortawesome/free-solid-svg-icons'


const Userlist = (props) => {
    const {name,photo,designation,salary,contact} = props.employee;
    const [isPaid, setIsPaid] = useState(false);
    let paymentButton = <button onClick={() => {props.addToAccounts(props.employee); setIsPaid(true)} } className="pay-btn"><FontAwesomeIcon icon={faPlus} /> Add to pay</button>
    ;
    if(isPaid){
        paymentButton = <button  className="paid" disabled><FontAwesomeIcon icon={faCheckCircle} /> Payment Added</button>;
    }
    return (
        <div className="single-user">
            <img src={photo} alt=""/>
            <h3>Name: {name}</h3> 
            <p>Designation: {designation}</p>
            <p>Contact: {contact}</p>
            <p>Salary : {salary} BDT</p>
            {paymentButton}

        </div>
    );
};

export default Userlist;