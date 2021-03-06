import React from "react";
import "../assets/css/index.css";
import Register from "./auth/Register";
import undraw from "../assets/img/undraw.svg";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter ">
          <div id="Hello-there">Register Here</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Register />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="close">X</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Index = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div class="flex-box">
      <p class="text-post">Sa, Buy Now!</p>
      <div class="child-1">
        <img src={undraw} alt="undraw" className="child-1-svg" />
      </div>
      <div class="child-2">
        <svg
          width="78"
          height="79"
          viewBox="0 0 78 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.5 58.8508C59.668 56.507 60.9502 54.0612 62.3467 51.5136C63.7432 48.9659 64.7588 47.1061 65.3936 45.9342C66.0283 44.7622 66.5742 43.603 67.0312 42.4566C67.4883 41.3101 67.7168 40.3293 67.7168 39.514C67.7168 36.8645 67.2217 34.597 66.2314 32.7118C65.2412 30.8265 64.0352 29.8838 62.6133 29.8838C52.6094 29.8838 43.4688 29.2724 35.1914 28.0495C22.1914 26.1642 12.4922 21.9351 6.09375 15.3621C5.02734 14.1392 4.31641 13.273 3.96094 12.7635C3.60547 12.254 3.09766 11.4005 2.4375 10.2031C1.77734 9.00569 1.28223 7.62995 0.952148 6.07587C0.62207 4.5218 0.304688 2.54735 0 0.152542C0.609375 1.834 1.23145 3.32439 1.86621 4.6237C2.50098 5.92301 3.05957 6.94208 3.54199 7.68091C4.02441 8.41973 4.62109 9.12034 5.33203 9.78273C6.04297 10.4451 6.56348 10.9037 6.89355 11.1585C7.22363 11.4132 7.76953 11.7444 8.53125 12.1521C9.29297 12.5597 9.77539 12.8399 9.97852 12.9928C17.1387 17.4767 36.5625 19.7186 68.25 19.7186C70.7383 19.7186 72.9854 20.7505 74.9912 22.8141C76.9971 24.8777 78 27.2343 78 29.8838C78 31.4124 77.7715 32.9665 77.3145 34.5461C76.8574 36.1256 76.0957 37.7816 75.0293 39.514C73.9629 41.2464 72.9473 42.7878 71.9824 44.1381C71.0176 45.4883 69.6211 47.157 67.793 49.1442C65.9648 51.1314 64.5049 52.6982 63.4131 53.8447C62.3213 54.9911 60.6836 56.6599 58.5 58.8508ZM21.9375 63.7424C23.9688 63.7424 25.6953 64.4557 27.1172 65.8824C28.5391 67.3091 29.25 69.0415 29.25 71.0797C29.25 73.1178 28.5391 74.8502 27.1172 76.2769C25.6953 77.7036 23.9688 78.4169 21.9375 78.4169C19.9062 78.4169 18.1797 77.7036 16.7578 76.2769C15.3359 74.8502 14.625 73.1178 14.625 71.0797C14.625 69.0415 15.3359 67.3091 16.7578 65.8824C18.1797 64.4557 19.9062 63.7424 21.9375 63.7424ZM51.1875 63.7424C53.2188 63.7424 54.9453 64.4557 56.3672 65.8824C57.7891 67.3091 58.5 69.0415 58.5 71.0797C58.5 73.1178 57.7891 74.8502 56.3672 76.2769C54.9453 77.7036 53.2188 78.4169 51.1875 78.4169C49.1562 78.4169 47.4297 77.7036 46.0078 76.2769C44.5859 74.8502 43.875 73.1178 43.875 71.0797C43.875 69.0415 44.5859 67.3091 46.0078 65.8824C47.4297 64.4557 49.1562 63.7424 51.1875 63.7424Z"
            fill="black"
            fill-opacity="0.5"
          />
        </svg>
      </div>
      <div class="child-3">
        <input
          type="button"
          value="Sign-Up"
          id="child-3-1"
          onClick={() => setModalShow(true)}
        />

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <h3 class="child-3-text-or">or</h3>
        <input type="button" value="Continue with Google " id="child-3-2" />

        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M3.94949 7.67852C4.30041 6.6832 4.97764 5.81721 5.88458 5.20408C6.79152 4.59094 7.88184 4.26199 8.99999 4.26414C10.2675 4.26414 11.4135 4.68602 12.3135 5.37648L14.9325 2.92187C13.3365 1.61758 11.2912 0.8125 8.99999 0.8125C5.45249 0.8125 2.39849 2.70953 0.929993 5.48828L3.94949 7.67852Z"
              fill="#EA4335"
            />
            <path
              d="M12.03 13.4779C11.2125 13.9722 10.1745 14.2359 8.99998 14.2359C7.88629 14.238 6.80009 13.9117 5.89516 13.3031C4.99024 12.6945 4.31244 11.8344 3.95773 10.8447L0.927734 13.0012C1.67117 14.4119 2.82169 15.5988 4.2486 16.4272C5.67552 17.2556 7.32164 17.6922 8.99998 17.6875C11.1997 17.6875 13.3012 16.9542 14.8755 15.5781L12.0307 13.4779H12.03Z"
              fill="#34A853"
            />
            <path
              d="M14.8755 15.5781C16.5217 14.1381 17.5905 11.995 17.5905 9.25001C17.5905 8.75079 17.5087 8.21431 17.3865 7.71579H9V10.9762H13.827C13.5893 12.0724 12.9495 12.921 12.0307 13.4779L14.8755 15.5781Z"
              fill="#4A90E2"
            />
            <path
              d="M3.95778 10.8447C3.77429 10.3306 3.68108 9.79207 3.68178 9.25C3.68178 8.70016 3.77553 8.17211 3.94953 7.67852L0.930026 5.48828C0.31231 6.65736 -0.00612099 7.94536 2.63057e-05 9.25C2.63058e-05 10.6 0.333776 11.8727 0.927776 13.0012L3.95778 10.8447Z"
              fill="#FBBC05"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect y="0.8125" width="18" height="16.875" rx="5" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span class="al-acc">
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default Index;
