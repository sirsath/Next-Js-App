import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function _Crud() {
  const [infoData, setinfoData] = useState({
    name: "shubham",
    email: "shubham@gmail.com",
    number: "7028282788",
  });

  const handelSubmit = async () => {
    const { data } = await axios.post("http://localhost:5000/info", infoData);
    console.log(data);
  }
  return (
    <>
      <div class="container mt-5">
        <h1 className="text-center m-5">Next-js Crud Application</h1>
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-body">
                <div>
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    value={infoData.name}
                    onChange={(e) =>
                      setinfoData({ ...infoData, name: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mt-2">
                  <label for="name" class="form-label">
                    Email
                  </label>
                  <input
                    value={infoData.email}
                    onChange={(e) =>
                      setinfoData({ ...infoData, email: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mt-2">
                  <label for="name" class="form-label">
                    Number
                  </label>
                  <input
                    value={infoData.number}
                    onChange={(e) =>
                      setinfoData({ ...infoData, number: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handelSubmit}
                class="btn btn-outline-danger"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
