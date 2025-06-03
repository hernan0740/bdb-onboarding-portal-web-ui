import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export interface CardComponentProps {
  title: string;
  description: string;
  url: string;
  image: string;
  btnText: string;
  rol?: string[];
}

function CardComponent({
  title,
  description,
  url,
  image,
  btnText,
}: CardComponentProps) {
  const handleRedirect = () => {
    window.location.href = url;
  };

  return (
    <Card style={{ width: "14rem" }}>
      {image === "" ? null : (
        <Card.Img variant="top" src={image} className="img-thumbnail" />
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRedirect}
        >
          {btnText}
        </button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
