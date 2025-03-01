import PropTypes from "prop-types"; // For props validation
import "./Tag.css";

/**
 * Tag Component - Represents a clickable tag button for filtering or selection.
 * @param {string} tagName - The name of the tag (e.g., HTML, CSS, JavaScript).
 * @param {Function} selectTag - Function called when the tag is clicked.
 * @param {boolean} selected - Boolean indicating if the tag is currently selected.
 */
const Tag = ({ tagName, selectTag, selected }) => {
  // Define background colors based on tag type
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    Node: { backgroundColor: "#68A063" },
    Express: { backgroundColor: "#A9A9A9" },
    MongoDB: { backgroundColor: "#B0C4DE" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default} // Apply the selected style if true
      onClick={() => selectTag(tagName)} // Trigger the selection callback
    >
      {tagName}
    </button>
  );
};

// PropTypes validation for type-checking props
Tag.propTypes = {
  tagName: PropTypes.string.isRequired, // Must be a string and required
  selectTag: PropTypes.func.isRequired, // Must be a function and required
  selected: PropTypes.bool.isRequired,  // Must be a boolean and required
};

export default Tag;
