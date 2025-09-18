import React from 'react'
import First from '../First'
import SecondPage from './SecondPage'
import ThirdPage from '../ThirdPage'
import Form from './Table'

const App = () => {





  return (
    <div>
      <h1>Hello</h1>
      <First/>
     
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta voluptatum voluptas harum enim, corporis dignissimos ducimus necessitatibus, cupiditate sed cumque. Quisquam perspiciatis facilis blanditiis reprehenderit nemo laboriosam odio sequi unde quam magnam. Quisquam cupiditate, earum neque et veritatis sequi corrupti ea quia quae totam consequuntur explicabo, porro nesciunt modi illum quod ipsam praesentium reiciendis debitis! Natus inventore fugiat quo quasi, blanditiis a, culpa amet officiis incidunt ut distinctio repudiandae quas. Deleniti repudiandae repellendus, incidunt ipsam ut perspiciatis temporibus quia iure eaque facere error deserunt dolorum cum veniam delectus culpa numquam reprehenderit doloribus et! Aspernatur id eos architecto ex quisquam.</p>
    <SecondPage/>
    <ThirdPage/>

    {/* bootstrap-Form */}
    <div style={{padding:"10px", backgroundColor:'gray',width:"50%"}}>
<div>
  <input className="form-control" type="text" placeholder="input Your Name" aria-label="Disabled input example" disabled />

    <input className="form-control" type="text" defaultValue="input Contact number" aria-label="Disabled input example" disabled readOnly />

  <input className="form-control" type="text" defaultValue="input Your Address" aria-label="Disabled input example" disabled readOnly />
</div>
</div>
{/* table Start */}
<Form/>

    </div>
  )
}

export default App