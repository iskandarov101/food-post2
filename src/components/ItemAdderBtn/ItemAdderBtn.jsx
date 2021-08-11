const ItemAdderBtn = ({
    setVisible
  }) => {
    return (
         <button
         onClick={() => setVisible(true)}
          className="item-adder-btn">
        <span>+</span>
        <br />
        Add new dish
      </button>
    )
}

export default ItemAdderBtn
