import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>存在しないページです</h1>
      <Link to="/timetable">時間割トップへ</Link>
    </div>
  );
};

export default NotFound;
