import CompanyLogoSvg from '../assets/company/CompanyLogo.svg'; // Corrección en la importación del SVG
import styles from '../components/CompanyLogoSvg.module.css'; // Importación de los estilos CSS (si es necesario)

const CompanyLogo = () => {
    return (
        <div className={styles.CompanyLogo}> {/* Utiliza la clase CSS importada */}
            <img src={CompanyLogoSvg} alt="Logo de la Compania" /> {/* Utiliza la variable que contiene la ruta al SVG */}
        </div>
    );
}

export default CompanyLogo;
