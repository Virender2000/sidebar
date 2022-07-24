import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Dashboard.css";

export const Dashboard = () => {
 
  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />
        <div style={{ height: "100%" }}>
          <div
            style={{
              padding: "20px 5%",
              height: "calc(100% - 64px)",
              overflowY: "scroll",
			  background:"pink"
            }}
          >
            <div className="container flex">
              <div className="row gy-4 gx-2">
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem",borderRadius:"40px" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 col-xxl-4 mb-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/aababcab/image/upload/v1656836641/blog/ssserpnihp2bkyhkyxle.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <center><a href="#" class="btn btn-primary">
                        Go somewhere
                      </a></center>
                    </div>
                  </div>
                </div>
 
                  
              
              </div>
            </div>
			<footer className="mx-auto my-3 text-center">
                <small>&copy; pediaGeek, 2022. All rights reserved.</small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
