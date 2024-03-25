




const TableRow = ({book,handleDelete}) => {

    const{_id,coustomerName,date,email,service_id,services,img}= book;
    

    console.log(book)
    return (
       
       <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-secondary">Delete</button>
        </th>
        <td>
        <div class="avatar">
        <div className="w-24 rounded-xl">
        <img src={img} />
       </div>
       </div> 
        </td>
        <td>
          {services}
        </td>
        <td>{email}</td>
        <td>{coustomerName}</td>
        <td>{date}</td>
        <td>{service_id}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        
    );
};

export default TableRow;


