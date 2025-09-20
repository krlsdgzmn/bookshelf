export const appBarStyles = { paddingTop: 2, backgroundColor: "transparent" };

export const toolbarStyle = {
  justifyContent: "space-between",
  borderRadius: 8,
  backgroundColor: "rgba(20, 20, 20, 0.8)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

export const leftBoxStyle = {
  display: "flex",
  gap: { xs: 1.5, md: 3 },
  alignItems: "center",
};

export const mobileMenuLinksStyle = { display: { xs: "block", md: "none" } };

const { display, ...restDesktopLinksStyle } = leftBoxStyle;
export const desktopLinksStyle = {
  display: { xs: "none", md: "flex" },
  ...restDesktopLinksStyle,
};

export const titleStyle = {
  fontSize: { xs: "small", md: "medium" },
  textDecoration: "none",
  fontWeight: "bold",
  letterSpacing: 2,
  color: "white",
  paddingTop: 0.5,
};

export const linkStyle = {
  padding: 4,
  color: "white",
  textDecoration: "none",
  borderBottom: "1.5px solid transparent",
};

const { borderBottom, ...restLinkStyle } = linkStyle;
export const activeLinkStyle = {
  ...restLinkStyle,
  borderBottom: "2px solid #DDD",
};
