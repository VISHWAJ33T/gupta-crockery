"use client";
import { UserAuth } from "../../app/context/AuthContext";

export default function RootLayout({ children }) {
  const { user, Admins } = UserAuth();
  return (
    <div className="relative">
      {user && Admins && Admins.includes(user.email) ? (
        children
      ) : (
        <img
          width="100%"
          height="100%"
          src="https://png.pngtree.com/png-clipart/20230806/original/pngtree-access-denied-vintage-metallic-sign-panel-no-fashioned-vector-picture-image_9950167.png"
        />
      )}
    </div>
  );
}
