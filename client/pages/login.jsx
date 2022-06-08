import React from 'react';
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBContainer
} from 'cdbreact';
export default function Login() {
  return (
    <form action="">
      <CDBContainer className='form-container'>
        <CDBCard style={{ width: '40rem' }}>
          <div className="text-center text-white" style={{ background: '#b7d7bf' }}>
            <p className="h5 mt-2 py-4 font-weight-bold"> Sign up </p>
          </div>
          <CDBCardBody className="mx-4">
            <div className="form-row mb-n4">
              <div className="col">
                <CDBInput label="First name" type="text" placeholder='First Name' />
              </div>
              <div className="col">
                <CDBInput label="Last name" type="text" placeholder='Last Name' />
              </div>
            </div>
            <CDBInput label="E-mail" type="email" placeholder='Email' />
            <CDBInput label="Password" type="password" placeholder='enter password here' />
            <p className="text-muted text-center small mt-n4">At least 8 characters and 1 digit</p>
            <CDBInput label="re-enter-password" type="text" placeholder='re-enter password' />
            <CDBBtn color="dark" outline className="btn-block my-3 mx-0">
              Sign up
            </CDBBtn>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </form>
  );
}
