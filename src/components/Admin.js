import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);

      const userbirth = logindata.some((el) => el.date === todayDate);

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedData = localStorage.getItem("useryoutube");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <div className="container mt-3">
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Admin Page</h1>
          <h1>{logindata[0].name}</h1>
          <h3 className="text-center">Registered Users</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button onClick={userlogout} className="mb-3">
            Log Out
          </Button>

          {logindata[0].date === todayDate && (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
              </Modal.Header>
              <Modal.Body>Wish you many happy returns of the day! 🍰</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default Admin;






















