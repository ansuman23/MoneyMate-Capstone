import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Table } from 'react-bootstrap';
import Navbar from './Navbar'
import '../App.css';

function TransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [accountNo,setAccountNo]=useState("");
  const [amount,setAmount]=useState(0);
  const [type,setType]=useState('credit')
  const [description,setDescription]=useState('');

  useEffect(()=>{
    const storedId=localStorage.getItem("accountId");
    setAccountNo(storedId);
  },[])
  

  const [showAlert,setShowAlert]=useState(false);
  const [alertMessage,setAlertMessage]=useState('');
  const [alertBalance,setAlertBalance]=useState(0);
  
  

  const fetchTransactions = async () => {
    const accNum=localStorage.getItem("accountId");
    console.log(accNum)
    try {
      const res = await axios.get(`http://localhost:5001/api/transactions?accountNo=${accNum}`);
      console.log(res.data.data)
      setTransactions(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'accountNo':
        setAccountNo(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      case 'type':
        setType(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { accountNo, amount, type, description };
    if(Number(amount)<=0) {
      alert("Amount should be greater than equal to 0.");
      return;
    }
    try {
      await axios.post('http://localhost:5001/api/transactions', formData);
      
      // Reset form fields
      setAccountNo('');
      setAmount(0);
      setType('credit');
      setDescription('');

      fetchTransactions();
   
    } catch (err) {
      if(err.response && err.response.status===400 && err.response.data.error.includes("Insufficient Balance")){
        setAlertMessage(err.response.data.error);
        setAlertBalance(err.response.data.balance);
        setShowAlert(true)
      }
      else{
        alert('Transaction Failed');
        console.error(err);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/transactions/${id}`);
      fetchTransactions();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar/>
   
    <div className="transactions-container text-light">
      <div className="overlay-animation" />
      <Container className="py-2">
        <h2 className="mb-4 fade-in">💰 Add New Transaction</h2>
        <Form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow-lg slide-up">
          <Form.Group className="mb-3">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="text"
              name="accountNo"
              value={accountNo}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={amount}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select name="type" value={type} onChange={handleChange}>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description (optional)</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Add Transaction
          </Button>
        </Form>

        <h3 className="mt-5 fade-in">📝 Transaction History</h3>
        <Table striped bordered hover variant="dark" className="mt-3 slide-up">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Account No</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Description</th>
              <th>Date</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn._id}>
                <td>{txn.transactionId}</td>
                <td>{txn.accountNo}</td>
                <td>{txn.amount}</td>
                <td>{txn.type}</td>
                <td>{txn.description}</td>
                <td>{new Date(txn.tr_date).toLocaleString()}</td>
                <td>{txn.balance}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(txn._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {showAlert && (
          <div className='modal fade show d-block' style={{backgroundColor: 'rgba(0,0,0,0.6)', position:'fixed', top:0,left:0,right:0,bottom:0, zIndex:9999}}>
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content bg-dark text-white'>
                <div className='modal-header'>
                  <h5 className='modal-title'>Transaction Alert</h5>
                </div>
                <div className='modal-body text-center'>
                  <p>{alertMessage}</p>
                  <p><strong>Available Balance: </strong>Rs {alertBalance}</p>
                </div>
                <div className='modal-footer justify-content-center'>
                  <button className='btn btn-primary' onClick={()=>setShowAlert(false)}>Ok</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
    </>
  );
}

export default TransactionPage;
