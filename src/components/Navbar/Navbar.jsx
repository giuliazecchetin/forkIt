import styles from './navbar.module.css';

function Navbar({ searchTerm, onSearchChange }) {
	return (
		<nav className={styles.navbar}>
			<div className={styles.brand}>ForkIt 🍴</div>
			<div className={styles.searchWrap}>
				<input
					type="search"
					className={styles.searchInput}
					placeholder="Cerca una ricetta..."
					value={searchTerm}
					onChange={(event) => onSearchChange(event.target.value)}
					aria-label="Cerca una ricetta"
				/>
			</div>
			<div className={styles.rightSlot} aria-hidden="true" />
		</nav>
	);
}

export default Navbar;
