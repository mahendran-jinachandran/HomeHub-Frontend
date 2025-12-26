import { useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";
import Button from "./shared/Button";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        buttonType="primary"
        buttonText="Log Out"
        buttonClickCallBack={() => dispatch(logout())}
        navigateRoute="/login"
      />
    </div>
  );
};

export default Dashboard;
