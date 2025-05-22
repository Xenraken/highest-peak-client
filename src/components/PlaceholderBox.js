
function PlaceholderBox() {
  return (
    <div
      style={{
        width: "100%",
        height: "240px",
        backgroundColor: "#ccc",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "transform 0.2s, backgroundColor 0.2s"
      }}
      onClick={() => alert("Will go to videoplay page")}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#bbb")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ccc")}
    />
  );
}

export default PlaceholderBox;