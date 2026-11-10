// Inhalte der EcoCharge-Projektansicht.
import cover from "../../assets/images/ecocharge/cover.webp";
import smartcarConnect from "../../assets/images/ecocharge/smartcar_connect.png";
import vehicleSelection from "../../assets/images/ecocharge/vehicle_selection.png";
import chargingPlan from "../../assets/images/ecocharge/charging_plan1.png";
import chargingPlan2 from "../../assets/images/ecocharge/charging_plan2.png";
import settings from "../../assets/images/ecocharge/settings.png";
import permission1 from "../../assets/images/ecocharge/allow_notallow1.png";
import permission2 from "../../assets/images/ecocharge/allow_notallow2.png";

export { cover as ecochargeCover };

export const ecochargeTools = ["PHP", "MySQL", "Smartcar", "Open-Meteo", "EKZ API", "PWA"];

export const ecochargeScreens = [
  {
    title: "Titelblatt",
    heading: "Smart EV Charging",
    images: [cover],
    text: "EcoCharge ist eine webbasierte Anwendung, die Nutzer von Elektrofahrzeugen dabei unterstützt, den idealen Ladezeitpunkt zu bestimmen. Dabei werden sowohl die persönlichen Anforderungen an den Ladevorgang als auch die verfügbaren Lademöglichkeiten und die Nutzung von Solarenergie berücksichtigt.",
  },
  {
    title: "Ladeplan",
    images: [chargingPlan, chargingPlan2],
    text: "Der Ladeplan bietet dem Nutzer eine Übersicht darüber, wann das Elektrofahrzeug idealerweise geladen werden sollte. Zusätzlich werden weitere mögliche Ladezeiten angezeigt. Die vorgeschlagenen Zeitpunkte werden anhand der individuellen Ladeeinstellungen und der verfügbaren Energieinformationen ermittelt.",
  },
  {
    title: "API Anbindung",
    images: [permission1, permission2, smartcarConnect],
    text: "Über Smartcar verbindet EcoCharge das Fahrzeug mit der App.",
  },
  {
    title: "Fahrzeug",
    images: [vehicleSelection],
    text: "Das ausgewählte Fahrzeug liefert den Batteriestand für die Ladeplanung.",
  },
  {
    title: "Einstellungen",
    images: [settings],
    text: "Im Einstellungsbereich lassen sich verschiedene Angaben individuell anpassen. Dazu gehören beispielsweise die gewünschten Ladebedingungen, die technischen Eigenschaften der Ladestation, Informationen zur Solaranlage sowie die Daten des Elektrofahrzeugs.",
  },
];
