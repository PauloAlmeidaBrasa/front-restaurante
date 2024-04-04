import React, { useState, useEffect } from 'react';

// const Vendas = () => {
// //   const [items, setItems] = useState([]);

// //   useEffect(() => {
// //     fetchItems();
// //   }, []);

// //   const fetchItems = async () => {
// //     try {
// //       const response = await fetch('your-api-endpoint');
// //       const data = await response.json();
// //       setItems(data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {/* <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default Vendas;

const GetAllUser = () => {
    // const [users, setAllUser] = useState();
    // useEffect(() => {
    //   axios
    //     .get("http://localhost:8000/api/all")
    //     .then((response) => setAllUser(response.data))
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // }, []);
      return (
        <>
          <h1>Vendas</h1>
          {/* <ul>
          {users && users.map(user => 
            <li key={user.id}>
              <h3>ID: {user.id} </h3>
              name: {user.name} <br></br>
              age: {user.age} <br></br>
              email: {user.email} <br></br>
            </li>
          )}
          </ul> */}
          
        </>
        );
    };
export default GetAllUser