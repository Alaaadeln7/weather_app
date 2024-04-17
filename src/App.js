import { createContext, lazy, Suspense, useEffect, useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Loading from "./components/loading/Loading";
import Dashboard from "./components/Dashboard";
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import Header from "./views/header/Header";
import GoogleMaps from "./components/GoogleMaps";
export const appStore = createContext();
const Home = lazy(() => import("./views/home/Home"));
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));
const UpdateProfile = lazy(() => import("./components/UpdateProfile"));
const ForgetPassword = lazy(() => import("./components/ForgetPassword"));
export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <appStore.Provider value={{ data, setData, setLoading, loading }}>
      <main
        className="app"
        style={{
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div>
            <AuthProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="login"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Login />
                    </Suspense>
                  }
                />
                <Route
                  path="signup"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Signup />
                    </Suspense>
                  }
                />
                <Route
                  path="update-profile"
                  element={
                    <Suspense fallback={<Loading />}>
                      <UpdateProfile />
                    </Suspense>
                  }
                />
                <Route
                  path="/forget-password"
                  element={
                    <Suspense fallback={<Loading />}>
                      <ForgetPassword />
                    </Suspense>
                  }
                />
                <Route
                  path="/dashborad"
                  element={
                    <Suspense fallback={<Loading />}>
                      <RequireAuth>
                        <Dashboard />
                      </RequireAuth>
                    </Suspense>
                  }
                />
                <Route
                  path="/maps"
                  element={
                    <Suspense fallback={<Loading />}>
                      <GoogleMaps />
                    </Suspense>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Dashboard />
                    </Suspense>
                  }
                />
              </Routes>
            </AuthProvider>
          </div>
        </Container>
      </main>
    </appStore.Provider>
  );
}
