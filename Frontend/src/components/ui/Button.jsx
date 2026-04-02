function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ marginBottom: "10px" }}>
      {children}
    </button>
  );
}

export default Button;