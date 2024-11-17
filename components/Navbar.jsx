// // // // import Link from "next/link";

// // // // function Navbar() {
// // // //   return (
// // // //     <nav
// // // //       style={{
// // // //         position: "absolute",
// // // //         top: 0,
// // // //         width: "100%",
// // // //         zIndex: 10, // Ensure it stays above other elements
// // // //         display: "flex",
// // // //         justifyContent: "space-evenly",
// // // //         alignItems: "center",
// // // //         padding: "10px 20px",
// // // //         fontFamily: "Arial, sans-serif",
// // // //         fontSize: "24px",
// // // //         paddingLeft: "20rem",
// // // //         paddingRight: "20rem",
// // // //       }}
// // // //     >
// // // //       <Link href="/" passHref style={{
// // // //             color: "#365f77", //#913434
// // // //             textDecoration: "none",
// // // //             fontWeight: "bold",
// // // //           }}>
// // // //           Faucet 🚰
// // // //       </Link>
// // // //       <Link href="/avo-draw" passHref style={{
// // // //             color: "#913434",
// // // //             textDecoration: "none",
// // // //             fontWeight: "bold",
// // // //           }}>
// // // //           Take a chance 🎲
// // // //       </Link>
// // // //     </nav>
// // // //   );
// // // // }

// // // // export default Navbar;


// // // // import Link from "next/link";

// // // // function Navbar({ connectedAccount, onConnect }) {
// // // //   return (
// // // //     <nav
// // // //       style={{
// // // //         position: "absolute",
// // // //         top: 0,
// // // //         width: "100%",
// // // //         zIndex: 10, // Ensure it stays above other elements
// // // //         display: "flex",
// // // //         justifyContent: "center", // Center the links container
// // // //         alignItems: "center",
// // // //         padding: "10px 20px",
// // // //         fontFamily: "Arial, sans-serif",
// // // //         fontSize: "24px",
// // // //       }}
// // // //     >
// // // //       {/* Centered Links */}
// // // //       <div
// // // //         style={{
// // // //           display: "flex",
// // // //           gap: "15px",
// // // //           justifyContent: "center",
// // // //           alignItems: "center",
// // // //         }}
// // // //       >
// // // //         <Link
// // // //           href="/"
// // // //           passHref
// // // //           style={{
// // // //             color: "#365f77",
// // // //             textDecoration: "none",
// // // //             fontWeight: "bold",
// // // //             marginRight: "25px",
// // // //           }}
// // // //         >
// // // //           Faucet 🚰
// // // //         </Link>
// // // //         <Link
// // // //           href="/avo-draw"
// // // //           passHref
// // // //           style={{
// // // //             color: "#913434",
// // // //             textDecoration: "none",
// // // //             fontWeight: "bold",
// // // //             marginLeft: "25px",
// // // //           }}
// // // //         >
// // // //           Take a chance 🎲
// // // //         </Link>
// // // //       </div>

// // // //       {/* Right-aligned Connect Button */}
// // // //       <div
// // // //         style={{
// // // //           position: "absolute",
// // // //           right: "20px", // Adds padding from the right edge
// // // //         }}
// // // //       >
// // // //         {connectedAccount ? (
// // // //           <span
// // // //             style={{
// // // //               fontWeight: "bold",
// // // //               color: "#365f77",
// // // //             }}
// // // //           >
// // // //             Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
// // // //           </span>
// // // //         ) : (
// // // //           <button
// // // //             onClick={onConnect}
// // // //             style={{
// // // //               padding: "8px 16px",
// // // //               fontSize: "16px",
// // // //               backgroundColor: "#365f77",
// // // //               color: "white",
// // // //               border: "none",
// // // //               borderRadius: "5px",
// // // //               cursor: "pointer",
// // // //               fontWeight: "bold",
// // // //             }}
// // // //           >
// // // //             Connect Wallet
// // // //           </button>
// // // //         )}
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // }

// // // // export default Navbar;
// // // import Link from "next/link";

// // // function Navbar({ connectedAccount, onConnect }) {
// // //   return (
// // //     <nav
// // //       style={{
// // //         position: "absolute",
// // //         top: 0,
// // //         width: "100%",
// // //         zIndex: 10, // Ensure it stays above other elements
// // //         display: "flex",
// // //         justifyContent: "center", // Center the links container
// // //         alignItems: "center",
// // //         padding: "10px 20px",
// // //         fontFamily: "Arial, sans-serif",
// // //         fontSize: "24px",
// // //       }}
// // //     >
// // //       {/* Centered Links */}
// // //       <div
// // //         style={{
// // //           display: "flex",
// // //           gap: "50px", // Space between links
// // //           justifyContent: "center",
// // //           alignItems: "center",
// // //         }}
// // //       >
// // //         <Link
// // //           href="/"
// // //           passHref
// // //           style={{
// // //             color: "#365f77",
// // //             textDecoration: "none",
// // //             fontWeight: "bold",
// // //           }}
// // //         >
// // //           Faucet 🚰
// // //         </Link>
// // //         <Link
// // //           href="/avo-draw"
// // //           passHref
// // //           style={{
// // //             color: "#913434",
// // //             textDecoration: "none",
// // //             fontWeight: "bold",
// // //           }}
// // //         >
// // //           Take a chance 🎲
// // //         </Link>
// // //       </div>

