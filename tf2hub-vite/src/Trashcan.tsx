import { useState } from "react";
import "./Trashcan.scss";
import { TrashcanService } from "./services/trashcan-service";

function Trashcan() {
  const [bindsText, setBindsText] = useState("");
  const [bindKey, setBindKey] = useState("");

  const buildConfig = () => {
    if (!bindsText || bindsText.length === 0) {
      alert("Enter at least one bind before generating.");
      return;
    }

    if (!bindKey) {
      alert("Enter a bind key before generating.");
      return;
    }

    const configFileText = new TrashcanService().build(
      bindsText.split("\n"),
      bindKey
    );

    downloadBlob(
      new Blob([configFileText], { type: "text/plain" }),
      "trashcan.cfg"
    );
  };

  const downloadBlob = (blob: Blob, fileName: string): void => {
    const a = document.createElement("a");
    a.setAttribute("style", "display:none;");
    document.body.appendChild(a);
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.target = "_blank";
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="trashcan">
      <div className="welcome">
        <div className="title">Trashcan Script Generator</div>
        <div
          className="text"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div>
            Use one key to cycle through binds. Simply enter each bind message
            on a new line, set your bind key, and hit generate.
          </div>
        </div>
      </div>

      <div className="settings">
        <div className="card">
          <div className="card-content">
            <textarea
              placeholder="Enter binds here, one per line..."
              rows={10}
              value={bindsText}
              onChange={(e) => setBindsText(e.target.value)}
            ></textarea>
            <input
              type="text"
              maxLength={1}
              placeholder="Bind key"
              value={bindKey}
              onChange={(e) => setBindKey(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button color="primary" onClick={() => buildConfig()}>
        Generate
      </button>
    </div>
  );
}

export default Trashcan;
