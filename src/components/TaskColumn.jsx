import PropTypes from "prop-types"; // For props validation

// import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

/**
 * TaskColumn Component - Displays a column of tasks based on their status.
 *
 * @param {string} title - The title of the task column (e.g., "To Do", "In Progress").
 * @param {string} icon - The icon image URL for the column heading.
 * @param {Array} tasks - Array of task objects to be displayed.
 * @param {string} status - The status to filter tasks by (e.g., "todo", "done").
 * @param {Function} handleDelete - Function called to delete a task from the column.
 */
const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      {/* Column heading with icon */}
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt={`${title} Icon`} /> {title}
      </h2>

      {/* Rendering tasks that match the current column's status */}
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index} // Unique key for each task
              title={task.task} // Task title
              tags={task.tags} // Associated tags
              handleDelete={handleDelete} // Delete function
              index={index} // Task index for identification
            />
          )
      )}
    </section>
  );
};

// PropTypes validation for type-checking props
TaskColumn.propTypes = {
  title: PropTypes.string.isRequired, // Must be a string and required
  icon: PropTypes.string.isRequired, // Must be a string (image URL) and required
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired, // Task name
      tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Tags for the task
      status: PropTypes.string.isRequired, // Status of the task
    })
  ).isRequired, // Array of task objects
  status: PropTypes.string.isRequired, // Must be a string and required
  handleDelete: PropTypes.func.isRequired, // Must be a function and required
};

export default TaskColumn;
