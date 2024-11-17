// // // import Link from "next/link";

// // // function Navbar() {
// // //   return (
// // //     <nav
// // //       style={{
// // //         position: "absolute",
// // //         top: 0,
// // //         width: "100%",
// // //         zIndex: 10, // Ensure it stays above other elements
// // //         display: "flex",
// // //         justifyContent: "space-evenly",
// // //         alignItems: "center",
// // //         padding: "10px 20px",
// // //         fontFamily: "Arial, sans-serif",
// // //         fontSize: "24px",
// // //         paddingLeft: "20rem",
// // //         paddingRight: "20rem",
// // //       }}
// // //     >
// // //       <Link href="/" passHref style={{
// // //             color: "#365f77", //#913434
// // //             textDecoration: "none",
// // //             fontWeight: "bold",
// // //           }}>
// // //           Faucet 🚰
// // //       </Link>
// // //       <Link href="/avo-draw" passHref style={{
// // //             color: "#913434",
// // //             textDecoration: "none",
// // //             fontWeight: "bold",
// // //           }}>
// // //           Take a chance 🎲
// // //       </Link>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;


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
// // //           gap: "15px",
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
// // //             marginRight: "25px",
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
// // //             marginLeft: "25px",
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
// //           gap: "50px", // Space between links
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
// //               backgroundColor: "#365f77",
// //               color: "white",
// //               border: "none",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //               fontWeight: "bold",
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
// //             flex-direction: column;
// //             padding: 10px;
// //           }

// //           div {
// //             width: 100%;
// //             text-align: center;
// //           }

// //           button {
// //             margin-top: 10px;
// //             width: 100%;
// //           }
// //         }
// //       `}</style>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// import Link from "next/link";

// function Navbar({ connectedAccount, onConnect }) {
//   return (
//     <nav
//       style={{
//         position: "absolute",
//         top: 0,
//         width: "100%",
//         zIndex: 10, // Ensure it stays above other elements
//         display: "flex",
//         justifyContent: "center", // Center the links container
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
//       >
//         {connectedAccount ? (
//           <span
//             style={{
//               fontWeight: "bold",
//               color: "#365f77",
//               fontSize: "16px",
//               display: "inline-block",
//               textAlign: "right",
//               wordBreak: "break-word", // Handle long addresses gracefully
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

//       {/* Responsive Styles */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           nav {
//             flex-direction: column; // Stack items on mobile
//             padding: 10px;
//           }

//           div {
//             text-align: center; // Center all text
//           }

//           button {
//             margin-top: 10px;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// }

// export default Navbar;

import Link from "next/link";
import { useState } from "react";

function Navbar({ connectedAccount, onConnect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 10, // Ensure it stays above other elements
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px",
      }}
    >
      {/* Hamburger Icon for Mobile */}
      <div
        style={{
          display: "none",
          cursor: "pointer",
        }}
        className="hamburger"
        onClick={toggleDropdown}
      >
        ☰
      </div>

      {/* Centered Links */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="links"
      >
        <Link
          href="/"
          passHref
          style={{
            color: "#365f77",
            textDecoration: "none",
            fontWeight: "bold",
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
          }}
        >
          Take a chance 🎲
        </Link>
      </div>

      {/* Right-aligned Connect Button */}
      <div
        style={{
          position: "absolute",
          right: "20px", // Adds padding from the right edge
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

      {/* Dropdown Menu for Mobile */}
      {isDropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            width: "100%",
            background: "rgba(255, 255, 255, 0.9)", // Translucent background for mobile dropdown
            backdropFilter: "blur(5px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            padding: "20px 0",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          }}
          className="mobile-dropdown"
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
            onClick={toggleDropdown}
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
            onClick={toggleDropdown}
          >
            Take a chance 🎲
          </Link>
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
              onClick={() => {
                onConnect();
                toggleDropdown();
              }}
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
      )}

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            padding: 10px;
          }

          .hamburger {
            display: block; /* Show hamburger icon on mobile */
            font-size: 24px;
            margin-right: 10px;
          }

          .links {
            display: none; /* Hide links in mobile view */
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

