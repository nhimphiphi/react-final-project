import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <li><span>{children}</span></li>
  }

  return (
    <li href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </li>
  )
}


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

<<<<<<< HEAD
export default Link;
=======
export default Link;
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
