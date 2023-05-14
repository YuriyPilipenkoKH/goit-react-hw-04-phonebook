import styled, { css, keyframes } from 'styled-components';
import baseLiStyles from '../ContactForm/ContactForm.styled';

const ulAnimation = keyframes`
    0% {
        transform: rotateX(-90deg)
    }
    70% {
        transform: rotateX(20deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }

`


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style-type: disc;


  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 0;

   animation: ${ulAnimation} 1s ease;   
`;

export const ListItem = styled.li`


    /* set up the animation */
    animation-duration: 0.5s;
    animation-fill-mode: both;
  
    
    /* use a css helper function to generate the delay */
    ${({ totalItems }) => css`
      ${Array.from({ length: totalItems }, (_, i) => css`
        &:nth-child(${i + 1}) {
          animation-delay: ${0.25 * (i + 1)}s;
        }
      `)}
    `}


  display: flex;
  flex-direction: column;
  gap: 8px;
  
  align-items: center;
  padding: 8px 10px;  

  @media screen and (min-width: 768px) {
   flex-direction: row;
   justify-content: space-between;
    }
`;

export const ItemCard = styled.span`
  display: flex;
  align-items: center;
 min-height: 40px;
  border-radius: 10px;
  padding:4px 16px;
  font-weight: 600;
  color: var(--footer-text-color);
  background-color: var(--lauren);

  box-shadow: var(--shadow-four);    
`

export const EditWrapper = styled.div`
  display: grid;
  grid-gap: 8px;

  &>input {
    padding: 4px 8px;
    border-radius: 4px;
    border: transparent;
    background-color: var(--beige);
    outline: none;

    &:active,
  &:focus {
   outline: 1px solid var(--orange);
  }
  }
`

export const ContactContainer = styled.div`
  position: relative;
  width: 320px;
  max-height: 480px;
  padding: 4px 2px;
  border: 3px solid var(--teal);
  border-radius: 10px;
  box-shadow: var(--shadow-four);
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
}

@media screen and (min-width: 768px) {
      width: 500px;
      padding: 4px 8px;
      max-height: 280px;
    }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;

`

export const BtnDelete = styled.button`
   ${baseLiStyles};
   justify-content: center;
   width: 100px;
   /* background-color: var(--red); */
   cursor: pointer;
    transition: all 0.4s;
    padding: 2px;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--red);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 

    .cardSpan{
        color: var(--crimson);
        box-shadow: var(--shadow-two); 
    }
  }
`
export const BtnEdit = styled.button`
   ${baseLiStyles};
   justify-content: center;
   width: 100px;
   
   cursor: pointer;
    transition: all 0.4s;
    padding: 2px;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--green);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 

    .cardSpan{
        color: var(--crimson);
        box-shadow: var(--shadow-two); 
    }
  }
`
