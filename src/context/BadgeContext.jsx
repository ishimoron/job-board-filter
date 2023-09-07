// import инструкции
import React, { createContext, useContext, useState } from "react";

// Создайте контекст
const BadgeContext = createContext();

export function useBadge() {
  return useContext(BadgeContext);
}

// Создайте компонент провайдера контекста
export function BadgeProvider({ children }) {
  const [badge, setBadge] = useState([]);

  return (
    <BadgeContext.Provider value={{ badge, setBadge }}>
      {children}
    </BadgeContext.Provider>
  );
}

// export инструкции
export default BadgeProvider;
