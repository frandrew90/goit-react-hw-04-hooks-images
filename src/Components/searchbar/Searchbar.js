import React, { useState } from 'react';
import PropTypes from 'prop-types';

// const initialState = {
//   find: '',
// };

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleSearchForm = e => {
    e.preventDefault();
    onSubmit(state);
    setState('');
  };

  const handleInputChange = e => {
    setState(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSearchForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={state}
        />
      </form>
    </header>
  );
};

export default Searchbar;

// class Searchbar extends Component {
//   state = {
//     find: '',
//   };

//   handleSearchForm = e => {
//     e.preventDefault();
//     props.onSubmit(state.find);
//     setState({ find: '' });
//   };

//   handleInputChange = e => {
//     setState({ find: e.target.value });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={handleSearchForm}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={handleInputChange}
//             value={state.find}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
