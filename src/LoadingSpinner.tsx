import "./Styling/LoadingSpinner.scss";

//interface LoadingSpinnerProps {}

const LoadingSpinner = () => {
  return (
    <div className="Animation">
      <div className="Animation-frames">
        <span className="Animation-frame">—</span>
        <span className="Animation-frame">\</span>
        <span className="Animation-frame">|</span>
        <span className="Animation-frame">/</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
