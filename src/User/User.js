import React, { useState } from 'react';

const User = ({name, birthyear, children, click}) => {
   const [state, setState] = useState({
      createdAt: Date.now()
   })

   const refreshHandler = () => {
      setState({
         createdAt: Date.now()
      })
   }

   return (
      <div className="User">
         <p>
            {name} was {1969 - birthyear} years old when he walked on the moon.
         </p>
         <p>
            Created at: {state.createdAt}
            <button onClick={refreshHandler}>Refresh</button>
            <button onClick={click}>View User Internally</button>
         </p>
         <p>{children}</p>
         <hr/>
      </div>
   );
}

export { User }
