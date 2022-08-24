import banner from "../assets/banner.png";
import { PerfilData } from "./PerfilData";

export function Content() {
  return (
    <div>
      <div className="w-full px-5 ml-3">
        <div className="mr-10">
          <img className="w-full" src={banner} alt="banner" />
        </div>
      </div>
      <PerfilData />
    </div>
  );
}
