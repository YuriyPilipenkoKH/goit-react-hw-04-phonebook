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

export const myRippleStyles = `
position: relative;
overflow: hidden;
       
&:active {
  transform: scale(0.98);
}

&:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #2b02a5 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.4s, opacity 1s;
}

&:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}
`


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
  align-items: center;
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
  position: relative;
  overflow: hidden;
  ${baseLiStyles};

  width: 180px;
 justify-content: space-between; 
  /* width: 160px; */
  outline: none;
  cursor: pointer;
    transition: all 0.4s;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--green);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 

    & >svg {
        fill: var(--background-color);

     }

     
     &:active {
    transform: scale(0.98);
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #2b02a5 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.4s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
  }
`;