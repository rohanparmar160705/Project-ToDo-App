import PropTypes from "prop-types"; // For props validation

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

/**
 * TaskCard Component - Represents an individual task with a title, tags, and delete functionality.
 *
 * @param {string} title - The title or description of the task.
 * @param {Array<string>} tags - An array of tags associated with the task.
 * @param {Function} handleDelete - Function called when the delete icon is clicked.
 * @param {number} index - The index of the task in the list for identification.
 */
const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      {/* Display the task title */}
      <p className="task_text">{title}</p>

      {/* Bottom section containing tags and delete button */}
      <div className="task_card_bottom_line">
        {/* Render each tag using the Tag component */}
        <div className="task_card_tags">
          {tags.map((tag, i) => (
            <Tag key={i} tagName={tag} selected />
          ))}
        </div>

        {/* Delete button for removing the task */}
        <div
          className="task_delete"
          onClick={() => handleDelete(index)} // Call delete function on click
        >
          <img src={deleteIcon} className="delete_icon" alt="Delete Task" />
        </div>
      </div>
    </article>
  );
};

// PropTypes validation for type-checking props
TaskCard.propTypes = {
  title: PropTypes.string.isRequired, // Must be a string and required
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Must be an array of strings
  handleDelete: PropTypes.func.isRequired, // Must be a function
  index: PropTypes.number.isRequired, // Must be a number and required
};

export default TaskCard;
