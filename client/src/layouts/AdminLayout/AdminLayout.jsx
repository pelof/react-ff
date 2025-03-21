import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import styles from "./AdminLayout.module.css";
import { useEffect } from "react";

const AdminLayout = () => {
  useEffect(() => {
    document.title = "Admin";
  }, []);
  return (
    <>
      <>
        <AdminHeader />
        <main className={styles.adminPage}>
          <AdminSidebar />
          <section className={styles.adminContents}>
            <Outlet />
          </section>
        </main>
      </>
    </>
  );
};

export default AdminLayout;
