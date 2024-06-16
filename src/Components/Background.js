import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function Background() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top right",
          }}
          src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg"
          alt="Background"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Card
          style={{
            width: "800px",
            minHeight: "450px",
            marginBottom: "50px",
            // backgroundColor: "#DEEED6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            zIndex: 1,
          }}
          className="text-black"
        >
          <div style={{ textAlign: "center" }}>
            <Card.Text
              style={{
                fontSize: "2.5em",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Order groceries for delivery <br /> or pickup today
            </Card.Text>
            <Card.Text style={{ fontSize: "1.5em", marginBottom: "30px" }}>
              Whatever you want from local stores, brought right to your door.
            </Card.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="   Enter your address"
                  style={{
                    fontSize: "1em",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid black",
                  }}
                />
              </Form.Group>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Background;
