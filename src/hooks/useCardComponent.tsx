import CardComponent, { CardComponentProps } from "../components/cardComponent";

export const useCardComponent = (
  cardData: CardComponentProps[],
  role?: string,
) => {
  console.log("useCardComponent -rol ", role);
  const cards = role
    ? cardData.filter((card) => card.rol?.includes(role))
    : cardData;
  console.log("useCardComponent", cards);
  return (
    <div
      className="mx-auto w-75"
      style={{
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          description={card.description}
          url={card.url}
          image={card.image}
          btnText={card.btnText}
        />
      ))}
    </div>
  );
};
