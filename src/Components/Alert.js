import React from 'react'

export default function Alert( {alert} ) {
  return (
    alert && <div className="alert alert-success alert-dismissible fade show" role="alert">,
       <strong>{alert.type}</strong>: {alert.msg}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>,
    </div>

  );
}

