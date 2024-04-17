import { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import Header from "../views/header/Header";
import "./signup.css";
export default function Signup() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { t, i18n } = useTranslation();

  const handleSubmit = async (e) => {
    // you should make it first task to work
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match ");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError("Failed to create an account." + error);
    }
    setLoading(false);
  };

  return (
    <section className="signup">
      <Card>
        <Card.Body>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-primary"
          >
            home
          </button>
          <h2 className="text-center mb-4">{t("sign up")}</h2>
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
            <Form.Group>
              <Form.Label htmlFor="password-confirm">
                {t("password confirm")}
              </Form.Label>
              <Form.Control
                type="password"
                id="password-confirm"
                ref={passwordConfirmRef}
              />
            </Form.Group>
            <Button
              className="w-100 mt-3"
              variant="primary"
              type="submit"
              disabled={loading}
            >
              {t("sign up")}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ask">
        {t("aleardy have an account")}
        <Link to="/login">{t("login")}</Link>
      </div>
    </section>
  );
}
