import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
<h1>contact us</h1>
     <form >
<div>
  <label>Name</label>
  <input type="text" require placeholder='Abc'/>
</div>
<div>
  <label>Email</label>
  <input type="email" require placeholder='Abc@xyz.com'/>
</div>
<div>
  <label>Message</label>
  <input type="email" require placeholder='Tell us about queries..'/>
</div>

<button type="submit">Send</button>
     </form>

      </main>
    </div>
  )
}

export default Contact
