import { useState } from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  // Get the user from the global state
  const {user} = useSelector((state) => state.auth)
  // local state
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
        <section className="heading">
          <h1>Create New Ticket</h1>
          <p>Please fill out the form below</p>
        </section>

        <section className="form">
          {/* Fields that cannot be changed */}
          <div className="form-group">
            <label htmlFor="name">Customer Name</label>
            <input type="text" className="form-control" value={name} disabled/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Customer Email</label>
            <input type="text" className="form-control" value={email} disabled/>
          </div>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="product">Product</label>
              <select
                name="product"
                id="product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="iPhone">iPhone</option>
                <option value="Macbook Pro">Macbook Pro</option>
                <option value="iPad">iPad</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description of the issue</label>
              <textarea
                name="description"
                id="description"
                className='form-control'
                placeholder='Please be as detailed as possible.'
                onChange = {(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <button className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </section>
    </>
  )
}

export default NewTicket