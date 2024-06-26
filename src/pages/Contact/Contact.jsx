// Components:
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

// CSS:
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.containerForm}>
        <h2>Entre em contato conosco:</h2>
        <form>
          <label>
            <Input namePlaceholder="Digite seu nome" />
          </label>
          <label>
            <Input namePlaceholder="Digite seu e-mail" />
          </label>
          <label>
            <textarea
              name="doubt"
              cols="30"
              rows="10"
              placeholder="Digite sua dúvida..."
            ></textarea>
          </label>
          <Button buttonFill={true} nameButton="Enviar mensagem" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
