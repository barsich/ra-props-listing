export default function ListingItemModel({ item }) {
  if (item.state === 'removed') {
    return null;
  }

  const { url, MainImage, title, currency_code, price, quantity } = item;

  let titlePreview;
  title.length > 50 ? (titlePreview = title.substring(0, 50) + '…') : (titlePreview = title);

  let currency = null;
  if (currency_code === 'USD') {
    currency = '$';
  } else if (currency_code === 'EUR') {
    currency = '€';
  }

  let itemQuantity = 'item-quantity';
  if (quantity <= 10) {
    itemQuantity += ' level-low';
  } else if (quantity <= 20) {
    itemQuantity += ' level-medium';
  } else if (quantity > 20) {
    itemQuantity += ' level-high';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titlePreview}</p>
        {currency ? (
          <p className="item-price">
            {currency}
            {price}
          </p>
        ) : (
          <p className="item-price">
            {price}&nbsp;{currency_code}
          </p>
        )}
        <p className={itemQuantity}>{quantity} left</p>
      </div>
    </div>
  );
}
