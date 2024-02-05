import "../index.css";

const ServiceItem = (props) => {
  return (
    <div className="item-container">
      <div className="item-logo">{<props.logo size="3rem" />}</div>
      <h2 className="item-title">{props.title}</h2>
      <p className="item-description">{props.description}</p>
    </div>
  );
};

export default ServiceItem;
