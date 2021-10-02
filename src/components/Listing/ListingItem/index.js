import { currencyCodeToSymbol, itemQuantityLevel } from '../utils';

export default function ListingItem({ item }) {
  const { url, MainImage, title, currency_code, price, quantity } = item;

  let titlePreview;
  title.length > 50 ? (titlePreview = title.substring(0, 50) + '…') : (titlePreview = title);

  const currency = currencyCodeToSymbol(currency_code);

  const itemQuantity = itemQuantityLevel(quantity);

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
