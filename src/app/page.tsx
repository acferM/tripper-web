import { CreateNewTripCard } from "./components/create-new-trip-card";
import { NextTripCard } from "./components/next-trip-card";
import { YourTripsCard } from "./components/your-trips-card";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6 h-screen p-6">
      <YourTripsCard />

      <NextTripCard />

      <CreateNewTripCard />
    </div>
  );
}
