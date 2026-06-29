interface EmailProps {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

export function EmailTemplate({
	firstName,
	lastName,
	email,
	message,
}: EmailProps) {
	return (
		<div style={styles.container}>
			<h1 style={styles.greeting}>
				From {firstName} {lastName},
			</h1>

			<div style={styles.body}>
				<p style={styles.text}>{message}</p>
			</div>

			<hr style={styles.divider} />

			<div style={styles.footer}>
				<p style={styles.footerText}>
					Email came from:
					<br />
					<strong>{email}</strong>
				</p>
			</div>
		</div>
	);
}

const styles = {
	container: {
		fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
		backgroundColor: "#ffffff",
		color: "#333333",
		padding: "24px",
		maxWidth: "600px",
		margin: "0 auto",
		border: "1px solid #eaeaea",
		borderRadius: "5px",
	},
	greeting: {
		fontSize: "24px",
		color: "#1a1a1a",
		marginBottom: "16px",
		fontWeight: "normal",
	},
	body: {
		marginBottom: "24px",
	},
	text: {
		fontSize: "16px",
		lineHeight: "1.5",
		color: "#444444",
		margin: "0",
		whiteSpace: "pre-wrap",
	},
	divider: {
		border: "none",
		borderTop: "1px solid #eaeaea",
		margin: "24px 0",
	},
	footer: {
		marginTop: "24px",
	},
	footerText: {
		fontSize: "14px",
		color: "#888888",
		lineHeight: "1.5",
		margin: "0",
	},
};
