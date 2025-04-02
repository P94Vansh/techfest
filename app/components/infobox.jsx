export default function Info({
  theme = "none" || "error" || "alert" || "success",
  text = "Info Box",
  onClose = () => {},
  className=""
}) {
  const createStyle = (display, backgroundColor, color) => ({
    display,
    backgroundColor,
    color,
  });

  let style = {
    display: "",
    backgroundColor: "",
    color: "",
  };

  switch (theme) {
    case "none":
      style = createStyle("none", "", "");
      break;
    case "error":
      style = createStyle("flex", "#722", "");
      break;
    case "alert":
      style = createStyle("flex", "#edff64", "#000");
      break;
    case "suggest":
      style = createStyle("flex", "royalblue", "#fff");
      break;
    case "success":
      style = createStyle("flex", "#228844", "#fff");
      break;
  }
  return (
    <div className={"my-1 flex items-center rounded pr-3 py-2 "+className} style={style}>
      <div className="flex-1 px-4 text-wrap">{text}</div>
      <div className=" text-xs cursor-pointer" onClick={onClose}>
        ❌
      </div>
    </div>
  );
}
