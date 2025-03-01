import { useState } from "react";
import PropTypes from "prop-types"; // For props validation

import "./TaskForm.css";
import Tag from "./Tag";

/**
 * TaskForm Component - A form for adding new tasks with tags and status.
 *
 * @param {Function} setTasks - Function to update the tasks list in the parent component.
 */
const TaskForm = ({ setTasks }) => {
  // Local state for managing task data
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  // Check if a tag is already selected
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  // Add or remove a tag from the task
  const selectTag = (tag) => {
    if (checkTag(tag)) {
      // Remove the tag if it already exists
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => ({ ...prev, tags: filterTags }));
    } else {
      // Add the tag if it doesn't exist
      setTaskData((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  // Handle changes in the input fields (task text or status)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new task to the task list
    setTasks((prev) => [...prev, taskData]);
    // Reset form fields after submission
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      {/* Form for adding new tasks */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <div className="task_form_button_section">
          {/* Tags selection */}
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
            <Tag
              tagName="Node"
              selectTag={selectTag}
              selected={checkTag("Node")}
            />
            <Tag
              tagName="Express"
              selectTag={selectTag}
              selected={checkTag("Express")}
            />
            <Tag
              tagName="MongoDB"
              selectTag={selectTag}
              selected={checkTag("MongoDB")}
            />
          </div>

          {/* Task status selection and submission button */}
          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

// PropTypes validation for type-checking props
TaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired, // Must be a function and required
};

export default TaskForm;
