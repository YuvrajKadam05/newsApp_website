import React, { useState } from 'react'
import Navbar from "./Components/Navbar";
import News from "./Components/News"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 15;

  const [progress, setProgress] = useState('0')

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} height={4} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} country='in' key='general' category='general' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} country='in' key='business' category='business' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} country='in' key='entertainment' category='entertainment' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/general" element={<News setProgress={setProgress} country='in' key='general' category='general' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} country='in' key='health' category='health' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} country='in' key='science' category='science' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} country='in' key='sports' category='sports' pageSize={pageSize} apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} country='in' key='technology' category='technology' pageSize={pageSize} apiKey={apiKey} />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;