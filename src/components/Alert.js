import React from 'react';

function Alert(props) {
    const capitalizedType = props.alert && props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1);

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalizedType}:</strong> {props.alert.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;
