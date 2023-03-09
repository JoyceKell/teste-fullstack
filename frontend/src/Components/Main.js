import React, { useState } from "react";
import Week from "../Components/Week";
export default function Main() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="App">
      <div>
        <span>Configuração Jornada de Trabalho</span>
        <div>
          <input type="checkbox" checked={isChecked} onChange={handleCheck} />{" "}
          <span>Ativar horário de trabalho</span>
        </div>
      </div>
      <Week />
    </div>
  );
}
