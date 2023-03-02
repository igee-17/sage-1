import React, { useState } from "react";

const ResponseTimeOptions = [
  { label: "Within 1 hour", value: "1hour" },
  { label: "1-10 hours", value: "10hours" },
  { label: "24 hours", value: "24hours" },
  { label: "Less than 24 hours", value: "less24hours" },
  { label: "Less than 1 week", value: "less1week" },
];

const MotivationOptions = [
  { label: "Convenience", value: "convenience" },
  { label: "Quality of services", value: "quality" },
  { label: "Timely results", value: "timely" },
  { label: "Wide range of tests", value: "wideRange" },
  { label: "SAGE DIAGNOSTICS brand", value: "brand" },
  { label: "Electronic Reporting", value: "reporting" },
  { label: "Cost Effectiveness", value: "cost" },
  { label: "Good relationship with SAGE DIAGNOSTICS", value: "relationship" },
];

function FeedbackForm() {
  const [doctorName, setDoctorName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [knowSageDiagnostics, setKnowSageDiagnostics] = useState(null);
  const [sageDiagnosticsUsage, setSageDiagnosticsUsage] = useState(null);
  const [responseTime, setResponseTime] = useState("");
  const [motivation, setMotivation] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [helpdesk, setHelpdesk] = useState("");
  const [quality, setQuality] = useState("");
  const [turnaround, setTurnaround] = useState("");
  const [dispatch, setDispatch] = useState("");
  const [awareness, setAwareness] = useState("");
  const [mediaPresence, setMediaPresence] = useState("");
  const [testPrices, setTestPrices] = useState("");
  const [responseTime2, setResponseTime2] = useState("");
  const [testRange, setTestRange] = useState("");
  const [meetingFrequency, setMeetingFrequency] = useState("");
  const [hadIssues, setHadIssues] = useState(false);
  const [responseQuality, setResponseQuality] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleMeetingFrequencyChange = (e) => {
    setMeetingFrequency(e.target.value);
  };

  const handleHadIssuesChange = (e) => {
    setHadIssues(e.target.value === "YES");
  };

  const handleResponseQualityChange = (e) => {
    setResponseQuality(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSageDiagnosticsUsageChange = (event) => {
    setSageDiagnosticsUsage(event.target.value);
  };

  const handleKnowSageDiagnosticsChange = (event) => {
    setKnowSageDiagnostics(event.target.value);
  };

  const handleMotivationChange = (e) => {
    const selectedMotivations = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setMotivation(selectedMotivations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the server or perform other actions
    console.log({ doctorName, contactNumber, address, email });
  };

  return (
    <form className="feedback" onSubmit={handleSubmit}>
      <h2 className="heading">Feedback Form</h2>
      <p className="heading-text">
        Thank you for your support and patronage. <br />
        <br />
        In order to improve our services we are conducting a survey therefore we
        humbly request you to provide your valuable feedback on our services and
        help us to fill this Feedback Report. Your time and feedback is greatly
        appreciated.
      </p>
      <div className="content">
        <div className="top">
          <div className="item">
            <input
              type="text"
              name="doctor"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
            <label>Doctor Name</label>
          </div>
          <div className="item">
            <input
              type="number"
              name="phone"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <label>Contact Number</label>
          </div>
          <div className="item">
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label>Address</label>
          </div>
          <div className="item">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
        </div>
        <hr />

        <div className="laboratories">
          <label>Do you know about SAGE DIAGNOSTICS Laboratories?</label>
          <div className="item">
            <input
              type="radio"
              name="knowSageDiagnostics"
              value="Very Well"
              checked={knowSageDiagnostics === "Very Well"}
              onChange={handleKnowSageDiagnosticsChange}
            />
            <span>Very Well</span>
          </div>

          <div className="item">
            <input
              type="radio"
              name="knowSageDiagnostics"
              value="Somewhat"
              checked={knowSageDiagnostics === "Somewhat"}
              onChange={handleKnowSageDiagnosticsChange}
            />
            <span>Somewhat</span>
          </div>

          <div className="item">
            <input
              type="radio"
              name="knowSageDiagnostics"
              value="Not at all"
              checked={knowSageDiagnostics === "Not at all"}
              onChange={handleKnowSageDiagnosticsChange}
            />
            <span>Not at all</span>
          </div>
        </div>

        {knowSageDiagnostics === "Very Well" ||
        knowSageDiagnostics === "Somewhat" ? (
          <div className="diagnostics">
            <label className="label">
              How long have you used SAGE DIAGNOSTICS?
            </label>

            <select
              value={sageDiagnosticsUsage}
              onChange={handleSageDiagnosticsUsageChange}
            >
              <option value="">Select an option</option>
              <option value="Less than 6 months">Less than 6 months</option>
              <option value="Less than a year">Less than a year</option>
              <option value="More than a year">More than a year</option>
              <option value="2 years and above">2 years and above</option>
            </select>
          </div>
        ) : null}
        <hr />

        {/* HOW QUICKLY */}
        <div className="quickly">
          <label className="label">How quickly we respond to you:</label>
          <select
            value={responseTime}
            onChange={(e) => setResponseTime(e.target.value)}
          >
            <option value="">Select an option</option>
            {ResponseTimeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <hr />

        {/* MOTIVATES */}
        <div className="motivates">
          <label className="label">
            What motivates you to use SAGE DIAGNOSTICS:
          </label>
          {/* <select
                  //   multiple
                  value={motivation}
                  onChange={handleMotivationChange}
                > */}
          <div className="options">
            {MotivationOptions.map((option) => (
              <div className="item">
                <input
                  type="checkbox"
                  name={option.label}
                  id={option.label}
                  value={option.value}
                />
                <span>{option.label}</span>
              </div>
            ))}
          </div>
          {/* </select> */}
        </div>
        <hr />

        {/* PREFERRED MEDIUM */}
        <div className="result">
          <label className="label">
            Your preferred medium of Test Result Alert:{" "}
          </label>
          <div className="options">
            <div className="item">
              <input
                type="radio"
                value="Web Application"
                checked={selectedOption === "Web Application"}
                onChange={handleOptionChange}
              />
              <span>Web Application</span>
            </div>
            <div className="item">
              <input
                type="radio"
                value="E-Mail"
                checked={selectedOption === "E-Mail"}
                onChange={handleOptionChange}
              />
              <span>E-Mail</span>
            </div>
            <div className="item">
              <input
                type="radio"
                value="Telephone Call"
                checked={selectedOption === "Telephone Call"}
                onChange={handleOptionChange}
              />
              <span>Telephone Call</span>
            </div>
            <div className="item">
              <input
                type="radio"
                value="SMS"
                checked={selectedOption === "SMS"}
                onChange={handleOptionChange}
              />
              <span>SMS</span>
            </div>
            <div className="item">
              <input
                type="radio"
                value="Hardcopy delivery"
                checked={selectedOption === "Hardcopy delivery"}
                onChange={handleOptionChange}
              />
              <span>Hardcopy delivery</span>
            </div>
          </div>
        </div>
        <hr />

        {/* OPINION */}
        <div className="opinion">
          <label className="label">
            Please provide your Opinion of how we fare with following services:{" "}
          </label>
          <div className="opinion-options">
            <div className="item">
              <select
                id="helpdesk"
                value={helpdesk}
                onChange={(e) => setHelpdesk(e.target.value)}
              >
                <option value="">Please select</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
              <label htmlFor="helpdesk">Helpdesk services</label>
            </div>

            <div className="item">
              <select
                id="quality"
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
              >
                <option value="">Please select</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
              <label htmlFor="quality">Quality of test results</label>
            </div>

            <div className="item">
              <select
                id="turnaround"
                value={turnaround}
                onChange={(e) => setTurnaround(e.target.value)}
              >
                <option value="">Please select</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
              <label htmlFor="turnaround">Turn-Around time of tests</label>
            </div>

            <div className="item">
              <select
                id="dispatch"
                value={dispatch}
                onChange={(e) => setDispatch(e.target.value)}
              >
                <option value="">Please select</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
              <label htmlFor="dispatch">
                Dispatch services/Sample Pick up services
              </label>
            </div>

            <div className="item">
              <select
                id="awareness"
                value={awareness}
                onChange={(e) => setAwareness(e.target.value)}
              >
                <option value="">Please select</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
              <label htmlFor="awareness">
                Awareness about SAGE DIAGNOSTICS
              </label>
            </div>
            <div className="item">
              <select
                id="mediaPresence"
                value={mediaPresence}
                onChange={(event) => setMediaPresence(event.target.value)}
              >
                <option value="">--Please choose an option--</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
              <label htmlFor="mediaPresence">
                Media Presence (Social Media Handles)
              </label>
            </div>
            <div className="item">
              <select
                id="testPrices"
                value={testPrices}
                onChange={(event) => setTestPrices(event.target.value)}
              >
                <option value="">--Please choose an option--</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
              <label htmlFor="testPrices">Prices of Tests</label>
            </div>
            <div className="item">
              <select
                id="responseTime"
                value={responseTime2}
                onChange={(event) => setResponseTime2(event.target.value)}
              >
                <option value="">--Please choose an option--</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
              <label htmlFor="responseTime">
                Complaint/Query Response Time
              </label>
            </div>
            <div className="item">
              <select
                id="testRange"
                value={testRange}
                onChange={(event) => setTestRange(event.target.value)}
              >
                <option value="">--Please choose an option--</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
              <label htmlFor="testRange">Test Range</label>
            </div>
            <div className="item">
              <select
                value={meetingFrequency}
                onChange={handleMeetingFrequencyChange}
              >
                <option value="">Select frequency</option>
                <option value="Once in a week">Once in a week</option>
                <option value="Twice in a month">Twice in a month</option>
                <option value="Once in a month">Once in a month</option>
                <option value="on call only">On call only</option>
              </select>
              <label>How frequently our team meets you:</label>
            </div>
          </div>
        </div>
        <hr />
        {/* REST */}
        <div className="issue">
          <label>Did you ever had issues/problems with our services?</label>
          <div>
            <input
              type="radio"
              name="hadIssues"
              value="YES"
              onChange={handleHadIssuesChange}
            />
            <span>Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="hadIssues"
              value="NO"
              onChange={handleHadIssuesChange}
            />
            <span>No</span>
          </div>
        </div>
        {hadIssues && (
          <div className="response">
            <label>How was the response from SAGE DIAGNOSTICS?</label>
            <select
              value={responseQuality}
              onChange={handleResponseQualityChange}
            >
              <option value="">Select response quality</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
        )}
        <hr />

        <div className="patronage">
          <label>
            What can SAGE DIAGNOSTICS do to increase patronage from yourself?
          </label>
          <textarea value={feedback} onChange={handleFeedbackChange} />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
