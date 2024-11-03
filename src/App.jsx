import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateHeader from "./components/PrivateHeader";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Container from "./components/Container";
import RouterUrl from "./const/Router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RouterUrl.HOME}
          element={
            <PrivateRoute>
              <Container>
                <PrivateHeader>
                  <Home />
                </PrivateHeader>
              </Container>
            </PrivateRoute>
          }
        ></Route>

        <Route
          path={RouterUrl.PROFILE}
          element={
            <PrivateRoute>
              <Container>
                <PrivateHeader>
                  <Profile />
                </PrivateHeader>
              </Container>
            </PrivateRoute>
          }
        ></Route>

        <Route
          path={RouterUrl.LOGIN}
          element={
            <PublicRoute>
              <Container>
                <Login />
              </Container>
            </PublicRoute>
          }
        ></Route>

        <Route
          path={RouterUrl.REGISTER}
          element={
            <PublicRoute>
              <Container>
                <Register />
              </Container>
            </PublicRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
