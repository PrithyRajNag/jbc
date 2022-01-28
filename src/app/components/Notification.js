import React from 'react';
const NotificationComponent = () => {
  return (
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card corona-gradient-card">
          <div className="card-body py-0 px-0 px-sm-3">
            <div className="row align-items-center">
              <div className="col-4 col-sm-3 col-xl-2">
                <img
                  src={require('../../assets/images/dashboard/Group126@2x.png')}
                  className="gradient-corona-img img-fluid"
                  alt="banner"
                />
              </div>
              <div className="col-5 col-sm-7 col-xl-8 p-0">
                <h4 className="mb-1 mb-sm-0">New refreshing look</h4>
                <p className="mb-0 font-weight-normal d-none d-sm-block">
                  Corona admin template now with a new facelift for enhanced
                  legibility and aesthetics!
                </p>
              </div>
              <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                <button className="btn btn-outline-light btn-rounded get-started-btn">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationComponent;
