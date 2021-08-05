import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";

import TaxDetails from "../components/TaxDetails";
import SalaryForm from "../components/SalaryForm";
import Calculator from "../components/Calculator";

import { serverPOST } from '../utils/request'
import { payrollEndpoint } from '../utils/endpoints'

const Payroll = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [requestHasError, setRequestHasError] = useState(false);
  const [data, setData] = useState(null);
  const [subData, setSubData] = useState(null);

  const handleFormSubmit = async (request) => {
    if (!request.country || !request.salary || !request.currency) {
      setRequestHasError(true);
    } else {
      setRequestHasError(false);
      setIsLoading(true);
      setSubData(null);


      const res = await serverPOST(payrollEndpoint, request);
      setData(res.data);
    }
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

      <div className="section landing-section" style={{ paddingTop: "0px" }}>
        {requestHasError ? (
          <h4>Please select a country</h4>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <Container>
            <Row>
              <Col>
                {data && (
                  <Calculator data={data} onSelectRow={setSubData} />
                )}
              </Col>

              <Col>
                {subData ? (
                  <TaxDetails data={subData} />
                ) : data ? (
                  <h4>There are no details to show.</h4>
                ) : null}
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

export default Payroll;