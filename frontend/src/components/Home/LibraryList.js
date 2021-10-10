import React from "react";
import { connect } from "react-redux";
import ListItem from "../Items/ListItem";
import { Row, Card } from "react-bootstrap";

function LibraryList(props) {
    const { libraries } = props;
    const { details } = props.userDetails;

    function get() {
        for(var i=0; i<libraries.length; i++){
            for(var j=0; j<details.length; j++){
                if(i===details[j].key){
                    libraries[i]=details[j];
                }
            }
        }
    }
    return(
        <Card className="p-3 mt-3" bordered >
        {details&&get()}
        <Card.Title className="text-center">Time slot</Card.Title>
        <Row className="mt-3">
            {libraries&&libraries.map((data, key)=>
            <ListItem
                key = {key}
                payload = {data}
            />
            )}
        </Row>
        </Card>
    )
}
const mapsStateToProps = state =>{
    return { 
        userDetails : state.userDetails,
        libraries: state.libraries 
    };
}

export default connect(mapsStateToProps) (LibraryList);