import { Input } from "antd";
import "./InputInfo.css";
import PropTypes from "prop-types";
export default function InputInfo({ placeholder }) {
  return (
    <div className="main_input">
      <span className="input_name">{placeholder}:</span>
      <Input placeholder={placeholder} size="small" className="IputInfo" />
    </div>
  );
}

InputInfo.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
