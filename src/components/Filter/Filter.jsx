import { Input ,  Label} from '../ContactForm/ContactForm.styled';
import { PropTypes } from 'prop-types';

export const Filter = ({ value, onFilterChange, dis }) => (
 
  <>
    <Label>
      {dis 
      ? 'List is empty . . .'
      : 'Find contacts by name'}
      <Input
        className='filter__field'
        type="text"
        value={value}
        onChange={onFilterChange}
        disabled={dis}
        // placeholder="Name or phone to seach..."
      />
    </Label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func,
};
