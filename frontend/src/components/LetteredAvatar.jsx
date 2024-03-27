export default function LetteredAvatar({ name }) {
  function getInitials(name) {
    return name[0];
  }

  let initials = getInitials(name);
  const customStyle = {
    display: "flex",
    height: "35px",
    width: "35px",
    borderRadius: "100px",
    color: "#581845 ",
    background: "#EDEADE",
    margin: "auto",
  };
  return (
    <div style={customStyle}>
      <span style={{ margin: "auto" }}> {initials} </span>
    </div>
  );
}
