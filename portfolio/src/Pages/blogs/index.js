import React from 'react'
import { connect } from 'react-redux'
import { blogging } from '../../Store/Actions/blogging'

const Blogs = (props) => {
    console.log(props.blogging, "blogging");
    return (
        <>
            <h1>Blogs</h1>
            <button onClick={() => {props.dispatch(blogging())}}>button</button>
        </>
    )
}
const mapStateToProps = (blogging) => {
    return {
        blogging
    }
}
export default connect(mapStateToProps)(Blogs)    
