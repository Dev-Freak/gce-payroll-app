import React, { useState, useEffect } from "react";
import axios from "axios";
import SalaryForm from "./components/SalaryForm";
import PayrollCalculation from "./components/PayrollCalculation";
import TaxDetails from "./components/TaxDetails";

import { Container, Row, Col, Spinner } from "reactstrap";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [subData, setSubData] = useState(null);

  const handleFormSubmit = async (request) => {
    setIsLoading(true);
    setSubData(null);

    const res = await axios.post("http://localhost:3000/api/payroll", request);
    setData(res.data);
  };

  useEffect(() => {
    if (data) setIsLoading(false);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <h5>GCE Payroll Calculator</h5>
      </header>

      <div className="section landing-section">
        <Container>
          <SalaryForm handleSubmit={handleFormSubmit} />
        </Container>
      </div>

      <div className="section landing-section">
        {isLoading ? (
          <Spinner />
        ) : (
          <Container>
            <Row>
              <Col>
                {data && (
                  <PayrollCalculation data={data} onSelectRow={setSubData} />
                )}
              </Col>

              <Col>{subData && <TaxDetails data={subData} />}</Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

export default App;
