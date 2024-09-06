import Notification from "./Notification";
import UserProfile from "./UserProfile";

export default function Header() {

  return (
    <header className="z-50 flex items-center justify-between bg-white px-8 py-4 mb-3 sticky top-0">
      <h1>Header</h1>

      <div className="flex items-center space-x-4">
        <Notification />
        <UserProfile />
      </div>
    </header>
  );
}
