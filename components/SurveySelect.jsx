const SurveyButton = ({ text, onSelect }) => {
  return (
    <button className="survey-button">{text}</button>
  );
};

export const SurveySelect = ({ title, label='', options, trailingText }) => {
  const renderOptions = (options) => {
    return (
      options.map((option) => <SurveyButton text={option.label} />)
    )
  }
  return (
    <div className="select-container">
      <h2>{title}</h2>
      <h4>{label}</h4>
      {renderOptions(options)}
      <div>{trailingText}</div>
    </div>
  );
};
