import { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function UpdateProfile() {
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSubmit = async (e) => {
    // you should make it first task to work
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match ");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value != currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to update account" + error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{t("update profile")}</h2>
          {error && (
            <Alert className="text-center" variant="danger">
              {"* " + error}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">{t("email")}</Form.Label>
              <Form.Control
                type="email"
                id="email"
                ref={emailRef}
                defaultValue={currentUser?.email}
                required
              />
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
              {t("update")}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to={"/"}>{t("cancel")}</Link>
      </div>
    </>
  );
}
