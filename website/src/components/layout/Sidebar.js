import { Fragment } from "react";
import Link from "next/link";

export default function Sidebar({ nav = {} }) {
  return (
    <aside className="pos_f ovy_s t_4xl w_300 b_2xl pb_xl bdr_lightgrey">
      <nav>
        {Object.keys(nav).map((key) => {
          return typeof nav[key] === "string" ? (
            <SidebarLink text={key} href={nav[key]} key={key} />
          ) : (
            <SidebarGroup title={key} links={nav[key]} key={key} />
          );
        })}
      </nav>
    </aside>
  );
}

function SidebarGroup({ title, links }) {
  return (
    <Fragment>
      <h3 className="mt_xl">{title}</h3>
      {Object.keys(links).map((item) => {
        return <SidebarLink text={item} href={links[item]} key={item} />;
      })}
    </Fragment>
  );
}

function SidebarLink({ text, href }) {
  return (
    <Link href={href}>
      <a className="d_b mb_sm">{text}</a>
    </Link>
  );
}
