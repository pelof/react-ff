import styles from "./NewProductForm.module.css";

export default function NewProductForm() {
  // State-objekt för formulärdata:
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    brand: "",
    SKU: "",
    price: "",
    published: "",
  });

  //Lägger till innehållet i fälten i formData när de ändras. ?
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Något gick fel vid sparandet");

      alert("Produkt tillagd!");
      setFormData({
        name: "",
        description: "",
        image: "",
        brand: "",
        SKU: "",
        price: "",
        published: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Kunde inte lägga till produkt");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Ny produkt</h2>
        <label htmlFor="name">Namn</label>
        <input
          type="text"
          id="name"
          placeholder="Ange namn"
          maxLength="25"
          className={styles.nameInput}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Beskrivning</label>
        <textarea
          name="description"
          id="description"
          placeholder="Ange beskrivning"
          className={styles.descriptionInput}
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <label htmlFor="image">Bild</label>
        <input
          type="url"
          name="image"
          id="image"
          placeholder="Ange URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <label htmlFor="brand">Märke</label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />
        <label htmlFor="SKU">SKU</label>
        <input
          type="text"
          name="SKU"
          id="SKU"
          placeholder="Ange SKU"
          pattern="[A-Z]{3}[0-9]{3}"
          title="Exempel: AAA123"
          className={styles.SKUInput}
          value={formData.SKU}
          onChange={handleChange}
          required
        />
        <label htmlFor="price">Pris</label>
        <input
          type="number"
          name="price"
          id="price"
          className={styles.priceInput}
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label htmlFor="published">Publicieringsdatum</label>
        <input
          type="date"
          name="published"
          id="published"
          className={styles.publishedInput}
          value={formData.published}
          onChange={handleChange}
          required
        />
        <input
          type="submit"
          className={styles.submitButton}
          value="Lägg till"
        />
      </form>
    </>
  );
}
