import { useState } from "react";
import { Typography } from "antd";
const { Paragraph } = Typography;
import PropTypes from "prop-types";

export default function EditableParagraph({ placeholder }) {
  const [editableStr, setEditableStr] = useState("");
  const [editing, setEditing] = useState(false);

  return (
    <Paragraph
      editable={{
        onChange: setEditableStr,
        onStart: () => setEditing(!editing),
        onEnd: () => setEditing(false)
      }}
    >
      {editing ? editableStr : editableStr || placeholder}
    </Paragraph>
  );
}

EditableParagraph.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
