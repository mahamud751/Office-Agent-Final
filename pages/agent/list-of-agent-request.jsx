import React from "react";
import useScript from "../../commonFunction/ReloadJs";
const ListOfAgentRequest = () => {
  useScript("/assets/js/app.js");
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of agent request</h1>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <nav>
                <ol className="breadcrumb p-0 m-b-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="ti ti-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">Tables</li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">
                    List of agent request
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="datatable-wrapper table-responsive">
                <table id="datatable" className="display compact table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Details</th>
                      <th>Join date</th>
                      <th>Edit</th>
                      <th>Approve</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Picture</td>
                      <td>Amir hamza</td>
                      <td>57684576</td>
                      <td>test@gmail.com</td>
                      <td>
                        <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                          Agent details
                        </a>
                      </td>
                      <td>24/10/2021</td>
                      <td>
                        <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                          Edit
                        </a>
                      </td>
                      <td>
                        <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                          Approve
                        </a>
                      </td>
                      <td>
                        <a href="javascript:void(0);" className="btn btn-block btn-square btn-outline-danger">
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfAgentRequest;
