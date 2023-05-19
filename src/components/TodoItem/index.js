// Write your code here

import './index.css'

const Items = props => {
  const {items, onDelete} = props
  const {id, title} = items

  const onClickbutton = () => {
    onDelete(id)
  }
  return (
    <li className="con2">
      <p>{title}</p>
      <button type="button" onClick={onClickbutton} className="size">
        Delete
      </button>
    </li>
  )
}

export default Items
