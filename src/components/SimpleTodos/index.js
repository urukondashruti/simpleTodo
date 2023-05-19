import {Component} from 'react'

import './index.css'

import Items from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todoDetails: initialTodosList,
  }

  onDelete = id => {
    const {todoDetails} = this.state
    const updateList = todoDetails.filter(each => each.id !== id)
    this.setState({
      todoDetails: updateList,
    })
  }

  render() {
    const {todoDetails} = this.state

    return (
      <div className="back">
        <div className="con">
          <h1 className="head">Simple Todos</h1>
          <ul className="con1">
            {todoDetails.map(each => (
              <Items items={each} onDelete={this.onDelete} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
