import "./scrollContainer.css";

function ListContainer(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#ECECEC",
        padding: "15px 20px 15px 15px",
        borderRadius: "19pt",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {props.image && (
          <img
            src={props.image}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "19px",
            }}
          />
        )}
        <p style={{ margin: 0, fontSize: "20pt" }}>{props.title}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          className="admin-hover-image"
          style={{
            height: "fit-content",
            backgroundColor: "transparent",
            borderWidth: 0,
            cursor: "pointer",
          }}
          onClick={props.editFunction}
        >
          <img src="/pencil.png" />
        </button>
        <button
          className="admin-hover-image"
          style={{
            height: "fit-content",
            backgroundColor: "transparent",
            borderWidth: 0,
            cursor: "pointer",
          }}
          onClick={props.deleteFunction}
        >
          <img src="/trash.png" />
        </button>
      </div>
    </div>
  );
}

function ScrollContainer(props) {
  return (
    <div
      className="admin-scrollbar"
      style={{ height: "60vh", display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          borderBottom: "1px solid black",
          display: "flex",
          justifyContent: "end",
          marginBottom: 10,
        }}
      >
        <button
          className="admin-hover-image"
          style={{
            backgroundColor: "transparent",
            borderWidth: 0,
            cursor: "pointer",
          }}
          onClick={props.function}
        >
          <img src="/plus.png" />
        </button>
      </div>
      <div className="admin-scroll-container">{props.children}</div>
    </div>
  );
}

export { ScrollContainer, ListContainer };
