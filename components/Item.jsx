import React from 'react';

function Item(props) {
  return (
    <div className="ItemComponent">
      <span className="items">
        {props.id}. {props.itemName}{' '}
{/* is the above formatting correct? */}
      </span>{' '}
      <div className="toBuyListBtnContainer">
        {/* bought button */}
        <button
          className="toBuyListBtn"
          id="deleteBtn"
          onClick={() => {
            props.updateItemStatus(props.itemName);
          }}
        >
          {' '}
          <i className="fa fa-check" />{' '}
        </button>

        {/* edit button */}
        <button className="toBuyListBtn">
          {' '}
          <i className="fa fa-edit" />{' '}
        </button>

        {/* eraser button */}
        <button
          className="toBuyListBtn"
          id="eraserBtn"
          onClick={() => {
            props.deleteItem(props.itemName);
          }}
        >
          {' '}
          <i className="fa fa-ban" />{' '}
        </button>
      </div>
    </div>
  );
}

export default Item;
