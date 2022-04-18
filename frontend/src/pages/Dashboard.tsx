import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state: RootStateOrAny) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return <div className="containers">Dashboard</div>;
}

export default Dashboard;
