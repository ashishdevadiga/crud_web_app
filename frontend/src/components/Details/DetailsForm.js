import React, { useState } from "react";
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { getUserDetailsByKey, postUserDetails } from "../../actions";

function DetailsForm(props) {
    const { keyDetails } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const history = useHistory();
    const location = useLocation();
    const { loading } = props;
    function onCancel(){
        main();
    }  
    function getButtonEnable(){
        const dataFirstName = keyDetails&&keyDetails.firstName;
        const dataLastName = keyDetails&&keyDetails.lastName;
        const dataPhoneNumber = keyDetails&&keyDetails.phoneNumber;
        const data = {
            firstName: firstName || dataFirstName,
            lastName: lastName || dataLastName,
            phoneNumber: phoneNumber || dataPhoneNumber,
        }
        if(!data.firstName || !lastName || !phoneNumber){
            return true;
        }else{
            return false;
        }
    }

    function onSubmit(e){
        e.preventDefault();
        const dataFirstName = keyDetails&&keyDetails.firstName;
        const dataLastName = keyDetails&&keyDetails.lastName;
        const dataPhoneNumber = keyDetails&&keyDetails.phoneNumber;
        const data = {
            firstName: firstName || dataFirstName,
            lastName: lastName || dataLastName,
            phoneNumber: phoneNumber || dataPhoneNumber,
            alottedTime: location.state.payload.alottedTime,
            key: location.state.payload.id
        }
        props.postUserDetails(data, main);
    }
    function main(){
        history.push('/');
    }
    

    return(
        <Card className="p-3 m-auto mt-3">
        <Card.Title className="text-center">Reserve Slot</Card.Title>
          <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="First Name" 
                onChange={(e) => setFirstName(e.target.value)}
                defaultValue = {keyDetails&&keyDetails.firstName}
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Last Name" 
                onChange={(e) => setLastName(e.target.value)}
                defaultValue = {keyDetails&&keyDetails.lastName}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Phone Number" 
                onChange={(e) => setPhoneNumber(e.target.value)}
                defaultValue =  {keyDetails&&keyDetails.phoneNumber}
            />
        </Form.Group>
       <div className="w-100">
       {loading?
        <>
            <Spinner animation="border" size="sm" variant="light" />
            <span> Loading...</span>
        </>
        :
       (!keyDetails?<Button 
            variant="success" 
            type="submit" 
            className="mr-3"
            disabled={getButtonEnable()}
        >
            Save
        </Button>
        :
        <Button 
            variant="success" 
            className="mr-3"
            type="submit" 
        >
            Update
        </Button>
        )}
        &nbsp; &nbsp;
        <Button 
            variant="" className="ml-2"
            onClick={onCancel}
        >
            Cancel
        </Button>
       </div>

        </Form>
        </Card>
    )
}
const mapsStateToProps = ({ userDetails }) =>{
    const { details, keyDetails, loading, error } = userDetails;
    return { details, keyDetails, loading, error  };
}
export default connect(mapsStateToProps, {postUserDetails, getUserDetailsByKey}) (DetailsForm);