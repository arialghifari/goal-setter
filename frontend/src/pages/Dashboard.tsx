import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";
import GoalForm from "../components/GoalForm";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state: RootStateOrAny) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="containers" id="dashboard">
      <section className="heading">
        <h1>Welcome {user && user.name}!</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />
    </div>
  );
}

export default Dashboard;
