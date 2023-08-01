import Logo from "./img/logo.png";
import Scratches from "./img/scratches.png";
import ScratchesMobile from "./img/scratches_mobile.png";
import DiscordButton from "./img/discord_button.png";
import DiscordLogo from "./img/discord_logo.png";
import SolanaLogo from "./img/solana_logo.png";
import Smoke from "./img/smoke2x.png";
import ButtonTexture from "./img/button.png";
import MenuButton from "./img/menu2.png";
import CloseButton from "./img/close2.png";
import SmokeMobile from "./img/smoke_mobile.png";

const preload = async () => {
  const imgs = [
    Logo,
    Scratches,
    ScratchesMobile,
    DiscordButton,
    DiscordLogo,
    SolanaLogo,
    ButtonTexture,
    Smoke,
    MenuButton,
    CloseButton,
    SmokeMobile,
  ];

  const loaded = await cacheImages(imgs);

  return loaded;
};

const cacheImages = async (srcArray) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (res, rej) {
      const img = new Image();

      img.src = src;
      img.onloadeddata = res();
      img.onerror = rej();
    });
  });

  await Promise.all(promises);

  return true;
};

export default preload;
