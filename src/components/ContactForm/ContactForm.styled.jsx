import styled, { css} from 'styled-components';

const baseLiStyles = css`
  
    font-family: inherit;
    font-size: 16px;
    line-height: 17px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;

    height: 40px;
    color: var(--black);
    background-color: var(--yellow);
    border:  transparent;
    border-radius: 10px;
    box-shadow: var(--shadow-four);
`;
export default baseLiStyles



export const Input = styled.input`
  height: 40px;
  width: 280px;
  border-radius: 10px;
  padding:4px 16px;
  background-color: var(--beige);
  border: transparent;
  box-shadow: var(--shadow-four);

  &:hover,
  &:active,
  &:focus-visible {
   
    outline: 2px solid var(--orange);
    box-shadow: var(--shadow-two);
  }

  &:disabled {
    border: none;
    outline: none;
    cursor: none;
    background-color: var(--lightgray);

    &:hover {
      box-shadow: var(--shadow-four);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

`;


export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
  align-items: baseline;
`;


export const ContactFormBtn = styled.button`
  ${baseLiStyles};
  justify-content: center;
  width: 160px;
  cursor: pointer;
    transition: all 0.4s;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--green);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 
  }
`;