// // //       {/* Right-aligned Connect Button */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           right: "20px", // Adds padding from the right edge
// // //         }}
// // //       >
// // //         {connectedAccount ? (
// // //           <span
// // //             style={{
// // //               fontWeight: "bold",
// // //               color: "#365f77",
// // //               fontSize: "16px",
// // //             }}
// // //           >
// // //             Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
// // //           </span>
// // //         ) : (
// // //           <button
// // //             onClick={onConnect}
// // //             style={{
// // //               padding: "8px 16px",
// // //               fontSize: "16px",
// // //               backgroundColor: "#365f77",
// // //               color: "white",
// // //               border: "none",
// // //               borderRadius: "5px",
// // //               cursor: "pointer",
// // //               fontWeight: "bold",
// // //             }}
// // //           >
// // //             Connect Wallet
// // //           </button>
// // //         )}
// // //       </div>

// // //       {/* Responsive Styles */}
// // //       <style jsx>{`
// // //         @media (max-width: 768px) {
// // //           nav {
// // //             flex-direction: column;
// // //             padding: 10px;
// // //           }

// // //           div {
// // //             width: 100%;
// // //             text-align: center;
// // //           }

// // //           button {
// // //             margin-top: 10px;
// // //             width: 100%;
// // //           }
// // //         }
// // //       `}</style>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;

// // import Link from "next/link";

// // function Navbar({ connectedAccount, onConnect }) {
// //   return (
// //     <nav
// //       style={{
// //         position: "absolute",
// //         top: 0,
// //         width: "100%",
// //         zIndex: 10, // Ensure it stays above other elements
// //         display: "flex",
// //         justifyContent: "center", // Center the links container
// //         alignItems: "center",
// //         padding: "10px 20px",
// //         fontFamily: "Arial, sans-serif",
// //         fontSize: "24px",
// //       }}
// //     >
// //       {/* Centered Links */}
// //       <div
// //         style={{
// //           display: "flex",
// //           gap: "25px", // Space between links
// //           justifyContent: "center",
// //           alignItems: "center",
// //         }}
// //       >
// //         <Link
// //           href="/"
// //           passHref
// //           style={{
// //             color: "#365f77",
// //             textDecoration: "none",
// //             fontWeight: "bold",
// //           }}
// //         >
// //           Faucet 🚰
// //         </Link>
// //         <Link
// //           href="/avo-draw"
// //           passHref
// //           style={{
// //             color: "#913434",
// //             textDecoration: "none",
// //             fontWeight: "bold",
// //           }}
// //         >
// //           Take a chance 🎲
// //         </Link>
// //       </div>

// //       {/* Right-aligned Connect Button */}
// //       <div
// //         style={{
// //           position: "absolute",
// //           right: "20px", // Adds padding from the right edge
// //         }}
// //       >
// //         {connectedAccount ? (
// //           <span
// //             style={{
// //               fontWeight: "bold",
// //               color: "#365f77",
// //               fontSize: "16px",
// //               display: "inline-block",
// //               textAlign: "right",
// //               wordBreak: "break-word", // Handle long addresses gracefully
// //             }}
// //           >
// //             Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
// //           </span>
// //         ) : (
// //           <button
// //             onClick={onConnect}
// //             style={{
// //               padding: "8px 16px",
// //               fontSize: "16px",
// //               color: "#365f77",
// //               border: "2px solid #365f77",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //               fontWeight: "bold",
// //               background: "transparent",
// //             }}
// //           >
// //             Connect Wallet
// //           </button>
// //         )}
// //       </div>

// //       {/* Responsive Styles */}
// //       <style jsx>{`
// //         @media (max-width: 768px) {
// //           nav {
// //             flex-direction: column; // Stack items on mobile
// //             padding: 10px;
// //           }

// //           div {
// //             text-align: center; // Center all text
// //           }

// //           button {
// //             margin-top: 10px;
// //           }
// //         }
// //       `}</style>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// import Link from "next/link";
// import { useState } from "react";

// function Navbar({ connectedAccount, onConnect }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   return (
//     <nav
//       style={{
//         position: "absolute",
//         top: 0,
//         width: "100%",
//         zIndex: 10,
//         display: "flex",
//         justifyContent: "center", // Center the links container (as per desktop design)
//         alignItems: "center",
//         padding: "10px 20px",
//         fontFamily: "Arial, sans-serif",
//         fontSize: "24px",
//       }}
//     >
//       {/* Centered Links */}
//       <div
//         style={{
//           display: "flex",
//           gap: "25px", // Space between links
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         className="links"
//       >
//         <Link
//           href="/"
//           passHref
//           style={{
//             color: "#365f77",
//             textDecoration: "none",
//             fontWeight: "bold",
//           }}
//         >
//           Faucet 🚰
//         </Link>
//         <Link
//           href="/avo-draw"
//           passHref
//           style={{
//             color: "#913434",
//             textDecoration: "none",
//             fontWeight: "bold",
//           }}
//         >
//           Take a chance 🎲
//         </Link>
//       </div>

