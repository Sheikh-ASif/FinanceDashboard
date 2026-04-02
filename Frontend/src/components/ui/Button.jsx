function Button({ children, onClick, variant = "primary", fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant} ${fullWidth ? "full" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;