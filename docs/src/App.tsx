import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Installation } from "./pages/Installation";
import { Theming } from "./pages/Theming";
import { ButtonPage } from "./pages/ButtonPage";
import { CardPage } from "./pages/CardPage";
import { BadgePage } from "./pages/BadgePage";
import { PillPage } from "./pages/PillPage";
import { SearchBarPage } from "./pages/SearchBarPage";
import { ModalPage } from "./pages/ModalPage";
import { TabNavPage } from "./pages/TabNavPage";
import { TopNavBarPage } from "./pages/TopNavBarPage";
import { BottomNavPage } from "./pages/BottomNavPage";
import { FooterPage } from "./pages/FooterPage";
import { HeroSectionPage } from "./pages/HeroSectionPage";
import { IconPage } from "./pages/IconPage";
import { LayoutPage } from "./pages/LayoutPage";
import { GridPage } from "./pages/GridPage";
import { ToastPage } from "./pages/ToastPage";
import { FilterSidebarPage } from "./pages/FilterSidebarPage";
import { IconButtonPage } from "./pages/IconButtonPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/installation" element={<Installation />} />
      <Route path="/theming" element={<Theming />} />
      <Route path="/components/button" element={<ButtonPage />} />
      <Route path="/components/icon-button" element={<IconButtonPage />} />
      <Route path="/components/card" element={<CardPage />} />
      <Route path="/components/badge" element={<BadgePage />} />
      <Route path="/components/pill" element={<PillPage />} />
      <Route path="/components/search-bar" element={<SearchBarPage />} />
      <Route path="/components/modal" element={<ModalPage />} />
      <Route path="/components/tab-nav" element={<TabNavPage />} />
      <Route path="/components/top-navbar" element={<TopNavBarPage />} />
      <Route path="/components/bottom-nav" element={<BottomNavPage />} />
      <Route path="/components/footer" element={<FooterPage />} />
      <Route path="/components/hero-section" element={<HeroSectionPage />} />
      <Route path="/components/icon" element={<IconPage />} />
      <Route path="/components/layout" element={<LayoutPage />} />
      <Route path="/components/grid" element={<GridPage />} />
      <Route path="/components/toast" element={<ToastPage />} />
      <Route path="/components/filter-sidebar" element={<FilterSidebarPage />} />
    </Routes>
  );
}
