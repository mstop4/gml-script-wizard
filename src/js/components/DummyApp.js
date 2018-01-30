import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      
    ]
    };

    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {
    return (
      <div className="item-list">
      <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      </div>
    )
  }
}

export default SortableComponent