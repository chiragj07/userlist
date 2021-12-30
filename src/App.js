// including all the dependencies
import { useState, useEffect } from 'react';
import data from './asset/data'
import UserListContainer from './Component/UserListContainter/UserListContainer';

function App() {
  const [userList, setUserList] = useState([]);  //state to store userList
  const [loading, setLoading] = useState(true); // loader while userList is being fetched


  // fetching userList
    useEffect(()=>{
       
      setUserList(data.objects.map(user=>user));
      setLoading(false);


        
    },[])
    
  return (
    <div className="flex-col justify-center">
      
      {!loading ? (<UserListContainer userList={userList} />) : null}
    </div>
  );
}

export default App;
