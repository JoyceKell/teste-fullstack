import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { FormatBold, FormatItalic } from "@mui/icons-material";

const daysOfWeek = [
  { label: "D", value: "domingo" },
  { label: "S", value: "segunda" },
  { label: "T", value: "terça" },
  { label: "Q", value: "quarta" },
  { label: "Q", value: "quinta" },
  { label: "S", value: "sexta" },
  { label: "S", value: "sábado" },
];

export default function Week() {
  const [selectedDays, setSelectedDays] = React.useState([]);

  const handleDaySelect = (event, newDays) => {
    setSelectedDays(newDays);
  };

  const renderInputs = (dayValue) => {
    if (!selectedDays.includes(dayValue)) {
      return null;
    }
    return (
      <>
        <div>
          <label>Entrada:</label>
          <input type="time" />
        </div>
        <div>
          <label>Saída:</label>
          <input type="time" />
        </div>
      </>
    );
  };

  return (
    <>
      <ToggleButtonGroup value={selectedDays} onChange={handleDaySelect}>
        {daysOfWeek.map((day, index) => (
          <ToggleButton key={`${day.value}-${index}`} value={day.value}>
            {day.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {selectedDays.map((dayValue) => (
        <div key={dayValue}>
          <h3>{dayValue}</h3>
          {renderInputs(dayValue)}
        </div>
      ))}
    </>
  );
}
