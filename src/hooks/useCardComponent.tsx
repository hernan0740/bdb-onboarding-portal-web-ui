import CardComponent, {CardComponentProps} from "../components/cardComponent";


export const useCardComponent = ( cardData : CardComponentProps[]) => {

    return(
        <div className="mx-auto w-75" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {cardData.map((card, index) => (
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
}