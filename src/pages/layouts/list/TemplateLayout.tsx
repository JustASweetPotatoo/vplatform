import type { Layout, LayoutData } from "../interface";

const Header = () => {
  return <header></header>;
};

const Footer = () => {
  return <footer></footer>;
};

export const DefaultLayout = (data: LayoutData): Layout => {
  return { Header: Header, Footer: Footer, data: {} };
};
