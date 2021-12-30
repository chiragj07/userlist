import React, {useState} from 'react'
import SingleUser from '../SingleUser/SingleUser'
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from '../Navbar/Navbar'
const UserListContainer = ({userList}) => {
    const [count, setCount] = useState({
        pre : 0,
        next: 20
    })
    const [filCount, setFilCount] = useState({
        pre:0,
        next:20
    }) 
    const [curr, setCurr] = useState(userList.slice(count.pre, count.next))  //putting users in chunks so that memory efficiency can be enhanced.for inifinte loader when not searching
    const [hasMore, setHasMore] = useState(true);                            // checking if all the users have been shown on the screen.
    const [isSearching, setIsSearching] = useState(false);                  //when searching, we make it true so we can show filtered data only on the screen. 
    const [searchField, setSearchField] = useState('');                     // to get the search input
    const [filteredUserList,setFilteredUserList] = useState();              // to get filtered user list when searching
    const [filteredCurr, setFilteredCurr] = useState()                      // to get filtered User List in chunks to use infinite loader.
    const [filteSize, setFilteSize] = useState(false);                      // to check if any match is found on not while searching
    
    // to set search state when input changes
      const handleChange = (e)=>{

        setSearchField(e.target.value);
        
         }
    // to get results when search button clicked     
     const handleSearch = (e) =>{
         e.preventDefault();
         const filtered = userList.filter(user=>{
            return (user.FirstNameLastName.toLowerCase().includes(searchField.toLowerCase()) || user.ID === searchField
          )})
        setFilteredUserList(filtered);  // setting filtered user list 
        setFilteredCurr(filtered.slice(filCount.pre,filCount.next)) // first chunk for filtered user list
        setIsSearching(true) 
        if(filtered.length === 0){
            setFilteSize(false)
            setHasMore(false)
        }
        else{
            setFilteSize(true)
        }
        if(searchField === ''){
            setIsSearching(false)
        }
     }    

    
    
     //loading chunks to filteredCurrList when isSearch is true
    const loadMorefiltered=  ()=>{
        if(filteredCurr.length === filteredUserList.length){
            setHasMore(false)
            return;
        }
        setFilteredCurr(filteredCurr.concat(filteredUserList.slice(filCount.pre+20, filCount.next+20))); //adding 20 items each time when we get to the end of the screen
        setFilCount(currVal =>({
            pre: currVal.pre+20,
            next: currVal.next+20
        }));  // to add next 20 items, shifting the pointer by 20
    }

    // when isSearch is false, loading chunks to curr list.

    const loadMoreCurr =  ()=>{
        if(curr.length=== userList.length){
            setHasMore(false)
            return;
        }
        setCurr(curr.concat(userList.slice(count.pre+20, count.next+20)));  //adding 20 items each time when we get to the end of the screen
        
        setCount(currVal =>({
            pre: currVal.pre+20,
            next: currVal.next+20
        })); // to add next 20 items, shifting the pointer by 20
    }

    
    
       
    return (
        <>
        <Navbar handleSearch={handleSearch} handleChange={handleChange}  />
        <InfiniteScroll
           dataLength={isSearching ? filteredCurr.length : curr.length}
           next={!isSearching ? loadMoreCurr: loadMorefiltered}
           hasMore={hasMore}
           
        >        
        <div className="ml-8 mr-8 mt-10 grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 "   >
            { !isSearching ? (curr&& curr.map((user,index) =><SingleUser key={index} {...user} />)) : 
               (
                   filteSize ? (filteredCurr.map((user,index) =><SingleUser key={index} {...user}></SingleUser>)) :
                    (<h1>No result found</h1>)
               ) 
               /* if isSearch is true than we have to show the results of the search and when it is false we will show all
                users. so we are rendering conditionally here.
               */
              }
            
        </div>
        </InfiniteScroll>
        
        

        </>

    )
}

export default UserListContainer
