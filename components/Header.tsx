// components/header.tsx
import Link from "next/link";
import { cosmic } from "@/cosmic/client";
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu";
import { CheckOut } from "@/cosmic/blocks/ecommerce/CheckOut";
import { InstagramFilled, FacebookFilled, YoutubeFilled } from '@ant-design/icons';

export default async function Header() {
  // Header data
  const { object: settings } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);

  type Link = {
    url: string;
    company: string;
    icon: {
      imgix_url: string;
    };
  };
  return (
    <nav className="space-x-4 items-center py-2 sticky top-0 bg-white/20 dark:bg-black/20 backdrop-blur-lg w-full z-[9999]">
      <div className="w-full grid grid-cols-3 ml-4">
        <div className="gap-x-2 ml-4 flex flex-row items-center lg:mb-0">
          {settings.metadata.links.map((link: Link) => {
            return (
              <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
                <img
                  className="h-[26px] w-[26px] rounded-lg"
                  src={`${link.icon.imgix_url}?w=500&auto=format,compression`}
                  alt={link.company}
                />
              </a>
            );
          })}
        </div>
        <div className="">
          <Link href="/">
            <img
              src={`${settings.metadata.dark_logo.imgix_url}?w=500&auto=format,compression`}
              alt={settings.metadata.company}
              className="h-12 rounded-lg m-auto hidden dark:block"
            />
          </Link>
        </div>
        <div className="flex justify-end items-center px-4">
          <NavMenu
            query={{ type: "navigation-menus", slug: "header" }}
            hasMobileMenu
            className="flex"
          />
          <CheckOut className="ml-4" productPath={"/services"} />
        </div>
      </div>
    </nav >
  );
}
