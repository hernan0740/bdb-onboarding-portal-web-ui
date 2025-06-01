import CardComponent, {CardComponentProps} from "../components/cardComponent";
import CardPageComponent from "../components/cardPageComponent";


export const useCardPageComponent = ( cardData : CardComponentProps[]) => {

    return(
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {cardData.map((card, index) => (
                <CardPageComponent
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