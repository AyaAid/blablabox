import "./Button.css";

const Button = ({ buttonMode, onChangeMode }) => {
  return (
    <div className="button" onClick={onChangeMode}>
      <div className={`button-switch ${buttonMode ? "active" : ""}`}>
        <p className="button-switch-text">{buttonMode ? `demandes` : "amis"}</p>
      </div>
      <p className="button-text">amis</p>
      <p className="button-text">demandes</p>
    </div>
  );
};

export default Button;
