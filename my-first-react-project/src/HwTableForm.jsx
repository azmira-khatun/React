import React from "react";

const HwTableForm = () => {
  return (
    <div>
      <div>
        <div
          style={{
            width: "400px",
            margin: "50px auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#9e248e1c",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <tbody>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Name
                </th>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  please write your name
                </td>
              </tr>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Number
                </td>
              </tr>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Email
                </th>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Email Address
                </td>
              </tr>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Address
                </th>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Write your address
                </td>
              </tr>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  City
                </th>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Dhaka, Khulna, Rajshahi
                </td>
              </tr>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Gender
                </th>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Male, Female, Others
                </td>
              </tr>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Subject
                </th>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  CSS, JAVA, C++
                </td>
              </tr>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Action
                </th>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <button style={{ marginRight: "10px" }}>Save</button>
                  <button>Reset</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HwTableForm;
