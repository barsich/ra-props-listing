import ListingItem from './ListingItem';

export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.filter(item => item.state === 'active').map((item) => (
        <ListingItem item={item} key={item.listing_id} />
      ))}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};
