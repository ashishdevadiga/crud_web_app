import React from "react";
import { useHistory } from "react-router";
import {  Col, Card } from "react-bootstrap";
import { getUserDetailsByKey } from "../../actions";
import { connect } from "react-redux";

function ListItem(props) {
    const history = useHistory();
    const { payload, loading } =props;

    function handleClick() {
        props.getUserDetailsByKey(payload.alottedTime, loadDetails)
    }
    function loadDetails(){
        history.push("/Details", {
            payload: payload 
        });
    }
    return(
        <Col className="my-1" md={2} >
                <Card
                    onClick={handleClick}
                    className={`${payload._id?"border-danger bg-danger"  : "border-success bg-success"} border text-center text-white p-2`}
                >
                    <span>{loading? 'Loading...' : payload.alottedTime}</span>
                </Card>
        </Col>
    
    )
}
const mapsStateToProps = ({ userDetails }) =>{
    const { loading } = userDetails;
    return { loading };
}
export default connect(mapsStateToProps, {getUserDetailsByKey}) (ListItem);