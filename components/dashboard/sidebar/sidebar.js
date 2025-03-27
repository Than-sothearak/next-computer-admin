import SideBarClient from "@/components/SideBarClient";

export default async function Sidebar({session}) {

  return (
    <>
      <SideBarClient session={session}/>
    </>
  );
}
