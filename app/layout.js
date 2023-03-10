import SideBar from "./components/SideBar/SideBar";
import Display from "./display";
import "./globals.css";

export const metadata = {
  title: "deshiroku",
  description: "un lector de mangas simple y minimalista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Display >{children}</Display>
      </body>
    </html>
  );
}
