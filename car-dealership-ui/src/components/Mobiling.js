// import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Mobiling() {
  return (
    <div className="mobiling-section">
      <Row style={{ margin: "0px 0px 20px 0px" }}>
        <Col>
          <span className="mobiling-title">Mobiling Social</span>
        </Col>
      </Row>
      <Row style={{ margin: "0px 0px 20px 0px" }}>
        <Col>
          <div
            style={{
              background: "linear-gradient(0deg,#292a2b,#545454, #b6bbc3)",
              borderRadius: "30px",
              textAlign: "justify",
              color: "white",
            }}
          >
            <Stack >
              <div
             
                style={{
                  margin: "40px",
                  padding: "80px 10px 10px 10px ",
                  border: "2px dashed white",
                }}
              >
                <div className="px-2">
                  <h2>Information on data processing</h2>
                </div>
                <div className="px-2">
                  <p style={{fontSize: "14px"}}>
                    On our website we provide content from Storystream. To view
                    this content, you must agree to the data processing by
                    storystream.
                  </p>
                </div>
                <div className="px-2 pb-4 d-flex">
                  <Button className="mobiling-btn me-4 p-2">
                    <FontAwesomeIcon icon={faChevronRight} className="me-3"/>
                    <span>Agree</span>
                  </Button>{" "}
                  <Button className="mobiling-btn p-2">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <span>Information on data privacy</span>
                  </Button>
                </div>
              </div>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Mobiling;