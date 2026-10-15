import { useState } from "react";
import "../../css/texts/Dropdown.css";

interface DropdownProps {
  text: string;
  color: string;
  content: string;
}

export default function Dropdown({
  text,
  color,
  content,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button
        className="dropdown-header"
        style={{ backgroundColor: color, backgroundImage: `linear-gradient(to bottom, ${color}, color-mix(in srgb, ${color} 90%, white))` }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>{text}</span>
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>

      <div className={`dropdown-content ${isOpen ? "expanded" : ""}`}>
        <div className="dropdown-card">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
