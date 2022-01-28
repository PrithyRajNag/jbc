import React from 'react';
const DashBoardCard = ({ title, value, indicate, indicateBox, percentage }) => {
  return (
    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              <div className="d-flex align-items-center align-self-start">
                <h3 className="mb-0">{value}</h3>
                <p className="text-success ml-2 mb-0 font-weight-medium">
                  {percentage}
                </p>
              </div>
            </div>
            <div className="col-3">
              {indicateBox && (
                <div className="icon icon-box-success ">
                  <span
                    className={`mdi ${
                      indicate ? 'mdi-arrow-top-right' : 'mdi-arrow-top-right'
                    } icon-item`}
                  ></span>
                </div>
              )}
            </div>
          </div>
          <h6 className="text-muted font-weight-normal">{title}</h6>
        </div>
      </div>
    </div>
  );
};
DashBoardCard.defaultProps = {
  indicateBox: true,
};
export default DashBoardCard;
