import { Data } from "./models/Data";
import "./CardDisplay.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faBook,
  faEarthAmericas,
  faEarthAsia,
  faEarthEurope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faRedditAlien,
  faSteam,
  faTwitch,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function CardDisplay({ data }: { data: Data[] }) {
  const getIcon = (linkText: string): IconDefinition => {
    switch (linkText) {
      case "Website":
        return faGlobe;
      case "Docs":
        return faBook;
      case "Twitter":
        return faXTwitter;
      case "Twitch":
        return faTwitch;
      case "Reddit":
        return faRedditAlien;
      case "YouTube":
        return faYoutube;
      case "Discord":
        return faDiscord;
      case "GitHub":
        return faGithub;
      case "Steam Group":
        return faSteam;
      case "Facebook":
        return faFacebook;
      case "Instagram":
        return faInstagram;
      case "NA Website":
        return faEarthAmericas;
      case "EU Website":
        return faEarthEurope;
      case "SEA Website":
        return faEarthAsia;
      default:
        return faGlobe;
    }
  };

  const iconTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div className="grid-container">
      {data.map((item, i) => (
        <div className="grid-item" key={i}>
          <div className="card">
            <div className="card-content">
              <div className="header">
                <div className="top">
                  <div className="title">{item.title}</div>
                  <div className="subtitle">{item.subtitle}</div>
                </div>
                {item.url && <div className="subtitle">{item.url}</div>}
              </div>
              <div
                className="text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {item.description.map((descriptionLine) => descriptionLine)}
              </div>
              <div className="links">
                <ThemeProvider theme={iconTheme}>
                  {item.links.map((link, i) => (
                    <a href={link.href} target="_blank" key={i}>
                      <Button variant="text">
                        <FontAwesomeIcon icon={getIcon(link.text)} size="lg" />
                      </Button>
                    </a>
                  ))}
                </ThemeProvider>
              </div>
              {item.img && (
                <div className="image">
                  <a href={item.links[0].href} target="_blank">
                    <img src={item.img.src} alt={item.title} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDisplay;
