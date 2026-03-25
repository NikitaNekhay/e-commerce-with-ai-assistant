// точка входа приложения
// рендерим App в root, настраиваем контейнер для antd-уведомлений (правый верхний угол)

  import { createRoot } from "react-dom/client";
  import { message } from "antd";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // кастомный контейнер чтобы message-тосты были не по центру а справа сверху
  const msgContainer = document.createElement("div");
  msgContainer.id = "msg-container";
  document.body.appendChild(msgContainer);
  message.config({ getContainer: () => msgContainer, top: 24 });

  createRoot(document.getElementById("root")!).render(<App />);
  