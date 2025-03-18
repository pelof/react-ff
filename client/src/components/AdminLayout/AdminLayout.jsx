import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import styles from "./AdminLayout.module.css";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <main className={styles.adminPage}>
        <AdminSidebar />
        <section className={styles.adminContents}>{children}</section>
      </main>
    </>
  );
}
