import React from 'react';

function SelectProject() {
    const name=['p1','p2','p3','p4'];
  return (
    <div className="container">
      <select className="browser-default custom-select">
        
          {name.map(user => (
        <option value={user}>{user}</option>
        
        ))}

          
        
      </select>
    </div>
  );
}

export default SelectProject;