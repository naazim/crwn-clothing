import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherSectionProps }) => (
            <CollectionItem key={id} {...otherSectionProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
