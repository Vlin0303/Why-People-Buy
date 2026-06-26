import FrameworksClient from "./FrameworksClient";
import { frameworks } from "@/data/frameworks";

export const metadata = {
  title: "Marketing Frameworks — WPB Lab",
  description: "Classic funnels, brand models, and consumer behavior frameworks illustrated with real cases.",
};

export default function FrameworksPage() {
  return <FrameworksClient frameworks={frameworks} />;
}
