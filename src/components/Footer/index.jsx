import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Ivy
			<small className={Styles.byline}>❤️ built with a chub</small>
		</footer>
	);
}
export default Footer;
