import React from 'react';

const User = ({name, birthyear}) => {
   return (
      <div className="User">
         {name} was {1969 - birthyear} years old when he walked on the moon.
      </div>
   );
}

export { User }
