import AdminLayout from "../../components/AdminLayout/AdminLayout";
import NewProductForm from "../../components/NewProductForm/NewProductForm";
import styles from "./NewProduct.module.css";

function NewProduct() {
  return (
    <>
      <AdminLayout>
        <NewProductForm />
      </AdminLayout>
    </>
  );
}

export default NewProduct;
