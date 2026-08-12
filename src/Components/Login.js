import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("button got clicked");
    localStorage.setItem("login", "true");
const item =
            JSON.parse(localStorage.getItem("cartItem"));

        

        navigate("/checkout", {
            state: item
        });
    };
   

  return (
    <div>

      <h1>Login Page</h1>

      <input type="text"
       placeholder="Enter Email" />

      <br /><br />

      <input type="password"
       placeholder="Enter Password" />

      <br /><br />

      <button onClick={handleLogin}
       style={{
    display: "block",
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    marginTop: "20px",
    border: "1px solid black"
  }}

      >
        Login
      </button>

    </div>
  );
}

export default Login;