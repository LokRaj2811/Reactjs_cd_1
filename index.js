const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="card-title">Rajesh Reddy</h1>
      <p className="card-description">Parul University</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
