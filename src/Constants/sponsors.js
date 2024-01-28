import a from "../assets/images/sponsors/SBI-Logo-500x281.png";
import b from "../assets/images/sponsors/bsnl.svg";
import c from "../assets/images/sponsors/coca-cola-logo-01.jpg";
import d from "../assets/images/sponsors/selection_101-120x120.png";
import e from "../assets/images/sponsors/logo_2ef487fcede9d3552a96f2cfa12096ec_1x.png";
import f from "../assets/images/sponsors/unstop-logo.svg";
import lic from "../assets/images/sponsors/LIc.png";
import cn from "../assets/images/sponsors/idzratgZ5F.png";
import sg from "../assets/images/sponsors/StockGro logo - Black Font - White Background (1).png";

const sponsors = [
  {
    images: a,
    title: "Title Sponsor",
  },
  {
    imp:1,
    images: b,
    title: "Co-Sponsor",
  },
  {
    images: c,
    title: "Powered By",
  },
  {
    images: d,
    title: "Platinum Sponsor",
  },
  {
    images: lic,
    title: "Diamond Sponsor",
  },
  {
    images: e,
    title: "Gold Sponsor",
  },
  {
    images: f,
    title: "Silver Sponsor",
  },
];

const otherS = [{ images: cn }, { images: sg, imp: "1" }];

export { sponsors, otherS };
