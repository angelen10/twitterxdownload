// MyNavbar.js (服务端组件)
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { getTranslation } from "@/lib/i18n";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher"; // 新的客户端组件
import { ThemeSwitcher } from "./ThemeSwitcher";
import FriendsLink from "./FriendsLink";
import { RiSearchLine } from "@remixicon/react";

export default function MyNavbar({ locale = 'en' }) {
  const t = function(key){
    return getTranslation(locale, key);
  }
  return (
    <Navbar classNames={{
      wrapper: "page-container"
    }}>
      <NavbarBrand>
        <Link href="/" className="text-foreground">
          <Image src="/images/logo.png" alt="TwitterXDownload" width={32} height={32} />
          <p className="font-bold text-inherit mx-3 text-2xl">
            {t('TwitterXDownload')}
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        {/* 所有导航项已隐藏 */}
        {/* 搜索功能已隐藏 */}
        {/* Downloader 已隐藏 */}
        {/* Self Hosted 已隐藏 */}
        {/* Friends Link 已隐藏 */}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <LanguageSwitcher locale={locale} />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      {/* 移动端搜索图标已隐藏 */}
    </Navbar>
  );
}