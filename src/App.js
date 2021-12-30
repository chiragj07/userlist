// including all the dependencies
import { useState, useEffect } from 'react';
import data from './asset/data'
import UserListContainer from './Component/UserListContainter/UserListContainer';

function App() {
  const [userList, setUserList] = useState([]);  //state to store userList
  const [loading, setLoading] = useState(true); // loader while userList is being fetched


  // fetching userList
    useEffect(()=>{
        
      //  const getData = async ()=>{
      //           const res = await fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26f30067-e979-455d-a971-ae23f70d5a8d/sample_user_data_20k.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211227T083800Z&X-Amz-Expires=86400&X-Amz-Signature=5a9cae36ba7348c738cdd52ab00e15e2587bec255e366040a67c7c1d437842e0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22sample_user_data_20k.json%22&x-id=GetObject');
      //           const data = await res.json();
      //           setUserList(data.objects.map(user=>user));
      //           setLoading(false);
               
      //  }
      //   getData();
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
