import { Input } from '../ContactForm/ContactForm.styled';
import { PropTypes } from 'prop-types';
import { FilterLabel } from './Filter.styled';

export const Filter = ({ value, onFilterChange, dis }) => (
 
  <>
    <FilterLabel>
      {dis 
      ? 'List is empty . . .'
      : 'Find contacts by name'}
      <Input
        className='filter__field'
        type="text"
        value={value}
        onChange={onFilterChange}
        disabled={dis}
        placeholder="Name or phone to seach..."
      />
    </FilterLabel>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func,
};
