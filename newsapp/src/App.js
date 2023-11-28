import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const pageSizeOfItems=15;
  const apiKey=process.env.REACT_APP_NEWS_API_KEY;
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={<News apiKey={apiKey} key="general" pageSize={pageSizeOfItems} country="us" category="general" />}
            />
            <Route
              path="/business"
              exact
              element={<News apiKey={apiKey} key="business"  pageSize={pageSizeOfItems} country="us" category="business" />}
            />
            <Route
              path="/entertainment"
              exact
              element={<News apiKey={apiKey} key="entertainment"  pageSize={pageSizeOfItems} country="us" category="entertainment" />}
            />
            <Route
              path="/general"
              exact
              element={<News apiKey={apiKey} key="general"  pageSize={pageSizeOfItems} country="us" category="general" />}
            />
            <Route
              path="/health"
              exact
              element={<News apiKey={apiKey} key="health"  pageSize={pageSizeOfItems} country="us" category="health" />}
            />
            <Route
              path="/science"
              exact
              element={<News apiKey={apiKey} key="science"  pageSize={pageSizeOfItems} country="us" category="science" />}
            />
            <Route
              path="/sports"
              exact
              element={<News apiKey={apiKey} key="sports"  pageSize={pageSizeOfItems} country="us" category="sports" />}
            />
            <Route
              path="/technology"
              exact
              element={<News apiKey={apiKey} key="technology"  pageSize={pageSizeOfItems} country="us" category="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
