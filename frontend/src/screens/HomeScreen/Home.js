import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getUserDetails } from "../../actions";
import LibraryList from "../../components/Home/LibraryList";

function Home(props) {
    useEffect(() => {
        props.getUserDetails();
    }, []);
    
    return(
        <div>
            <LibraryList />
        </div>
    )    
}

export default connect('', {getUserDetails}) (Home);