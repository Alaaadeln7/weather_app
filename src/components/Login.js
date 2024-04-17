import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./login.css";
export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { t, i18n } = useTranslation();
  const redirectPath = location.state?.path || "/";
  const handleSubmit = async (e) => {
    // you should make it first task to work
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      setError(`Failed to log in. ${error}`);
    }
    setLoading(false);
  };

  return (
    <section className="login">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{t("login")}</h2>
          {error && (
            <Alert className="text-center" variant="danger">
              {"* " + error}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">{t("email")}</Form.Label>
              <Form.Control type="email" id="email" ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">{t("password")}</Form.Label>
              <Form.Control type="password" id="password" ref={passwordRef} />
            </Form.Group>
            <Button
              className="w-100 mt-3"
              variant="primary"
              type="submit"
              disabled={loading}
            >
              {t("login")}
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to={"/forget-password"}>{t("forget password")}</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ask">
        {t("create an account") + " ? "}
        <Link to="/signup">{t("sign up")}</Link>
      </div>
    </section>
  );
}
