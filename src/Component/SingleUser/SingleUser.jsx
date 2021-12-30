import React from 'react'
const SingleUser = (props) => {
    const { JobTitle,FirstNameLastName,Email,Company,Phone,ID } = props;
    return (
        <div className="border-2 font-sans border-gray-200 p-2 pt-4 h-52 text-center items-center  shadow-lg shadow-gray-600 bg-white">
            <h2><b>Name</b> : {FirstNameLastName}</h2>
            <h3><b>ID</b> : {ID}</h3>
            <h4> <b>Works at</b>  : {Company}</h4>
            <h4><b>Position </b> : {JobTitle}</h4>
            <h4> <b>Email</b> : {Email}</h4>
            <h4><b>Phone</b>: {Phone}</h4>
        </div>
    )
}

export default SingleUser
