function Rows({ date,category,description,amount }) {



    
    return (
      
      
      <tr>
        <td>{date}</td>
        <td>{category}</td>
        <td>{description}</td>
        <td>${amount}</td>
      </tr>
      
    
      )

  }




export default Rows;