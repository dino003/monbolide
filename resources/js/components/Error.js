import React from 'react'

export default function Error() {
    return (
        <div className="error">
        <div className="error__content">
          <h2>500</h2>
          <h3>Something went wrong!</h3>
          <p>There was a problem on our end. Please try again later.</p>
          <button type="button" className="btn btn-accent btn-pill">&larr; Go Back</button>
        </div>
      </div>
    )
}
