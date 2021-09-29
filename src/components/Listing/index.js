import ListingItemModel from './ListingItemModel';

export default function Listing({ items }) {
  const listItems = [];
  items.forEach((item) => listItems.push(<ListingItemModel item={item} key={item.listing_id} />));
  return <div className="item-list">{listItems}</div>;
}

Listing.defaultProps = {
  items: [],
};
