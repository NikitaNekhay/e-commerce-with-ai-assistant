
  import { createRoot } from "react-dom/client";
  import { message } from "antd";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Position message toasts in top-left corner
  const msgContainer = document.createElement("div");
  msgContainer.id = "msg-container";
  document.body.appendChild(msgContainer);
  message.config({ getContainer: () => msgContainer, top: 24 });

  createRoot(document.getElementById("root")!).render(<App />);
  