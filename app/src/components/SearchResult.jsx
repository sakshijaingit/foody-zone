import styled from "styled-components";
import { BASE_URL }  from "../App";
import { Button , Container} from "../App";

const SearchResult = ( { data } ) => {
    return (
    <FoodCardContainer>
        <Container> 
            <FoodCards>
        {data?.map((food) => (
            <FoodCard key={food.name}>
                <div className="food_image">
                 <img src={BASE_URL + food.image} alt="photo" ></img>
                </div>
                <div className="food_info">
                    <div className="info">
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                    </div>
                    <Button>${food.price.toFixed(2)}</Button>
                </div>

            </FoodCard>))}
        </FoodCards>
        </Container>
    
    </FoodCardContainer>
    );
};

const FoodCardContainer = styled.section`
/* height: calc(100vh -100px);*/
min-height: calc(100vh - 210px);
background-image: url(/bg.png);
background-size: cover;
`;

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;

`;


const FoodCard = styled.div`
  width: 340px;
  height: 167px;
 background: url(.png),
    radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(165,239,255,0.2) 0%,
        rgba(110,191,244, 0.0447917) 77.08%,
        rgba (70,144,213,0) 100%
    );
    background-blend-mode: overlay,normal;
    backdrop-filter: blur(13.1842px);
    border-radius: 20px;
    border: 0.66px solid white;
    display: flex;
    padding: 8px;
    .food_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        
        h3 {
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }
        p {
            margin-top: 4px;
            font-size: 12px;
        }
        .button {
            font-size: 12px;
        }
    }

`;

export default SearchResult;

