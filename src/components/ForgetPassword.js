import { Card, Form, Button, Alert } from "react-bootstrap";
import { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import "./forget-password.css";
export default function ForgetPassword() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { resetPassword } = useAuth();
  const { t, i18n } = useTranslation();
  const handleSubmit = async (e) => {
    // you should make it first task to work
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox to get new password");
    } catch (error) {
      setError(`Failed to reset password ${error}`);
    }
    setLoading(false);
  };

  return (
    <section className="forget-password">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{t("forget password")}</h2>
          {error && (
            <Alert className="text-center" variant="danger">
              {"* " + error}
            </Alert>
          )}
          {message && <Alert variant={"success"}>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">{t("email")}</Form.Label>
              <Form.Control type="email" id="email" ref={emailRef} />
            </Form.Group>
            <Button
              className="w-100 mt-3"
              variant="primary"
              type="submit"
              disabled={loading}
            >
              {t("reset password")}
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to={"/Login"}>{t("login")}</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ask">
        {t("create an account")}
        <Link to="/signup">{t("sign up")}</Link>
      </div>
    </section>
  );
}
