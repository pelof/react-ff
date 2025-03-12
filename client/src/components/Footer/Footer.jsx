import styles from "./Footer.module.css";
import { GlobeCentralSouthAsia, RocketTakeoffFill, ShieldShaded, EmojiLaughingFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


export default function Footer() {
    return(
        <>
        <footer>
       {/* 4 ikoner och text för: Gratis frakt och returer, Expressfrakt
       Säkra betalningar och Nyheter varje dag */}
   <ul className={styles.promise}>
     <li>
       <GlobeCentralSouthAsia className={styles.promiseIcon}></GlobeCentralSouthAsia>
       <div>Gratis frakt och returer</div>
     </li>
     <li>
       <RocketTakeoffFill className={styles.promiseIcon}></RocketTakeoffFill>
       <div>Expressfrakt</div>
     </li>
     <li>
       <ShieldShaded className={styles.promiseIcon}></ShieldShaded>
       <div>Säkra betalningar</div>
     </li>
     <li>
       <EmojiLaughingFill className={styles.promiseIcon}></EmojiLaughingFill>
       <div>Nyheter varje dag</div>
     </li>
   </ul>

    {/* Accordion: */}
   <div className={styles.accordion}>
     <div className={styles.accordion} id="accordionExample">
       <div className={styles.accordionItem}>
         <h2 className={styles.accordionHeader} id="headingOne">
           <button
             className={styles.accordionButton}
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseOne"
             aria-expanded="true"
             aria-controls="collapseOne"
           >
             Shopping
           </button>
         </h2>
         <div
           id="collapseOne"
           className="accordion-collapse collapse show"
           aria-labelledby="headingOne"
           data-bs-parent="#accordionExample"
         >
           <div className="accordion-body">
             <ul className="jackets">
               <li><a href="/vinterjackor">Vinterjackor</a></li>
               <li><a href="/pufferjackor">Pufferjackor</a></li>
               <li><a href="/kappor">Kappor</a></li>
               <li><a href="/trenchcoats">Trenchcoats</a></li>
             </ul>
           </div>
         </div>
       </div>
       <div className="accordion-item">
         <h2 className="accordion-header" id="headingTwo">
           <button
             className="accordion-button collapsed"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseTwo"
             aria-expanded="false"
             aria-controls="collapseTwo"
           >
             Mina Sidor
           </button>
         </h2>
         <div
           id="collapseTwo"
           className="accordion-collapse collapse"
           aria-labelledby="headingTwo"
           data-bs-parent="#accordionExample"
         >
           <div className="accordion-body">
             <ul>
               <li><a href="/kophistorik">Köphistorik</a></li>
               <li><a href="/sekretess">Sekretess</a></li>
               <li><a href="/kontoinstallningar">Kontoinställningar</a></li>
             </ul>
           </div>
         </div>
       </div>
       <div className="accordion-item">
         <h2 className="accordion-header" id="headingThree">
           <button
             className="accordion-button collapsed"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseThree"
             aria-expanded="false"
             aria-controls="collapseThree"
           >
             Kundtjänst
           </button>
         </h2>
         <div
           id="collapseThree"
           className="accordion-collapse collapse"
           aria-labelledby="headingThree"
           data-bs-parent="#accordionExample"
         >
           <div className="accordion-body">
             <ul>
               <li><a href="/FAQ">Vanliga Frågor</a></li>
               <li><a href="/kopvillkar">Köpvillkor</a></li>
               <li><a href="/kontakt">Kontakt</a></li>
             </ul>
           </div>
         </div>
       </div>
       <div className="accordion-item">
         <small className="copyright">&copy; Freaky Fashion</small>
       </div>
     </div>
   </div>
   <div>
     {/* TODO i egen js-fil, kanske med all html också? */}
     <script
       src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
       integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
       crossorigin="anonymous"
     ></script>
     <script
       src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
       integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
       crossorigin="anonymous"
     ></script>
   </div>
     {/* Behövs för att skilja på copyright i accordion och den här. */}
   <div className="footer">
     <div className="footer-links">
       <ul>
         <li>
           <b><a href="/shopping">Shopping</a></b>
         </li>
         <li><a href="/vinterjackor">Vinterjackor</a></li>
         <li><a href="/pufferjackor">Pufferjackor</a></li>
         <li><a href="/kappa">Kappa</a></li>
         <li><a href="/trenchcoats">Trenchcoats</a></li>
       </ul>
       <ul>
         <li>
           <b><a href="/minasidor">Mina sidor</a></b>
         </li>
         <li><a href="/minaordrar">Mina Ordrar</a></li>
         <li><a href="/mittkonto">Mitt Konto</a></li>
       </ul>
       <ul>
         <li>
           <b><a href="/kundtjanst">Kundtjänst</a></b>
         </li>
         <li><a href="/returnpolicy">Returnpolicy</a></li>
         <li><a href="/integritetspolicy">Integritetspolicy</a></li>
       </ul>
     </div>
     <small className="copyright">&copy; Freaky Fashion</small>
   </div>
 </footer>

        </>
    )
}