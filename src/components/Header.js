import React from 'react'

const Logout = () => {
  var users = localStorage.getItem('Users');
  users = JSON.parse(users);
  console.log(users);
  if(users){
      for(var x=0;x<users.length;x++){
          var obj = users[x];
          if(obj.current === true){
              obj.current = false;
              localStorage.setItem('Users',JSON.stringify(users));
              window.location.reload();
              break;
          }else{
              console.log('error');
          }
      }
  }
}

const Header = () => {
  return (
    <div className='header row'>
      <button className="add-task-btn" style={{fontSize: '18px'}} onClick={Logout}>
          Logout
      </button>
      <h1>Task Manager</h1>
    </div>
  )
}

export default Header
