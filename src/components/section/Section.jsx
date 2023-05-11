import PropTypes from 'prop-types'
import { MainTitle, MainSection } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
    <MainSection>
      <MainTitle>{title}</MainTitle>
      {children}  
     </MainSection>)
 }
 
 Section.propTypes = {
     title: PropTypes.string.isRequired,
     children: PropTypes.node.isRequired,

   };
   