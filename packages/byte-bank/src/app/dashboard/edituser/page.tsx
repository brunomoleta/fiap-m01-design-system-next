'use client'

import {Header} from "$/app/components";
import NavigationMenu from "$/app/components/Dashboard/NavigationMenu";
import EditUser from "$/app/components/Dashboard/EditUser";

export default function DashboardEditUser() {
  
  return (
    <>
      <Header isLoggedIn={true}/>
      <main
        className="max-desktop:flex grid grid-cols-dashboard-desktop max-w-7xl mx-auto p-spacing-lg gap-spacing-lg max-desktop:flex-col">
        <NavigationMenu/>
        <div className={'flex flex-col gap-spacing-xl'}>
          <EditUser/>
        </div>
      </main>
    </>
  );
}
