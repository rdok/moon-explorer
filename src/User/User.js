import React from 'react';

const User = ({name, birthyear, children}) => {
   return (
      <div className="User">
         <p>
            {name} was {1969 - birthyear} years old when he walked on the moon.
         </p>
         <p>{children}</p>
         <hr/>
      </div>
   );
}

export { User }
