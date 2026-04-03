import { useState } from "react";
import { useAppContext } from "../context/AppContext";

function Login() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAppContext();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { firstName, lastName, email } = form;

    if (!firstName || !lastName || !email) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // fake delay (real apps feel)
    setTimeout(() => {
      login({ firstName, lastName, email });
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Login to your Finance Dashboard</p>

        <div style={styles.form}>
          
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            onFocus={() => setFocused("firstName")}
            onBlur={() => setFocused("")}
            style={{
              ...styles.input,
              ...(focused === "firstName" && styles.inputFocus),
            }}
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            onFocus={() => setFocused("lastName")}
            onBlur={() => setFocused("")}
            style={{
              ...styles.input,
              ...(focused === "lastName" && styles.inputFocus),
            }}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            style={{
              ...styles.input,
              ...(focused === "email" && styles.inputFocus),
            }}
          />

          {/* Button */}
          <button
            onClick={handleLogin}
            style={{
              ...styles.button,
              ...(loading && styles.buttonDisabled),
            }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "🚀 Login"}
          </button>

        </div>

        {/* Small footer */}
        <p style={styles.footer}>
          Secure • Fast • Simple
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "Inter, system-ui, sans-serif",
  },

  card: {
    background: "#1e293b",
    padding: "34px",
    borderRadius: "14px",
    width: "360px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  title: {
    color: "#fff",
    marginBottom: "6px",
    fontSize: "22px",
    fontWeight: "600",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "22px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  input: {
    padding: "11px",
    borderRadius: "8px",
    border: "1px solid transparent",
    outline: "none",
    fontSize: "14px",
    background: "#0f172a",
    color: "#fff",
    transition: "all 0.2s ease",
  },

  inputFocus: {
    border: "1px solid #7c3aed",
    boxShadow: "0 0 0 2px rgba(124,58,237,0.2)",
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(45deg, #7c3aed, #9333ea)",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    transition: "all 0.2s ease",
  },

  buttonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  footer: {
    marginTop: "18px",
    fontSize: "12px",
    color: "#64748b",
  },
};

export default Login;