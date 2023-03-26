import './admin.css'

import { useEffect, useState } from 'react'

function Admin() {

    const [ records, setRecords ] = useState([]);

    useEffect(() => {
          fetch(`http://localhost:5000/record`).then(res => res.json()).then(data => setRecords(data));
      }, []);
    return <>
        <p>Member List</p>
        {records.length == 0 ? <>Loading...</> : <>{records[0]['name']}</>}
    </>
}


export default Admin;