//       {/* Right-aligned Connect Button */}
//       <div
//         style={{
//           position: "absolute",
//           right: "20px", // Adds padding from the right edge
//         }}
//         className="connect"
//       >
//         {connectedAccount ? (
//           <span
//             style={{
//               fontWeight: "bold",
//               color: "#365f77",
//               fontSize: "16px",
//             }}
//           >
//             Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
//           </span>
//         ) : (
//           <button
//             onClick={onConnect}
//             style={{
//               padding: "8px 16px",
//               fontSize: "16px",
//               color: "#365f77",
//               border: "2px solid #365f77",
//               borderRadius: "5px",
//               cursor: "pointer",
//               fontWeight: "bold",
//               background: "transparent",
//             }}
//           >
//             Connect Wallet
//           </button>
//         )}
//       </div>

//       {/* Hamburger Menu for Mobile */}
//       <div
//         style={{
//           display: "none", // Hidden on desktop
//           cursor: "pointer",
//           fontSize: "28px",
//           position: "absolute",
//           left: "20px", // Adds padding from the left edge
//         }}
//         className="hamburger"
//         onClick={toggleMenu}
//       >
//         ☰
//       </div>

//       {/* Dropdown for Mobile */}
//       {isMenuOpen && (
//         <div
//           style={{
//             position: "absolute",
//             top: "60px",
//             left: 0,
//             width: "100%",
//             backgroundColor: "#fff",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "15px",
//             padding: "20px 0",
//             boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <Link
//             href="/"
//             passHref
//             style={{
//               color: "#365f77",
//               textDecoration: "none",
//               fontWeight: "bold",
//               fontSize: "20px",
//             }}
//             onClick={toggleMenu}
//           >
//             Faucet 🚰
//           </Link>
//           <Link
//             href="/avo-draw"
//             passHref
//             style={{
//               color: "#913434",
//               textDecoration: "none",
//               fontWeight: "bold",
//               fontSize: "20px",
//             }}
//             onClick={toggleMenu}
//           >
//             Take a chance 🎲
//           </Link>
//         </div>
//       )}

//       {/* Responsive Styles */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .links {
//             display: none; /* Hide links on mobile */
//           }

//           .hamburger {
//             display: block; /* Show hamburger on mobile */
//           }

//           .connect {
//             right: 20px; /* Keep connect button aligned right on mobile */
//           }
//         }
//       `}</style>
//     </nav>
//   );
// }

// export default Navbar;
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar({ connectedAccount, onConnect }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect viewport size and update `isMobile`
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  if (isMobile) {
    // Mobile Layout
    return (
      <nav
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          fontFamily: "Arial, sans-serif",
          fontSize: "24px",
        }}
      >
        {/* Hamburger Menu */}
        <div
          style={{
            cursor: "pointer",
            fontSize: "28px",
          }}
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Right-aligned Connect Button */}
        <div>
          {connectedAccount ? (
            <span
              style={{
                fontWeight: "bold",
                color: "#365f77",
                fontSize: "16px",
              }}
            >
              Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
            </span>
          ) : (
            <button
              onClick={onConnect}
              style={{
                padding: "8px 16px",
                fontSize: "16px",
                color: "#365f77",
                border: "2px solid #365f77",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                background: "transparent",
              }}
            >
              Connect Wallet
            </button>
          )}
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: 0,
              width: "100%",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              padding: "20px 0",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link
              href="/"
              passHref
              style={{
                color: "#365f77",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={toggleMenu}
            >
              Faucet 🚰
            </Link>
            <Link
              href="/avo-draw"
              passHref
              style={{
                color: "#913434",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={toggleMenu}
            >
              Take a chance 🎲
            </Link>
          </div>
        )}
      </nav>
    );
  }

  // Desktop Layout
  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px",
      }}
    >
      {/* Centered Links */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          passHref
          style={{
            color: "#365f77",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "25px",
          }}
        >
          Faucet 🚰
        </Link>
        <Link
          href="/avo-draw"
          passHref
          style={{
            color: "#913434",
            textDecoration: "none",
            fontWeight: "bold",
            marginLeft: "25px",
          }}
        >
          Take a chance 🎲
        </Link>
      </div>

      {/* Right-aligned Connect Button */}
      <div
        style={{
          position: "absolute",
          right: "20px",
        }}
      >
        {connectedAccount ? (
          <span
            style={{
              fontWeight: "bold",
              color: "#365f77",
              fontSize: "16px",
            }}
          >
            Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
          </span>
        ) : (
          <button
            onClick={onConnect}
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              color: "#365f77",
              border: "2px solid #365f77",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              background: "transparent",
            }}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
