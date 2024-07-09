import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/learn" element={<Learn />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }